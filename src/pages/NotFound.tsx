import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { AmbientField } from "@/components/three";

const NotFound = () => {
  const location = useLocation();
  useDocumentTitle("Sidan finns inte", "Sidan kunde inte hittas.");

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.warn(
        "404 — försökt nå okänd route:",
        location.pathname,
      );
    }
  }, [location.pathname]);

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div className="absolute inset-0 -z-10"><AmbientField /></div>
      <a href="#main-content" className="skip-link">
        Hoppa till innehållet
      </a>
      <main
        id="main-content"
        className="w-full max-w-md animate-fade-up text-center"
      >
        <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          Föreningsutvecklaren
        </p>
        <p className="mb-3 font-mono text-micro uppercase tracking-wider text-primary">
          404
        </p>
        <h1 className="mb-4 font-serif text-4xl font-medium text-foreground">
          Sidan finns inte
        </h1>
        <p className="mb-10 text-small text-muted-foreground">
          Vi hittar inte <code className="font-mono">{location.pathname}</code>.
          Länken kan vara gammal eller felstavad.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Tillbaka till startsidan
        </Link>
        <p className="mt-16 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          GFF · Göteborgs Fotbollförbund
        </p>
      </main>
    </div>
  );
};

export default NotFound;
