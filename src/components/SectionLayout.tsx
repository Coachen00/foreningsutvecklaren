import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getAdjacent, type SectionMeta } from "@/data/sections";

interface SectionLayoutProps {
  meta: SectionMeta;
  children: ReactNode;
}

const SectionLayout = ({ meta, children }: SectionLayoutProps) => {
  useDocumentTitle(meta.title, meta.intro);
  const { prev, next } = getAdjacent(meta.slug);
  const Icon = meta.icon;

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <main>
        {/* Page hero */}
        <header className="border-b border-border/60 bg-card">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              Tillbaka till översikten
            </Link>

            <div className="grid gap-8 md:grid-cols-[auto,1fr] md:items-start md:gap-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background text-primary md:h-20 md:w-20">
                <Icon className="h-8 w-8 md:h-9 md:w-9" />
              </div>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {meta.eyebrow}
                </p>
                <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  {meta.longTitle}
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-foreground/80 md:text-xl">
                  {meta.intro}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="container mx-auto px-4 py-16 md:py-24">{children}</div>

        {/* Page nav */}
        <nav
          aria-label="Sektionsnavigering"
          className="border-t border-border/60 bg-card"
        >
          <div className="container mx-auto grid gap-4 px-4 py-10 md:grid-cols-2">
            {prev ? (
              <Link
                to={prev.path}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:bg-accent"
              >
                <span className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <ArrowLeft className="h-3 w-3" />
                  Föregående · {prev.number}
                </span>
                <span className="font-serif text-2xl text-foreground">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={next.path}
                className="group flex flex-col items-end rounded-xl border border-border bg-background p-6 text-right transition-colors hover:bg-accent"
              >
                <span className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Nästa · {next.number}
                  <ArrowRight className="h-3 w-3" />
                </span>
                <span className="font-serif text-2xl text-foreground">{next.title}</span>
              </Link>
            ) : (
              <Link
                to="/"
                className="group flex flex-col items-end rounded-xl border border-border bg-background p-6 text-right transition-colors hover:bg-accent"
              >
                <span className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Tillbaka till översikten
                  <ArrowUpRight className="h-3 w-3" />
                </span>
                <span className="font-serif text-2xl text-foreground">Hub</span>
              </Link>
            )}
          </div>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default SectionLayout;
