import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-blue-50 to-white", children: [_jsx("header", { className: "bg-white shadow-sm", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-2xl font-bold text-blue-600", children: "Fixiyi" }), _jsxs("nav", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/login", className: "rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100", children: "Connexion" }), _jsx(Link, { to: "/register", className: "rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700", children: "S'inscrire" })] })] }) }) }), _jsxs("main", { children: [_jsx("section", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-center", children: [_jsxs("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", children: ["Trouvez le bon professionnel", _jsx("br", {}), _jsx("span", { className: "text-blue-600", children: "pr\u00E8s de chez vous" })] }), _jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg text-gray-600", children: "Fixiyi connecte les clients avec des prestataires de services v\u00E9rifi\u00E9s et disponibles dans votre quartier. R\u00E9servez en toute confiance." }), _jsx("div", { className: "mx-auto mt-10 max-w-xl", children: _jsxs("div", { className: "flex gap-2", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-3 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Rechercher un service...", className: "w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsx("button", { className: "rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700", children: "Rechercher" })] }) })] }) }), _jsx("section", { className: "bg-white py-16", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "mb-8 text-center text-3xl font-bold text-gray-900", children: "Services populaires" }), _jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6", children: categories.map((category) => (_jsxs("button", { className: "flex flex-col items-center gap-3 rounded-xl border-2 border-gray-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-lg", children: [_jsx("span", { className: "text-4xl", children: category.icon }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: category.name })] }, category.name))) })] }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "mb-12 text-center text-3xl font-bold text-gray-900", children: "Pourquoi choisir Fixiyi ?" }), _jsx("div", { className: "grid gap-8 md:grid-cols-3", children: features.map((feature) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100", children: _jsx(feature.icon, { className: "h-8 w-8 text-blue-600" }) }), _jsx("h3", { className: "mb-2 text-xl font-semibold text-gray-900", children: feature.title }), _jsx("p", { className: "text-gray-600", children: feature.description })] }, feature.title))) })] }) }), _jsx("section", { className: "bg-blue-600 py-16 text-white", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8", children: [_jsx("h2", { className: "mb-4 text-3xl font-bold", children: "Vous \u00EAtes un professionnel ?" }), _jsx("p", { className: "mb-8 text-xl text-blue-100", children: "Rejoignez Fixiyi et d\u00E9veloppez votre activit\u00E9" }), _jsx(Link, { to: "/register", className: "inline-block rounded-lg bg-white px-8 py-3 font-medium text-blue-600 hover:bg-gray-100", children: "Devenir prestataire" })] }) })] }), _jsx("footer", { className: "bg-gray-900 py-8 text-center text-gray-400", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("p", { children: ["Fixiyi \u00A9 ", new Date().getFullYear(), " \u2013 Tous droits r\u00E9serv\u00E9s"] }) }) })] }));
}
