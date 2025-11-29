import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@/services/auth-service";
import { LogIn } from "lucide-react";
export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await authService.signIn({ email, password });
            navigate("/dashboard");
        }
        catch (err) {
            setError(err.message || "Erreur lors de la connexion");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsxs("div", { className: "mb-8 text-center", children: [_jsx(Link, { to: "/", className: "inline-block text-3xl font-bold text-blue-600", children: "Fixiyi" }), _jsx("h2", { className: "mt-6 text-2xl font-bold text-gray-900", children: "Connexion" }), _jsx("p", { className: "mt-2 text-gray-600", children: "Acc\u00E9dez \u00E0 votre compte" })] }), _jsxs("div", { className: "rounded-lg bg-white p-8 shadow-lg", children: [error && (_jsx("div", { className: "mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-600", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "votre@email.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Mot de passe" }), _jsx("input", { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })] }), _jsx("button", { type: "submit", disabled: loading, className: "flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50", children: loading ? ("Connexion...") : (_jsxs(_Fragment, { children: [_jsx(LogIn, { className: "h-5 w-5" }), "Se connecter"] })) })] }), _jsxs("div", { className: "mt-6 text-center text-sm", children: [_jsx("span", { className: "text-gray-600", children: "Pas encore de compte ?" }), " ", _jsx(Link, { to: "/register", className: "font-medium text-blue-600 hover:text-blue-700", children: "S'inscrire" })] })] })] }) }));
}
