import { Link } from "react-router-dom";
import { Search, MapPin, Shield, Clock } from "lucide-react";

export default function HomePage() {
  const categories = [
    { name: "Plomberie", icon: "🔧" },
    { name: "Électricité", icon: "⚡" },
    { name: "Ménage", icon: "🧹" },
    { name: "Jardinage", icon: "🌱" },
    { name: "Déménagement", icon: "📦" },
    { name: "Peinture", icon: "🎨" },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Prestataires à proximité",
      description: "Trouvez rapidement des professionnels disponibles près de chez vous",
    },
    {
      icon: Shield,
      title: "Paiement sécurisé",
      description: "Transactions protégées et sécurisées via notre plateforme",
    },
    {
      icon: Clock,
      title: "Réservation instantanée",
      description: "Réservez en quelques clics et recevez une confirmation immédiate",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Fixiyi
            </Link>
            <nav className="flex items-center gap-4">
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Connexion
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                S'inscrire
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Trouvez le bon professionnel
              <br />
              <span className="text-blue-600">près de chez vous</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Fixiyi connecte les clients avec des prestataires de services vérifiés et
              disponibles dans votre quartier. Réservez en toute confiance.
            </p>

            <div className="mx-auto mt-10 max-w-xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un service..."
                    className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Services populaires
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="flex flex-col items-center gap-3 rounded-xl border-2 border-gray-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-lg"
                >
                  <span className="text-4xl">{category.icon}</span>
                  <span className="text-sm font-medium text-gray-900">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Pourquoi choisir Fixiyi ?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold">Vous êtes un professionnel ?</h2>
            <p className="mb-8 text-xl text-blue-100">
              Rejoignez Fixiyi et développez votre activité
            </p>
            <Link
              to="/register"
              className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-blue-600 hover:bg-gray-100"
            >
              Devenir prestataire
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Fixiyi © {new Date().getFullYear()} – Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
