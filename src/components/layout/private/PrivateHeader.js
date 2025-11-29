import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
        }
        catch (error) {
            console.error("Logout error:", error);
        }
    };
    return (_jsxs("header", { className: "flex h-16 items-center justify-between bg-white px-6 shadow-sm", children: [_jsx("h1", { className: "text-lg font-medium", children: "Tableau de bord" }), _jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: () => setShowMenu(!showMenu), className: "flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100", children: [_jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600", children: _jsx(User, { className: "h-5 w-5" }) }), _jsx("span", { className: "text-sm font-medium", children: profile?.full_name || profile?.email })] }), showMenu && (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 z-10", onClick: () => setShowMenu(false) }), _jsx("div", { className: "absolute right-0 z-20 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg", children: _jsxs("button", { onClick: handleLogout, className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100", children: [_jsx(LogOut, { className: "h-4 w-4" }), "D\u00E9connexion"] }) })] }))] })] }));
}
