/*
  # Fixiyi Initial Database Schema

  ## Overview
  This migration creates the complete database structure for Fixiyi, a platform connecting clients with service providers.

  ## 1. New Tables Created

  ### `profiles`
  - `id` (uuid, primary key) - Links to auth.users
  - `email` (text, unique, not null)
  - `full_name` (text)
  - `phone` (text)
  - `avatar_url` (text)
  - `user_type` (text) - 'client' or 'provider'
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `providers`
  - `id` (uuid, primary key)
  - `user_id` (uuid, foreign key to profiles)
  - `business_name` (text)
  - `description` (text)
  - `address` (text)
  - `latitude` (numeric) - For geolocation
  - `longitude` (numeric) - For geolocation
  - `verified` (boolean) - Provider verification status
  - `average_rating` (numeric)
  - `total_reviews` (integer)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `service_categories`
  - `id` (uuid, primary key)
  - `name` (text, unique)
  - `slug` (text, unique)
  - `icon` (text) - Icon name or URL
  - `description` (text)
  - `display_order` (integer)
  - `created_at` (timestamptz)

  ### `services`
  - `id` (uuid, primary key)
  - `provider_id` (uuid, foreign key to providers)
  - `category_id` (uuid, foreign key to service_categories)
  - `name` (text, not null)
  - `description` (text)
  - `base_price` (numeric, not null)
  - `duration_minutes` (integer)
  - `is_active` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `bookings`
  - `id` (uuid, primary key)
  - `client_id` (uuid, foreign key to profiles)
  - `service_id` (uuid, foreign key to services)
  - `provider_id` (uuid, foreign key to providers)
  - `booking_date` (timestamptz, not null)
  - `status` (text) - 'pending', 'confirmed', 'completed', 'cancelled'
  - `total_price` (numeric, not null)
  - `client_address` (text)
  - `client_latitude` (numeric)
  - `client_longitude` (numeric)
  - `notes` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `reviews`
  - `id` (uuid, primary key)
  - `booking_id` (uuid, foreign key to bookings)
  - `client_id` (uuid, foreign key to profiles)
  - `provider_id` (uuid, foreign key to providers)
  - `rating` (integer, 1-5)
  - `comment` (text)
  - `created_at` (timestamptz)

  ### `payments`
  - `id` (uuid, primary key)
  - `booking_id` (uuid, foreign key to bookings)
  - `amount` (numeric, not null)
  - `currency` (text)
  - `status` (text) - 'pending', 'completed', 'failed', 'refunded'
  - `payment_method` (text)
  - `transaction_id` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## 2. Security
  - Row Level Security (RLS) enabled on all tables
  - Policies for authenticated users to:
    - Read their own profile data
    - Update their own profile
    - View public provider information
    - Manage their own bookings
    - Create reviews for completed bookings
    - View their payment history

  ## 3. Important Notes
  - Geolocation fields (latitude, longitude) use numeric type for precision
  - All monetary values use numeric type to avoid floating-point issues
  - Cascading deletes are NOT used to preserve data integrity
  - Timestamps default to now() for automatic tracking
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  phone text,
  avatar_url text,
  user_type text NOT NULL DEFAULT 'client' CHECK (user_type IN ('client', 'provider')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create providers table
CREATE TABLE IF NOT EXISTS providers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE NOT NULL REFERENCES profiles(id),
  business_name text,
  description text,
  address text,
  latitude numeric(10, 8),
  longitude numeric(11, 8),
  verified boolean DEFAULT false,
  average_rating numeric(3, 2) DEFAULT 0,
  total_reviews integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE providers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view verified providers"
  ON providers FOR SELECT
  TO authenticated
  USING (verified = true);

CREATE POLICY "Providers can view own profile"
  ON providers FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Providers can update own profile"
  ON providers FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Providers can insert own profile"
  ON providers FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create service_categories table
CREATE TABLE IF NOT EXISTS service_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  icon text,
  description text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view service categories"
  ON service_categories FOR SELECT
  TO authenticated
  USING (true);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid NOT NULL REFERENCES providers(id),
  category_id uuid NOT NULL REFERENCES service_categories(id),
  name text NOT NULL,
  description text,
  base_price numeric(10, 2) NOT NULL,
  duration_minutes integer DEFAULT 60,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  TO authenticated
  USING (is_active = true);

CREATE POLICY "Providers can manage own services"
  ON services FOR ALL
  TO authenticated
  USING (
    provider_id IN (
      SELECT id FROM providers WHERE user_id = auth.uid()
    )
  );

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL REFERENCES profiles(id),
  service_id uuid NOT NULL REFERENCES services(id),
  provider_id uuid NOT NULL REFERENCES providers(id),
  booking_date timestamptz NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  total_price numeric(10, 2) NOT NULL,
  client_address text,
  client_latitude numeric(10, 8),
  client_longitude numeric(11, 8),
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (client_id = auth.uid());

CREATE POLICY "Providers can view bookings for their services"
  ON bookings FOR SELECT
  TO authenticated
  USING (
    provider_id IN (
      SELECT id FROM providers WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Clients can create bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (client_id = auth.uid());

CREATE POLICY "Clients can update own bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (client_id = auth.uid())
  WITH CHECK (client_id = auth.uid());

CREATE POLICY "Providers can update bookings for their services"
  ON bookings FOR UPDATE
  TO authenticated
  USING (
    provider_id IN (
      SELECT id FROM providers WHERE user_id = auth.uid()
    )
  );

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid UNIQUE NOT NULL REFERENCES bookings(id),
  client_id uuid NOT NULL REFERENCES profiles(id),
  provider_id uuid NOT NULL REFERENCES providers(id),
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Clients can create reviews for their completed bookings"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    client_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM bookings
      WHERE bookings.id = booking_id
        AND bookings.client_id = auth.uid()
        AND bookings.status = 'completed'
    )
  );

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES bookings(id),
  amount numeric(10, 2) NOT NULL,
  currency text DEFAULT 'EUR',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_method text,
  transaction_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view payments for their bookings"
  ON payments FOR SELECT
  TO authenticated
  USING (
    booking_id IN (
      SELECT id FROM bookings
      WHERE client_id = auth.uid()
        OR provider_id IN (
          SELECT id FROM providers WHERE user_id = auth.uid()
        )
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_providers_location ON providers(latitude, longitude) WHERE verified = true;
CREATE INDEX IF NOT EXISTS idx_services_provider ON services(provider_id) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category_id) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_bookings_client ON bookings(client_id);
CREATE INDEX IF NOT EXISTS idx_bookings_provider ON bookings(provider_id);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_reviews_provider ON reviews(provider_id);
CREATE INDEX IF NOT EXISTS idx_payments_booking ON payments(booking_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_providers_updated_at
  BEFORE UPDATE ON providers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at
  BEFORE UPDATE ON payments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();