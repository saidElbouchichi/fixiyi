import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from "./Sidebar";
import PrivateHeader from "./PrivateHeader";
export default function PrivateLayout({ children }) {
    return (_jsxs("div", { className: "flex min-h-screen bg-gray-100", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex flex-1 flex-col", children: [_jsx(PrivateHeader, {}), _jsx("main", { className: "flex-1 p-6", children: children })] })] }));
}
