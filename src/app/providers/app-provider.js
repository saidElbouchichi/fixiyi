import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import { AppRouter } from "./router";
import { ErrorBoundary } from "./error-boundary";
export function AppProvider({ children }) {
    return (_jsx(ErrorBoundary, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [children, _jsx(AppRouter, {})] }) }));
}
