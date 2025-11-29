import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import PrivateLayout from "@/components/layout/private/PrivateLayout";

const HomePage = lazy(() => import("@/app/routes/public/home"));
const LoginPage = lazy(() => import("@/app/routes/public/login"));
const RegisterPage = lazy(() => import("@/app/routes/public/register"));
const NotFoundPage = lazy(() => import("@/app/routes/public/not-found"));

const DashboardPage = lazy(() => import("@/app/routes/private/dashboard"));

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<LoadingFallback />}>
          <PrivateLayout>
            <DashboardPage />
          </PrivateLayout>
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
