import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/services", label: "Mes services" },
    { to: "/bookings", label: "Réservations" },
    { to: "/payments", label: "Paiements" },
    { to: "/profile", label: "Profil" },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm">
      <div className="p-4 text-xl font-bold text-blue-600">Fixiyi</div>

      <nav className="flex flex-col gap-1 px-4">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`rounded px-3 py-2 ${
              pathname === l.to ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
