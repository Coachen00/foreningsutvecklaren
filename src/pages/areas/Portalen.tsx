import { Link } from "react-router-dom";
import { ChevronRight, LayoutGrid } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/blocks/SectionBlock";
import PortalHubBlock from "@/components/blocks/PortalHubBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { PORTAL_GROUPS } from "@/content/portalen";

const Portalen = () => {
  useDocumentTitle(
    "Föreningsportalen",
    "Samlade genvägar till de system, verktyg och resurser en förening behöver i vardagen – Fogis, förbundsportaler, stöd och utbildning på ett ställe.",
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <div className="border-b border-border bg-card" id="main-content">
        <div className="container mx-auto px-4 sm:px-6">
          <nav
            aria-label="Brödsmula"
            className="flex items-center gap-1.5 border-b border-border py-4"
          >
            <Link
              to="/"
              className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Start
            </Link>
            <ChevronRight className="h-3 w-3 text-border" aria-hidden="true" />
            <span
              aria-current="page"
              className="font-mono text-micro uppercase tracking-wider text-foreground"
            >
              Föreningsportalen
            </span>
          </nav>

          <header className="section-y max-w-[52rem]">
            <p className="mb-6 inline-flex items-center gap-2.5 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Hubb · En ingång
            </p>
            <h1 className="font-serif text-display font-semibold text-foreground">
              Föreningsportalen
            </h1>
            <p className="mt-5 max-w-[48ch] text-lead text-muted-foreground">
              En samlad ingång till det föreningen behöver nå i vardagen –
              system, stöd och lärande på ett ställe.
            </p>
            <p className="mt-3 max-w-[52ch] text-base text-foreground/65">
              Genvägarna nedan är samlade per syfte. Externa system öppnas i en
              ny flik; interna sidor ligger kvar i Föreningsutvecklaren.
            </p>
          </header>
        </div>
      </div>

      <main>
        {PORTAL_GROUPS.map((group, i) => (
          <SectionBlock
            key={group.id}
            id={group.id}
            variant={i % 2 === 1 ? "muted" : "default"}
            eyebrow={group.eyebrow}
            title={group.title}
            lead={group.lead}
            split
          >
            <PortalHubBlock
              links={group.links}
              ariaLabel={`Genvägar: ${group.title}`}
            />
          </SectionBlock>
        ))}
      </main>

      <NextPageCTA
        next={{ path: "/uppdrag", title: "Uppdrag, styrning och administration", shortTitle: "Uppdrag" }}
        label="Utforska uppdraget"
      />
      <Footer />
    </div>
  );
};

export default Portalen;
