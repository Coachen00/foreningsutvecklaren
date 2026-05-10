import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary fångade ett fel:", error, info);
    }
    // I produktion: skicka till valfri error-tracker här om en sätts upp.
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (!this.state.hasError) return this.props.children;
    if (this.props.fallback) return this.props.fallback;

    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
        <main
          id="main-content"
          className="w-full max-w-md text-center"
          role="alert"
        >
          <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Fotbollsnyttan Arbetsrum
          </p>
          <h1 className="mb-4 font-serif text-3xl font-medium tracking-tight text-foreground">
            Något gick fel
          </h1>
          <p className="mb-8 text-small text-muted-foreground">
            Sidan kunde inte visas. Ladda om för att försöka igen.
          </p>
          <button
            type="button"
            onClick={this.reset}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Ladda om sidan
          </button>
        </main>
      </div>
    );
  }
}

export default ErrorBoundary;
