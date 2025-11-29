import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@/services/auth-service";
import { UserPlus } from "lucide-react";
export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: "",
        userType: "client",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await authService.signUp(formData);
            navigate("/dashboard");
        }
        catch (err) {
            setError(err.message || "Erreur lors de l'inscription");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsxs("div", { className: "mb-8 text-center", children: [_jsx(Link, { to: "/", className: "inline-block text-3xl font-bold text-blue-600", children: "Fixiyi" }), _jsx("h2", { className: "mt-6 text-2xl font-bold text-gray-900", children: "Cr\uFFFDer un compte" }), _jsx("p", { className: "mt-2 text-gray-600", children: "Rejoignez Fixiyi d\uFFFDs maintenant" })] }), _jsxs("div", { className: "rounded-lg bg-white p-8 shadow-lg", children: [error && (_jsx("div", { className: "mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-600", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Type de compte" }), _jsxs("div", { className: "mt-2 grid grid-cols-2 gap-4", children: [_jsxs("button", { type: "button", onClick: () => setFormData({ ...formData, userType: "client" }), className: `rounded-lg border-2 p-4 text-center transition ${formData.userType === "client"
                                                        ? "border-blue-500 bg-blue-50"
                                                        : "border-gray-200 hover:border-gray-300"}`, children: [_jsx("div", { className: "text-2xl", children: "=d" }), _jsx("div", { className: "mt-2 font-medium", children: "Client" })] }), _jsxs("button", { type: "button", onClick: () => setFormData({ ...formData, userType: "provider" }), className: `rounded-lg border-2 p-4 text-center transition ${formData.userType === "provider"
                                                        ? "border-blue-500 bg-blue-50"
                                                        : "border-gray-200 hover:border-gray-300"}`, children: [_jsx("div", { className: "text-2xl", children: "='" }), _jsx("div", { className: "mt-2 font-medium", children: "Prestataire" })] })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "fullName", className: "block text-sm font-medium text-gray-700", children: "Nom complet" }), _jsx("input", { id: "fullName", type: "text", value: formData.fullName, onChange: (e) => setFormData({ ...formData, fullName: e.target.value }), className: "mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "Jean Dupont" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { id: "email", type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true, className: "mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "votre@email.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Mot de passe" }), _jsx("input", { id: "password", type: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true, minLength: 6, className: "mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), _jsx("p", { className: "mt-1 text-xs text-gray-500", children: "Minimum 6 caract\u00E8res" })] }), _jsx("button", { type: "submit", disabled: loading, className: "flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50", children: loading ? ("Cr�ation du compte...") : (_jsxs(_Fragment, { children: [_jsx(UserPlus, { className: "h-5 w-5" }), "Cr\uFFFDer mon compte"] })) })] }), _jsxs("div", { className: "mt-6 text-center text-sm", children: [_jsx("span", { className: "text-gray-600", children: "D\uFFFDj\uFFFD un compte ?" }), " ", _jsx(Link, { to: "/login", className: "font-medium text-blue-600 hover:text-blue-700", children: "Se connecter" })] })] })] }) }));
}
