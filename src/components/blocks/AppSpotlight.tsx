import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Utvecklingsprogram i 7 steg",
  "Ärenden, möten & röd tråd",
  "Årshjul & osynligt arbete",
  "Adminöversikt över flera föreningar",
];

interface Props {
  href: string;
  /** id för rubriken — låter sektionen runt om peka hit via aria-labelledby. */
  headingId?: string;
  className?: string;
}

/**
 * Framlyft kort för den externa appen Föreningsportalen.
 * Bryter medvetet sidans ExpandableBlock-rytm (guldram + ton + glow) så att
 * verktyget står ut mot det informativa innehållet runt omkring.
 */
const AppSpotlight = ({ href, headingId, className }: Props) => (
  <div
    className={cn(
      "not-prose relative overflow-hidden rounded-xl border border-accent/30",
      "bg-gradient-to-br from-accent/[0.08] via-card to-card",
      "p-6 shadow-[0_0_44px_-14px_hsl(var(--accent)/0.3)] sm:p-8",
      className,
    )}
  >
    <p className="flex flex-wrap items-center gap-x-2 font-mono text-micro uppercase tracking-wider text-signal-gold">
      Appen
      <span className="text-muted-foreground">· installerbar PWA</span>
    </p>

    <h3
      id={headingId}
      className="mt-3 text-headline font-semibold text-foreground"
    >
      Föreningsportalen
    </h3>

    <p className="mt-2 max-w-[52ch] text-lead text-foreground/85">
      Föreningens digitala arbetsyta — inte en sida att läsa, ett verktyg att
      jobba i.
    </p>

    <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">
      Här går föreningen igenom utvecklingsprogrammet steg för steg och samlar
      möten, ärenden och årshjul på ett ställe — så att det tysta arbetet blir
      synligt. Admin följer flera föreningar och ser var de fastnar.
    </p>

    <ul className="mt-5 grid gap-2 sm:grid-cols-2" role="list">
      {FEATURES.map((f) => (
        <li
          key={f}
          className="flex items-start gap-2 text-sm text-foreground/80"
        >
          <Check
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            aria-hidden="true"
          />
          {f}
        </li>
      ))}
    </ul>

    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Öppna Föreningsportalen
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only"> (öppnas i nytt fönster)</span>
      </a>
      <span className="text-small text-muted-foreground">
        Sparar lokalt · molnsynk via Supabase
      </span>
    </div>
  </div>
);

export default AppSpotlight;
