import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
      {children}
    </main>
  );
}
