import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";

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
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
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
        <h1 className="mb-4 font-serif text-4xl font-medium tracking-tight text-foreground">
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

        <div className="mt-10 border-t border-border pt-8">
          <p className="mb-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
            Eller gå direkt till ett huvuduppdrag
          </p>
          <ul className="flex flex-col items-center gap-2.5" role="list">
            {PRIMARY_ASSIGNMENTS.map((p) => (
              <li key={p.id}>
                <Link
                  to={p.path}
                  className="rounded-sm text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          GFF · Göteborgs Fotbollförbund
        </p>
      </main>
    </div>
  );
};

export default NotFound;
