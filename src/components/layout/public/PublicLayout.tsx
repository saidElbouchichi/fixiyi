import { Outlet } from "react-router-dom";
import PublicHeader from "@/components/layout/public/PublicHeader";
import PublicFooter from "@/components/layout/public/PublicFooter";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PublicHeader />

      <main className="flex-1 px-6 py-8">
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}
