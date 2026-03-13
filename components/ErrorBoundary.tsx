"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Boundary pour capturer les erreurs et afficher un fallback au lieu de faire planter toute la page */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="p-6 rounded-xl text-center" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
              Ce bloc est temporairement indisponible.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
