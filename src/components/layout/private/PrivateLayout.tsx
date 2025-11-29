import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import PrivateHeader from "./PrivateHeader";

interface Props {
  children: ReactNode;
}

export default function PrivateLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <PrivateHeader />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
