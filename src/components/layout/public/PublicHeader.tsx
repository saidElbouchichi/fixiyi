import { Link } from "react-router-dom";

export default function PublicHeader() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-gray-800">
        Fixiyi
      </Link>

      <nav className="flex items-center gap-6 text-gray-700">
        <Link to="/login" className="hover:text-black">Connexion</Link>
        <Link to="/register" className="hover:text-black">Créer un compte</Link>
      </nav>
    </header>
  );
}
