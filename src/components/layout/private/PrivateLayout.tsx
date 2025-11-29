import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import PrivateHeader from "./PrivateHeader";

export default function PrivateLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <PrivateHeader />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
