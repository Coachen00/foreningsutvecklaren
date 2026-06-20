import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Route,
  School,
  Compass,
  Clapperboard,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { FORENINGSPORTAL_APP_URL } from "@/content/links";

/**
 * Prisma-kortleken — port av kortleksanimerings-specen (Scripts/presentationer).
 * Faser: 1) DEAL solfjäder, 2) RECEDE/dim, 3) HOVER-lyft + parallax.
 * Avviker från specen på en punkt: klick NAVIGERAR (det är nav-områden) i stället
 * för spec:ens pin-toggle. Hover/fokus lyfter, klick öppnar.
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
  Icon: LucideIcon;
  to: string;
  external?: boolean;
}

// Fan-positioner 01..05 från specen. Tilldelade efter hierarki:
// center (03) = En bättre väg (primärt), hero-kanten (05) = Föreningsportalen.
const CARDS: PrismaCard[] = [
  { ang: -55, z: 6, dealDelay: 0.14, bobDur: 5.4, bobDelay: 0.0, hero: false,
    eyebrow: "CASE", title: "Case", sub: "Verkliga exempel", Icon: Clapperboard, to: "/case" },
  { ang: -27.5, z: 58, dealDelay: 0.26, bobDur: 5.8, bobDelay: 0.5, hero: false,
    eyebrow: "Huvuduppdrag 02", title: "FU Skola", sub: "Bron skola–förening", Icon: School, to: "/fu-skola" },
  { ang: 0, z: 104, dealDelay: 0.38, bobDur: 5.2, bobDelay: 1.0, hero: true,
    eyebrow: "Huvuduppdrag 01", title: "En bättre väg", sub: "Riktad samhällssatsning", Icon: Route, to: "/en-battre-vag" },
  { ang: 27.5, z: 58, dealDelay: 0.50, bobDur: 5.6, bobDelay: 0.7, hero: false,
    eyebrow: "Huvuduppdrag 03", title: "Föreningsutveckling", sub: "Föreningsmotorn", Icon: Compass, to: "/foreningsutveckling" },
  { ang: 55, z: 6, dealDelay: 0.62, bobDur: 5.0, bobDelay: 0.3, hero: true,
    eyebrow: "Portal", title: "Föreningsportalen", sub: "Verktyg & inloggning", Icon: LayoutGrid, to: FORENINGSPORTAL_APP_URL, external: true },
];

const DEAL_EASE = "cubic-bezier(.2,.85,.25,1)";

const PrismaCardDeck = () => {
  const deckRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const deck = deckRef.current;
    const inner = innerRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!deck || !inner || !cards.length) return;
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    // CSS-transitions driver interaktionen (ej rAF) → funkar även när fliken är dold.
    inner.style.transform = "scale(1.16)";
    inner.style.transformOrigin = "50% 58%";
    inner.style.transitionProperty = "transform";
    inner.style.transitionTimingFunction = "cubic-bezier(.4,0,.2,1)";
    deck.style.transitionProperty = "opacity, filter";
    deck.style.transitionTimingFunction = "ease";

    const setDur = (el: HTMLElement, ms: number) => {
      el.style.transitionDuration = reduce ? "0ms" : `${ms}ms`;
    };
    const dim = () => {
      setDur(inner, 1900); inner.style.transform = "scale(0.94)";
      setDur(deck, 1600); deck.style.opacity = "0.7"; deck.style.filter = "saturate(0.92) brightness(0.95)";
    };
    const wake = () => {
      setDur(inner, 1050); inner.style.transform = "scale(0.97)";
      setDur(deck, 880); deck.style.opacity = "0.99"; deck.style.filter = "none";
    };

    // kort-nivå: vilo (p=0) → lyft (p=1)
    const state = cards.map((c) => ({ el: c, a: +c.dataset.ang!, z: +c.dataset.z!, lifted: false }));
    type S = (typeof state)[number];
    const setCard = (s: S, p: number) => {
      const rot = s.a + (s.a * 0.1 - s.a) * p;
      const tz = s.z + (370 - s.z) * p;
      s.el.style.transform =
        `rotate(${rot.toFixed(1)}deg) translateZ(${tz.toFixed(0)}px) translateY(${(-104 * p).toFixed(0)}px) scale(${(1 + 0.12 * p).toFixed(3)})`;
    };
    const lift = (s: S) => {
      s.lifted = true;
      s.el.style.zIndex = "30";
      s.el.style.filter =
        "brightness(1.1) drop-shadow(0 44px 64px rgba(0,0,0,0.62)) drop-shadow(0 0 34px hsl(var(--accent) / 0.55))";
      setDur(s.el, 760); setCard(s, 1);
    };
    const drop = (s: S) => {
      if (!s.lifted) return;
      s.lifted = false;
      s.el.style.filter = "none";
      setDur(s.el, 900); setCard(s, 0);
      window.setTimeout(() => { if (!s.lifted) s.el.style.zIndex = ""; }, 920);
    };
    const dropOthers = (keep: S) => state.forEach((o) => { if (o !== keep) drop(o); });

    const listeners: Array<() => void> = [];
    const on = (el: EventTarget, ev: string, fn: EventListener) => {
      el.addEventListener(ev, fn);
      listeners.push(() => el.removeEventListener(ev, fn));
    };

    let blurTimer = 0;
    const activate = () => {
      state.forEach((s) => {
        s.el.style.animation = "none"; // frys CSS-dealen
        s.el.style.transitionProperty = "transform, filter";
        s.el.style.transitionTimingFunction = DEAL_EASE;
        setCard(s, 0);
        s.el.style.pointerEvents = "auto";
        on(s.el, "pointerenter", () => { dropOthers(s); lift(s); });
        // tangentbord: fokus lyfter kortet, blur tappar
        const link = s.el.querySelector<HTMLElement>("[data-cardlink]");
        if (link) {
          on(link, "focus", () => { window.clearTimeout(blurTimer); wake(); dropOthers(s); lift(s); });
          on(link, "blur", () => {
            drop(s);
            blurTimer = window.setTimeout(() => {
              if (!deck.contains(document.activeElement) && !deck.matches(":hover")) dim();
            }, 60);
          });
        }
      });
      on(deck, "pointerenter", () => wake());
      on(deck, "pointerleave", () => { dropOthers(state[0]); drop(state[0]); dim(); });
      dim();
    };

    const dealTimer = reduce ? (activate(), 0) : window.setTimeout(activate, 2600);

    // parallax: pekaren lutar hela scenen
    let praf = 0;
    const onMove = (e: PointerEvent) => {
      if (reduce) return;
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      if (!praf)
        praf = requestAnimationFrame(() => {
          praf = 0;
          deck.style.setProperty("--px", px.toFixed(3));
          deck.style.setProperty("--py", py.toFixed(3));
        });
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      if (dealTimer) window.clearTimeout(dealTimer);
      window.clearTimeout(blurTimer);
      if (praf) cancelAnimationFrame(praf);
      window.removeEventListener("pointermove", onMove);
      listeners.forEach((off) => off());
    };
  }, []);

  return (
    <div
      className="relative mx-auto w-full overflow-hidden h-[460px] sm:h-[580px] lg:h-[660px]"
      role="group"
      aria-roledescription="kortlek"
      aria-label="Områden som kort — hovra eller tabba för att lyfta ett kort, öppna för att gå vidare"
    >
      {/* responsiv skala så solfjädern får plats på mindre skärmar */}
      <div className="absolute inset-0 origin-center scale-[0.5] sm:scale-[0.72] lg:scale-100">
        <div
          ref={deckRef}
          className="absolute inset-0"
          style={{
            perspective: "1150px",
            perspectiveOrigin: "50% 32%",
            ["--px" as string]: 0,
            ["--py" as string]: 0,
          }}
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

          {/* mjukt guldsken under solfjädern */}
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: "50%", top: "74%", width: 780, height: 780, borderRadius: "50%",
              background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, hsl(var(--accent) / 0) 64%)",
              filter: "blur(28px)",
            }}
          />

          {/* deckInner: scale-lagret */}
          <div ref={innerRef} className="absolute inset-0" style={{ transformStyle: "preserve-3d", transformOrigin: "50% 58%" }}>
            {/* tilt-wrapper: parallax-rotation */}
            <div
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(calc(6deg - var(--py,0) * 16deg)) rotateY(calc(var(--px,0) * 22deg))",
                transition: "transform 0.25s ease-out",
              }}
            >
              {/* orbital-ringar (dekor) */}
              <div
                className="prisma-ring pointer-events-none absolute"
                style={{ left: "50%", top: "90%", width: 0, height: 0, transformStyle: "preserve-3d", transform: "rotateX(70deg)", animation: "prismaSpin 64s linear infinite" }}
              >
                <div style={{ position: "absolute", width: 1120, height: 1120, margin: "-560px 0 0 -560px", borderRadius: "50%", border: "1px solid hsl(var(--primary) / 0.12)" }} />
                <div style={{ position: "absolute", width: 820, height: 820, margin: "-410px 0 0 -410px", borderRadius: "50%", border: "1px dashed hsl(var(--accent) / 0.09)" }} />
              </div>

              {/* card-anchor: 0×0-punkt som solfjädern spretar runt */}
              <div className="absolute" style={{ left: "50%", top: "88%", width: 0, height: 0, transformStyle: "preserve-3d" }}>
                {CARDS.map((c, i) => {
                  const { Icon } = c;
                  const titleSize = c.title.length > 12 ? 30 : 39;
                  const surface = (
                    <>
                      <div className="flex items-center justify-between">
                        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "hsl(var(--accent))" }}>
                          {c.eyebrow}
                        </span>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "hsl(var(--accent))", boxShadow: "0 0 9px hsl(var(--accent))" }} />
                      </div>
                      <div style={{ marginTop: 16, fontSize: titleSize, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.02, color: "hsl(var(--foreground))" }}>
                        {c.title}
                      </div>
                      <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.4, color: "hsl(var(--muted-foreground))" }}>
                        {c.sub}
                      </div>
                      <div style={{ height: 1, margin: `${c.hero ? 11 : 15}px 0 0`, background: `linear-gradient(90deg, hsl(var(--accent) / ${c.hero ? 0.5 : 0.4}), transparent)` }} />
                      <div className="grid flex-1 place-items-center" style={{ color: "hsl(var(--accent))" }}>
                        <Icon strokeWidth={1.5} style={{ width: 96, height: 96 }} aria-hidden="true" />
                      </div>
                      {c.external && (
                        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))" }}>
                          Öppnas i ny flik ↗
                        </span>
                      )}
                    </>
                  );

                  const surfaceClass =
                    "absolute inset-0 flex flex-col rounded-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
                  const surfaceStyle: React.CSSProperties = {
                    border: `1px solid hsl(var(--accent) / ${c.hero ? 0.55 : 0.42})`,
                    background: `linear-gradient(162deg, hsl(217 ${c.hero ? 32 : 30}% ${c.hero ? 13 : 12}%) 0%, hsl(215 33% 7%) 100%)`,
                    boxShadow: c.hero
                      ? "0 24px 50px -18px rgba(0,0,0,0.9), inset 0 1px 0 hsl(var(--accent) / 0.18), 0 0 32px -10px hsl(var(--accent) / 0.6)"
                      : "0 20px 44px -18px rgba(0,0,0,0.85), inset 0 1px 0 hsl(var(--accent) / 0.14), 0 0 26px -12px hsl(var(--accent) / 0.5)",
                    padding: "27px 27px 30px",
                  };
                  const label = `${c.title} – ${c.sub}${c.external ? " (öppnas i ny flik)" : ""}`;

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
                        animation: `prismaDeal 1s cubic-bezier(.2,.85,.25,1) ${c.dealDelay}s both`,
                      }}
                    >
                      <div className="prisma-bob absolute inset-0" style={{ animation: `prismaBob ${c.bobDur}s ease-in-out ${c.bobDelay}s infinite` }}>
                        {c.external ? (
                          <a data-cardlink href={c.to} target="_blank" rel="noopener noreferrer" aria-label={label} className={surfaceClass} style={surfaceStyle}>
                            {surface}
                          </a>
                        ) : (
                          <Link data-cardlink to={c.to} aria-label={label} className={surfaceClass} style={surfaceStyle}>
                            {surface}
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrismaCardDeck;
