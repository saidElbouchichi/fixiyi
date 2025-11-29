import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import PrivateLayout from "@/components/layout/private/PrivateLayout";
const HomePage = lazy(() => import("@/app/routes/public/home"));
const LoginPage = lazy(() => import("@/app/routes/public/login"));
const RegisterPage = lazy(() => import("@/app/routes/public/register"));
const NotFoundPage = lazy(() => import("@/app/routes/public/not-found"));
const DashboardPage = lazy(() => import("@/app/routes/private/dashboard"));
const LoadingFallback = () => (_jsx("div", { className: "flex min-h-screen items-center justify-center", children: _jsx("div", { className: "h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" }) }));
export const router = createBrowserRouter([
    {
        path: "/",
        element: (_jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(HomePage, {}) })),
    },
    {
        path: "/login",
        element: (_jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(LoginPage, {}) })),
    },
    {
        path: "/register",
        element: (_jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(RegisterPage, {}) })),
    },
    {
        path: "/dashboard",
        element: (_jsx(ProtectedRoute, { children: _jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(PrivateLayout, { children: _jsx(DashboardPage, {}) }) }) })),
    },
    {
        path: "*",
        element: (_jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(NotFoundPage, {}) })),
    },
]);
export function AppRouter() {
    return _jsx(RouterProvider, { router: router });
}
