import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error) {
        console.error("App Error Boundary:", error);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { style: { padding: 20 }, children: [_jsx("h1", { children: "Une erreur inattendue est survenue." }), _jsx("p", { children: "Veuillez recharger la page." })] }));
        }
        return this.props.children;
    }
}
