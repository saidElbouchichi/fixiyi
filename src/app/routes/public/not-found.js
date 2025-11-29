import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
export default function NotFoundPage() {
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-9xl font-bold text-blue-600", children: "404" }), _jsx("h2", { className: "mt-4 text-3xl font-bold text-gray-900", children: "Page non trouv\uFFFDe" }), _jsx("p", { className: "mt-2 text-gray-600", children: "D\uFFFDsol\uFFFD, la page que vous recherchez n'existe pas." }), _jsxs(Link, { to: "/", className: "mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700", children: [_jsx(Home, { className: "h-5 w-5" }), "Retour \uFFFD l'accueil"] })] }) }));
}
