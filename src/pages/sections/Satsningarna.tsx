import { useState } from "react";
import SectionLayout from "@/components/SectionLayout";
import ComparisonTable from "@/components/ComparisonTable";
import InitiativeCard, { type Initiative } from "@/components/InitiativeCard";
import { Badge } from "@/components/ui/badge";
import { getSection } from "@/data/sections";

const comparisonRows = [
  { label: "Syfte", fotbollsnyttan: "Ramverk i Göteborg: nytta + uppföljning.", enBattreVag: "Riktad fotbollssatsning i utsatta områden.", idrottsklivet: "Nationell satsning för idrott i utsatta områden." },
  { label: "Driver", fotbollsnyttan: "GFF + partners.", enBattreVag: "SvFF lokalt i samarbete med RF m.fl.", idrottsklivet: "RF nationellt + RF-SISU lokalt + SF/IF." },
  { label: "Stödform", fotbollsnyttan: "Paketerade insatser kopplade till 6 mål.", enBattreVag: "Resurser till nyckelroller + insatser.", idrottsklivet: "Verksamhetsstöd (RF-SISU) + projektstöd (SF)." },
  { label: "Ansökan", fotbollsnyttan: "Lokalt upplägg.", enBattreVag: "Via fotbollens kanal lokalt.", idrottsklivet: "Varierar via RF-SISU och/eller SF (lokalt)." },
  { label: "Mål 26–27", fotbollsnyttan: "Utveckling mot jämlik fotboll i hela staden.", enBattreVag: "Starkare föreningsnärvaro i områdena.", idrottsklivet: "Fler deltagare, stabil verksamhet, fler ledare." },
];

const initiatives: Initiative[] = [
  { title: "Idrottsklivet i Västra Götaland (Göteborg)", actor: "RF-SISU Västra Götaland", area: "Göteborg (lokalt områdesarbete)", format: "Stöd till föreningar + inkluderande verksamhet/mottagarkapacitet", purpose: "Stärka idrottens närvaro i utsatta områden genom lokalt stöd och samverkan.", areaType: "Övrigt", initiativeType: "Stöd" },
  { title: "Skola som arena", actor: "Göteborgs Stad", area: "25 skolor i Göteborg (områden med utmanade uppväxtvillkor)", format: "Skolan som mötesplats + aktiviteter före/efter skoltid i samverkan", purpose: "Utjämna skillnader i barns uppväxtvillkor genom nära, trygg fritid.", areaType: "Övrigt", initiativeType: "Koordination" },
  { title: "Lights On (inom/kring Skola som arena)", actor: "Göteborgs Stad / samverkansaktörer", area: "Exempel: skolor i Göteborg (t.ex. Ellen Keyskolan)", format: "Gratisaktiviteter med vuxennärvaro före/efter skoltid", purpose: "Trygg, aktiv fritid med låga trösklar nära skolan.", areaType: "Övrigt", initiativeType: "Verksamhet" },
  { title: "Aktiv Göteborg", actor: "IFK Göteborg (i samverkan)", area: "Biskopsgården & Hammarkullen", format: "Veckoträffar – fotboll + stöd kopplat till utbildning/arbete", purpose: "Kombinera fotboll med väg in i studier/arbete.", areaType: "Hisingen", initiativeType: "Verksamhet" },
  { title: "IFK Cruyff Courts", actor: "IFK Göteborg + Johan Cruyff Foundation", area: "Exempel: Bergsjön, Hammarkullen, Biskopsgården", format: "Fotbollsplaner/courts i områden med stort behov", purpose: "Skapa plats för rörelse, gemenskap och positiv närvaro.", areaType: "Nordost", initiativeType: "Plats" },
  { title: "Fotboll med GAIS i Biskopsgården", actor: "GAIS + Brämaregårdens FC + Bostadsbolaget m.fl.", area: "Biskopsgården", format: "Fotbollsverksamhet/fotbollsskola + ledarstöd i samverkan", purpose: "Sänka trösklar och skapa regelbunden aktivitet lokalt.", areaType: "Hisingen", initiativeType: "Verksamhet" },
  { title: "Starkare föreningsliv i Nordost", actor: "ÖIS Fotboll + Idrotts- och föreningsförvaltningen + lokala föreningar", area: "Nordost", format: "Föreningsstärkande projekt (3-årigt) + samverkan", purpose: "Fler vägar in i idrott och föreningsliv för barn och unga i nordöstra Göteborg.", areaType: "Nordost", initiativeType: "Stöd" },
  { title: "Gothia Cup Foundation", actor: "Gothia Cup", area: "Göteborg + internationellt", format: "Skapar möjligheter att delta oavsett bakgrund (fotboll som gemensam nämnare)", purpose: "Inkludering och möjligheter för unga via fotboll och möten.", areaType: "Övrigt", initiativeType: "Verksamhet" },
  { title: "BK Häcken + Göteborgs Stadsmission", actor: "BK Häcken + Göteborgs Stadsmission", area: "Göteborg (bred social hållbarhet)", format: "Långsiktigt partnerskap – aktiviteter/engagemang för människor i utsatthet", purpose: "Social inkludering med fotbollens och föreningslivets kraft.", areaType: "Hisingen", initiativeType: "Verksamhet" },
];

const areaFilters = ["Alla", "Hisingen", "Nordost", "Sydväst", "Övrigt"] as const;
const typeFilters = ["Alla", "Verksamhet", "Plats", "Koordination", "Stöd"] as const;

const Satsningarna = () => {
  const meta = getSection("satsningarna");
  const [areaFilter, setAreaFilter] = useState<string>("Alla");
  const [typeFilter, setTypeFilter] = useState<string>("Alla");

  const filtered = initiatives.filter(
    (i) =>
      (areaFilter === "Alla" || i.areaType === areaFilter) &&
      (typeFilter === "Alla" || i.initiativeType === typeFilter),
  );

  return (
    <SectionLayout meta={meta}>
      <section aria-labelledby="jamforelse" className="mb-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Jämförelse
        </p>
        <h2 id="jamforelse" className="mb-8 font-serif text-3xl text-foreground">
          Tre satsningar – sida vid sida
        </h2>
        <ComparisonTable rows={comparisonRows} />
      </section>

      <section aria-labelledby="andra-insatser">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Landskap 2026
        </p>
        <h2 id="andra-insatser" className="mb-3 font-serif text-3xl text-foreground">
          Andra pågående insatser i Göteborg
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Exempel på insatser som pågår och berör samma målgrupper/områden.{" "}
          <span className="italic">(Exempel från öppna källor – kompletteras vid behov.)</span>
        </p>

        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Område
            </span>
            {areaFilters.map((f) => (
              <Badge
                key={f}
                variant={areaFilter === f ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setAreaFilter(f)}
              >
                {f}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Typ
            </span>
            {typeFilters.map((f) => (
              <Badge
                key={f}
                variant={typeFilter === f ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setTypeFilter(f)}
              >
                {f}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i) => (
            <InitiativeCard key={i.title} initiative={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">
            Inga insatser matchar valda filter.
          </p>
        )}
      </section>
    </SectionLayout>
  );
};

export default Satsningarna;
