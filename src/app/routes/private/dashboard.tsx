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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Bienvenue, {profile?.full_name || "Utilisateur"}
        </h1>
        <p className="mt-2 text-gray-600">
          {profile?.user_type === "provider"
            ? "Gérez vos services et réservations"
            : "Consultez vos réservations et trouvez des services"}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`rounded-full p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Réservations récentes
          </h2>
          <div className="mt-4 text-center text-gray-500">
            Aucune réservation pour le moment
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Activité récente
          </h2>
          <div className="mt-4 text-center text-gray-500">
            Aucune activité récente
          </div>
        </div>
      </div>
    </div>
  );
}
