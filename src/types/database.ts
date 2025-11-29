export type UserType = "client" | "provider";

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  avatar_url?: string;
  user_type: UserType;
  created_at: string;
  updated_at: string;
}

export interface Provider {
  id: string;
  user_id: string;
  business_name?: string;
  description?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  verified: boolean;
  average_rating: number;
  total_reviews: number;
  created_at: string;
  updated_at: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  display_order: number;
  created_at: string;
}

export interface Service {
  id: string;
  provider_id: string;
  category_id: string;
  name: string;
  description?: string;
  base_price: number;
  duration_minutes: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  client_id: string;
  service_id: string;
  provider_id: string;
  booking_date: string;
  status: BookingStatus;
  total_price: number;
  client_address?: string;
  client_latitude?: number;
  client_longitude?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  booking_id: string;
  client_id: string;
  provider_id: string;
  rating: number;
  comment?: string;
  created_at: string;
}

export interface Payment {
  id: string;
  booking_id: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  payment_method?: string;
  transaction_id?: string;
  created_at: string;
  updated_at: string;
}
