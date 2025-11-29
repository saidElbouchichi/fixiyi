import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from "@/hooks/use-auth";
import { Calendar, DollarSign, Users, Clock } from "lucide-react";
export default function DashboardPage() {
    const { profile } = useAuth();
    const stats = [
        {
            label: "Réservations",
            value: "0",
            icon: Calendar,
            color: "bg-blue-100 text-blue-600",
        },
        {
            label: "En attente",
            value: "0",
            icon: Clock,
            color: "bg-yellow-100 text-yellow-600",
        },
        {
            label: "Complétées",
            value: "0",
            icon: Users,
            color: "bg-green-100 text-green-600",
        },
        {
            label: "Montant total",
            value: "0 €",
            icon: DollarSign,
            color: "bg-purple-100 text-purple-600",
        },
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-gray-900", children: ["Bienvenue, ", profile?.full_name || "Utilisateur"] }), _jsx("p", { className: "mt-2 text-gray-600", children: profile?.user_type === "provider"
                            ? "Gérez vos services et réservations"
                            : "Consultez vos réservations et trouvez des services" })] }), _jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((stat) => (_jsx("div", { className: "rounded-lg bg-white p-6 shadow-sm", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: stat.label }), _jsx("p", { className: "mt-2 text-3xl font-bold text-gray-900", children: stat.value })] }), _jsx("div", { className: `rounded-full p-3 ${stat.color}`, children: _jsx(stat.icon, { className: "h-6 w-6" }) })] }) }, stat.label))) }), _jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [_jsxs("div", { className: "rounded-lg bg-white p-6 shadow-sm", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "R\u00E9servations r\u00E9centes" }), _jsx("div", { className: "mt-4 text-center text-gray-500", children: "Aucune r\u00E9servation pour le moment" })] }), _jsxs("div", { className: "rounded-lg bg-white p-6 shadow-sm", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Activit\u00E9 r\u00E9cente" }), _jsx("div", { className: "mt-4 text-center text-gray-500", children: "Aucune activit\u00E9 r\u00E9cente" })] })] })] }));
}
