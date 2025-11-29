import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import { AppRouter } from "./router";
import { ErrorBoundary } from "./error-boundary";

interface Props {
  children?: ReactNode;
}

export function AppProvider({ children }: Props) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        {children}
        <AppRouter />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
