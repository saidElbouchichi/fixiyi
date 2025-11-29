import { useAuth } from "@/hooks/use-auth";
import { authService } from "@/services/auth-service";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useState } from "react";

export default function PrivateHeader() {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await authService.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="flex h-16 items-center justify-between bg-white px-6 shadow-sm">
      <h1 className="text-lg font-medium">Tableau de bord</h1>

      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <User className="h-5 w-5" />
          </div>
          <span className="text-sm font-medium">{profile?.full_name || profile?.email}</span>
        </button>

        {showMenu && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
            <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
