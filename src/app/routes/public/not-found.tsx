import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page non trouvée</h2>
        <p className="mt-2 text-gray-600">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          <Home className="h-5 w-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
