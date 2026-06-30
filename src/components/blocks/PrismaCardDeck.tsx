import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  Route,
  School,
  Compass,
  Clapperboard,
  LayoutGrid,
  ArrowRight,
  X,
  type LucideIcon,
} from "lucide-react";
import { FORENINGSPORTAL_APP_URL } from "@/content/links";

/**
 * Prisma-kortleken — port av kortleksanimerings-specen (Scripts/presentationer).
 * Faser: 1) DEAL solfjäder, 2) RECEDE/dim, 3) HOVER-lyft + parallax.
 * Avsteg från specen: klick PINAR + FLIPPAR kortet → läs om området, sedan
 * "Gå vidare" navigerar. CSS-transitions driver allt (ej rAF → funkar dold flik).
 */

interface PrismaCard {
  ang: number;
  z: number;
  dealDelay: number;
  bobDur: number;
  bobDelay: number;
  hero: boolean;
  eyebrow: string;
  title: string;
  sub: string;
  desc: string;
  cta: string;
  Icon: LucideIcon;
  to: string;
  external?: boolean;
}

// Fan-positioner 01..05 (spec). Center (03) = En bättre väg (primärt),
// hero-kanten (05) = Föreningsportalen.
const CARDS: PrismaCard[] = [
  { ang: -55, z: 6, dealDelay: 0.14, bobDur: 5.4, bobDelay: 0.0, hero: false,
    eyebrow: "Case", title: "Case", sub: "Verkliga exempel",
    desc: "Verkliga exempel ur föreningsutvecklingen — varje case är en kort film plus ett quiz som befäster lärandet.",
    cta: "Gå vidare", Icon: Clapperboard, to: "/case" },
  { ang: -27.5, z: 58, dealDelay: 0.26, bobDur: 5.8, bobDelay: 0.5, hero: false,
    eyebrow: "Huvuduppdrag 02", title: "FU Skola", sub: "Bron skola–förening",
    desc: "Bron mellan skola och förening. Skolan blir vägen in och barn nås där de redan är — Skolbollen, fotbollsprofil och samverkan skola–förening.",
    cta: "Gå vidare", Icon: School, to: "/fu-skola" },
  { ang: 0, z: 104, dealDelay: 0.38, bobDur: 5.2, bobDelay: 1.0, hero: true,
    eyebrow: "Huvuduppdrag 01", title: "En bättre väg", sub: "Riktad samhällssatsning",
    desc: "Riktad samhällssatsning där behoven är störst — trygghet, inkludering och en meningsfull fritid. Girls FC, lokala förebilder och insatser där de gör mest nytta.",
    cta: "Gå vidare", Icon: Route, to: "/en-battre-vag" },
  { ang: 27.5, z: 58, dealDelay: 0.50, bobDur: 5.6, bobDelay: 0.7, hero: false,
    eyebrow: "Huvuduppdrag 03", title: "Föreningsutveckling", sub: "Föreningsmotorn",
    desc: "Den generella föreningsmotorn: arbetssätt, ledarskap och kultur som håller över säsonger. Kvalitetsklubb, Trygg Fotboll och årshjul.",
    cta: "Gå vidare", Icon: Compass, to: "/foreningsutveckling" },
  { ang: 55, z: 6, dealDelay: 0.62, bobDur: 5.0, bobDelay: 0.3, hero: true,
    eyebrow: "Portal", title: "Föreningsportalen", sub: "Verktyg & inloggning",
    desc: "Intern hubb med genvägar till systemen, verktygen och resurserna en förening behöver nå i vardagen. Öppnas som egen app i ny flik.",
    cta: "Öppna portalen", Icon: LayoutGrid, to: FORENINGSPORTAL_APP_URL, external: true },
];

const DEAL_EASE = "cubic-bezier(.2,.85,.25,1)";
const SOFT_EASE = "cubic-bezier(.22,.61,.36,1)"; // mjuk decel för lyft/sänk

const PrismaCardDeck = () => {
  const deckRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const apiRef = useRef<ReturnType<typeof buildApi> | null>(null);
  const pinnedRef = useRef<number | null>(null);
  const prevOpenRef = useRef<number | null>(null);

  const [open, setOpen] = useState<number | null>(null);

  // bygg den imperativa lyft/dim-kontrollern (delas mellan effekterna)
  function buildApi(
    deck: HTMLDivElement,
    inner: HTMLDivElement,
    cards: HTMLDivElement[],
    reduce: boolean,
  ) {
    const setDur = (el: HTMLElement, ms: number) => {
      el.style.transitionDuration = reduce ? "0ms" : `${ms}ms`;
    };
    inner.style.transform = "scale(1.16)";
    inner.style.transformOrigin = "50% 56%";
    inner.style.transitionProperty = "transform";
    inner.style.transitionTimingFunction = "cubic-bezier(.4,0,.2,1)";
    deck.style.transitionProperty = "opacity, filter";
    deck.style.transitionTimingFunction = "ease";

    const st = cards.map((c) => ({ el: c, a: +c.dataset.ang!, z: +c.dataset.z!, lifted: false }));
    const setCard = (s: (typeof st)[number], p: number) => {
      const rot = s.a + (s.a * 0.1 - s.a) * p;
      const tz = s.z + (210 - s.z) * p;
      s.el.style.transform =
        `rotate(${rot.toFixed(1)}deg) translateZ(${tz.toFixed(0)}px) translateY(${(-54 * p).toFixed(0)}px) scale(${(1 + 0.06 * p).toFixed(3)})`;
    };
    const lift = (i: number) => {
      const s = st[i]; if (!s) return;
      s.lifted = true;
      s.el.style.zIndex = "30";
      s.el.style.filter = "brightness(1.06) drop-shadow(0 28px 46px rgba(0,0,0,0.46)) drop-shadow(0 0 24px hsl(var(--accent) / 0.32))";
      setDur(s.el, 700); setCard(s, 1);
    };
    const drop = (i: number) => {
      const s = st[i]; if (!s || !s.lifted) return;
      s.lifted = false;
      s.el.style.filter = "none";
      setDur(s.el, 820); setCard(s, 0);
      window.setTimeout(() => { if (!s.lifted) s.el.style.zIndex = ""; }, 840);
    };
    const dropOthersExcept = (keep: number) => st.forEach((_, i) => { if (i !== keep) drop(i); });
    const dropAll = () => st.forEach((_, i) => drop(i));
    // Lugn settling EN gång – ingen puls vid mus-in/ut (huvudkällan till "fladder").
    const settle = () => {
      setDur(inner, 1300); inner.style.transform = "scale(1)";
      setDur(deck, 1100); deck.style.opacity = "1"; deck.style.filter = "none";
    };
    const restCard = (i: number) => setCard(st[i], 0);
    return { st, lift, drop, dropOthersExcept, dropAll, settle, restCard, ready: false };
  }

  // Effekt A: deal / recede / parallax / hover-lyft
  useEffect(() => {
    const deck = deckRef.current, inner = innerRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!deck || !inner || !cards.length) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const api = buildApi(deck, inner, cards, reduce);
    apiRef.current = api;

    const listeners: Array<() => void> = [];
    const on = (el: EventTarget, ev: string, fn: EventListener) => {
      el.addEventListener(ev, fn); listeners.push(() => el.removeEventListener(ev, fn));
    };

    // Debounce: lyft först när pekaren VILAT på ett kort en stund. Snabb passage
    // över överlappande kort ska inte trigga en kaskad av lyft (det kändes "kvickt").
    let hoverTimer = 0;
    const HOVER_DELAY = 150;
    const queueLift = (i: number) => {
      if (pinnedRef.current != null) return;
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => { api.dropOthersExcept(i); api.lift(i); }, HOVER_DELAY);
    };
    const cancelQueued = () => window.clearTimeout(hoverTimer);

    const activate = () => {
      api.st.forEach((s, i) => {
        s.el.style.animation = "none"; // frys CSS-dealen
        s.el.style.transitionProperty = "transform, filter";
        s.el.style.transitionTimingFunction = SOFT_EASE;
        api.restCard(i);
        s.el.style.pointerEvents = "auto";
        on(s.el, "pointerenter", () => queueLift(i));
        on(s.el, "pointerleave", cancelQueued); // avbryt om man bara passerar förbi
        const front = s.el.querySelector<HTMLElement>("[data-cardfront]");
        if (front) {
          // tangentbord: lyft direkt vid fokus (avsiktligt), sänk vid blur
          on(front, "focus", () => { if (pinnedRef.current != null) return; api.dropOthersExcept(i); api.lift(i); });
          on(front, "blur", () => { if (pinnedRef.current != null) return; api.drop(i); });
        }
      });
      on(deck, "pointerleave", () => { cancelQueued(); if (pinnedRef.current != null) return; api.dropAll(); });
      api.settle();
      api.ready = true;
    };

    const dealTimer = reduce ? (activate(), 0) : window.setTimeout(activate, 2600);

    return () => {
      if (dealTimer) window.clearTimeout(dealTimer);
      window.clearTimeout(hoverTimer);
      listeners.forEach((off) => off());
    };
  }, []);

  // Effekt B: pin + flip när ett kort öppnas
  useEffect(() => {
    const api = apiRef.current;
    if (!api || !api.ready) { pinnedRef.current = open; return; }
    pinnedRef.current = open;
    if (open != null) {
      api.dropOthersExcept(open);
      api.lift(open);
      const card = cardRefs.current[open];
      window.setTimeout(() => card?.querySelector<HTMLElement>("[data-go]")?.focus(), 60);
    } else {
      const prev = prevOpenRef.current;
      api.dropAll();
      const card = prev != null ? cardRefs.current[prev] : null;
      window.setTimeout(() => card?.querySelector<HTMLElement>("[data-cardfront]")?.focus(), 120);
    }
    prevOpenRef.current = open;
  }, [open]);

  const faceBase: CSSProperties = {
    position: "absolute", inset: 0, borderRadius: 14,
    WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden",
    display: "flex", flexDirection: "column", padding: "27px 27px 30px",
  };

  return (
    <div
      ref={deckRef}
      className="relative mx-auto w-full overflow-hidden h-[60vh] min-h-[520px] sm:h-[74vh] lg:h-[88vh] lg:min-h-[760px]"
      role="group"
      aria-roledescription="kortlek"
      aria-label="Områden som kort — hovra eller tabba för att lyfta, klicka för att läsa mer och gå vidare"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 42%", ["--px" as string]: 0, ["--py" as string]: 0 }}
      onClick={(e) => { if (open != null && !(e.target as HTMLElement).closest(".prisma-card")) setOpen(null); }}
    >
      <style>{`
        @keyframes prismaDeal {
          0%   { opacity:0; transform:rotate(0deg) translateZ(0px) translateY(54px) scale(0.86); }
          55%  { opacity:1; }
          100% { opacity:1; transform:rotate(var(--ang)) translateZ(var(--z)) translateY(0px) scale(1); }
        }
        @keyframes prismaBob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
        @keyframes prismaSpin { to { transform:rotateX(70deg) rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .prisma-card, .prisma-bob, .prisma-ring { animation:none !important; }
        }
      `}</style>

      {/* responsiv skala så solfjädern fyller ytan */}
      <div className="absolute inset-0 origin-center scale-[0.58] sm:scale-90 lg:scale-110 xl:scale-125">
        {/* mjukt guldsken */}
        <div className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: "70%", width: 880, height: 880, borderRadius: "50%",
            background: "radial-gradient(circle, hsl(var(--accent) / 0.16) 0%, hsl(var(--accent) / 0) 64%)", filter: "blur(30px)" }} />

        <div ref={innerRef} className="absolute inset-0" style={{ transformStyle: "preserve-3d", transformOrigin: "50% 56%" }}>
          <div className="absolute inset-0" style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(calc(4deg - var(--py,0) * 6deg)) rotateY(calc(var(--px,0) * 8deg))",
            transition: "transform 0.6s cubic-bezier(.22,.61,.36,1)",
          }}>
            {/* orbital-ringar */}
            <div className="prisma-ring pointer-events-none absolute" style={{ left: "50%", top: "88%", width: 0, height: 0, transformStyle: "preserve-3d", transform: "rotateX(70deg)", animation: "prismaSpin 64s linear infinite" }}>
              <div style={{ position: "absolute", width: 1240, height: 1240, margin: "-620px 0 0 -620px", borderRadius: "50%", border: "1px solid hsl(var(--primary) / 0.12)" }} />
              <div style={{ position: "absolute", width: 900, height: 900, margin: "-450px 0 0 -450px", borderRadius: "50%", border: "1px dashed hsl(var(--accent) / 0.09)" }} />
            </div>

            {/* card-anchor */}
            <div className="absolute" style={{ left: "50%", top: "73%", width: 0, height: 0, transformStyle: "preserve-3d" }}>
              {CARDS.map((c, i) => {
                const { Icon } = c;
                const isOpen = open === i;
                const titleSize = c.title.length > 12 ? 30 : 39;
                const cardSurface = (hero: boolean): CSSProperties => ({
                  border: `1px solid hsl(var(--accent) / ${hero ? 0.55 : 0.42})`,
                  background: `linear-gradient(162deg, hsl(217 ${hero ? 32 : 30}% ${hero ? 13 : 12}%) 0%, hsl(215 33% 7%) 100%)`,
                  boxShadow: hero
                    ? "0 24px 50px -18px rgba(0,0,0,0.9), inset 0 1px 0 hsl(var(--accent) / 0.18), 0 0 32px -10px hsl(var(--accent) / 0.6)"
                    : "0 20px 44px -18px rgba(0,0,0,0.85), inset 0 1px 0 hsl(var(--accent) / 0.14), 0 0 26px -12px hsl(var(--accent) / 0.5)",
                });

                return (
                  <div
                    key={c.title}
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="prisma-card absolute left-0 top-0"
                    data-ang={c.ang}
                    data-z={c.z}
                    style={{
                      width: 320, height: 446, margin: "-446px 0 0 -160px",
                      transformOrigin: "50% 100%",
                      transform: `rotate(${c.ang}deg) translateZ(${c.z}px)`,
                      pointerEvents: "none",
                      ["--ang" as string]: `${c.ang}deg`,
                      ["--z" as string]: `${c.z}px`,
                      animation: `prismaDeal 1s ${DEAL_EASE} ${c.dealDelay}s both`,
                    }}
                  >
                    <div className="prisma-bob absolute inset-0">
                      {/* flip-lager */}
                      <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transition: "transform 0.7s cubic-bezier(.4,0,.2,1)", transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                        {/* FRAMSIDA */}
                        <button
                          data-cardfront
                          type="button"
                          onClick={() => setOpen(i)}
                          aria-expanded={isOpen}
                          aria-label={`${c.title}: ${c.sub}. Öppna kortet för att läsa mer.`}
                          className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          style={{ ...faceBase, ...cardSurface(c.hero), pointerEvents: isOpen ? "none" : "auto", cursor: "pointer" }}
                        >
                          <div className="flex items-center justify-between">
                            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "hsl(var(--accent))" }}>{c.eyebrow}</span>
                            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "hsl(var(--accent))", boxShadow: "0 0 9px hsl(var(--accent))" }} />
                          </div>
                          <div style={{ marginTop: 16, fontSize: titleSize, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.02, color: "hsl(var(--foreground))" }}>{c.title}</div>
                          <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.4, color: "hsl(var(--muted-foreground))" }}>{c.sub}</div>
                          <div style={{ height: 1, margin: `${c.hero ? 11 : 15}px 0 0`, background: `linear-gradient(90deg, hsl(var(--accent) / ${c.hero ? 0.5 : 0.4}), transparent)` }} />
                          <div className="grid flex-1 place-items-center" style={{ color: "hsl(var(--accent))" }}>
                            <Icon strokeWidth={1.5} style={{ width: 92, height: 92 }} aria-hidden="true" />
                          </div>
                          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))" }}>Läs mer →</span>
                        </button>

                        {/* BAKSIDA */}
                        <div
                          onKeyDown={(e) => { if (e.key === "Escape") setOpen(null); }}
                          style={{ ...faceBase, ...cardSurface(c.hero), transform: "rotateY(180deg)", pointerEvents: isOpen ? "auto" : "none" }}
                        >
                          <div className="flex items-center justify-between">
                            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "hsl(var(--accent))" }}>{c.eyebrow}</span>
                            <button
                              data-close type="button" onClick={() => setOpen(null)} aria-label="Stäng kortet"
                              className="grid h-7 w-7 place-items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              style={{ color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--accent) / 0.3)" }}
                            >
                              <X style={{ width: 14, height: 14 }} aria-hidden="true" />
                            </button>
                          </div>
                          <div style={{ marginTop: 14, fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, color: "hsl(var(--foreground))" }}>{c.title}</div>
                          <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.5, color: "hsl(var(--foreground) / 0.82)" }}>{c.desc}</p>
                          <div className="mt-auto">
                            {c.external ? (
                              <a data-go href={c.to} target="_blank" rel="noopener noreferrer"
                                aria-label={`${c.cta}: ${c.title} (öppnas i ny flik)`}
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-micro font-semibold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                style={{ background: "hsl(var(--accent))", color: "hsl(215 33% 7%)" }}>
                                {c.cta} <ArrowRight style={{ width: 15, height: 15 }} aria-hidden="true" />
                              </a>
                            ) : (
                              <Link data-go to={c.to}
                                aria-label={`${c.cta}: ${c.title}`}
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-micro font-semibold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                style={{ background: "hsl(var(--accent))", color: "hsl(215 33% 7%)" }}>
                                {c.cta} <ArrowRight style={{ width: 15, height: 15 }} aria-hidden="true" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrismaCardDeck;
