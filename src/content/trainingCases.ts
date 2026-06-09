/**
 * TRÄNINGSCASE — fem nivåanpassade övningscase för föreningsutveckling.
 *
 * Övningsformat: summering + utmanande fråga visas; ledtrådar (facit) och
 * effektlogik fälls ut så deltagaren tänker själv först.
 *
 * Föreningsnamnen är FIKTIVA (orter ur Simpsons) och utpekande mikroplatser
 * är neutraliserade — casen ska tränas på, inte peka ut verkliga klubbar.
 */

/** Rik textblock för ledtrådarna (stödjer stycken, listor, citat och tabeller). */
export type ContentBlock =
  | { kind: "p"; text: string }
  | { kind: "ol"; items: string[] }
  | { kind: "ul"; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "table"; headers: string[]; rows: string[][] };

export interface CaseImpact {
  resources: string;
  activities: string;
  goal: string;
  effect: string;
}

export interface TrainingCase {
  id: string;
  number: number;
  level: 1 | 2 | 3 | 4 | 5;
  levelLabel: string;
  /** Kort ämnesetikett, t.ex. "Registerutdrag" */
  area: string;
  /** Vad deltagaren tränar */
  trains: string;
  title: string;
  summary: string[];
  challenge: string;
  hints: ContentBlock[];
  impact: CaseImpact;
}

export const CASE_PROGRESSION: {
  level: number;
  area: string;
  trains: string;
}[] = [
  { level: 1, area: "Registerutdrag", trains: "administrativ tydlighet och ansvar" },
  { level: 2, area: "Kommunikation", trains: "kanalstruktur och medlemsförståelse" },
  { level: 3, area: "Ekonomi", trains: "styrelseansvar och personberoende" },
  { level: 4, area: "Anläggning", trains: "kostnadskontroll, avtal och kommunrelation" },
  { level: 5, area: "Drop-out", trains: "systemtänkande, medlemsresa och långsiktig kultur" },
];

export const CASE_RED_THREAD: { lead: string; steps: string[] } = {
  lead: "Från konkret dokumentation till komplext föreningssystem — varje case bygger på det förra.",
  steps: [
    "Första caset handlar om att skapa kontroll över en lista.",
    "Andra caset handlar om att skapa kontroll över budskap.",
    "Tredje caset handlar om att skapa kontroll över pengar.",
    "Fjärde caset handlar om att skapa kontroll över ytor och avtal.",
    "Femte caset handlar om att skapa kontroll över föreningens verkliga medlemsvärde.",
  ],
};

export const TRAINING_CASES: TrainingCase[] = [
  {
    id: "registerutdrag",
    number: 1,
    level: 1,
    levelLabel: "Lätt",
    area: "Registerutdrag",
    trains: "administrativ tydlighet och ansvar",
    title: "Registerutdraget som ingen äger",
    summary: [
      "Springfield IK är en medelstor breddförening med cirka 680 medlemmar. Föreningen har många barn- och ungdomslag, en ny ordförande, en kanslichef på deltid och en ungdomsansvarig som nyligen gått Trygga möten-utbildning.",
      "Problemet är tydligt: föreningen saknar spårbar dokumentation för registerutdrag. Av 47 aktiva ungdomsledare finns dokumentation för 19. Resten är oklart. Det finns en gammal mapp på kansliet, men den är inte uppdaterad sedan 2022.",
      "Ordföranden Maria tvekar att ta frågan till styrelsen eftersom hon är rädd att ledarna ska känna sig misstänkliggjorda. Samtidigt är frågan kopplad till trygg fotboll, föreningens trovärdighet och kommande bidragsansökan.",
      "Det här är den lättaste nivån eftersom problemet är konkret: föreningen behöver inte analysera hela organisationen. Den behöver skapa lista, ansvar och beslut.",
    ],
    challenge:
      "Hur får du Springfield IK att inom två veckor gå från otydlig mapp och känslig tystnad till en beslutad rutin där alla ledare vet vad som gäller kring registerutdrag?",
    hints: [
      { kind: "p", text: "Börja inte i moral. Börja i administration." },
      {
        kind: "p",
        text: "Det viktiga är att avdramatisera frågan. Registerutdrag handlar inte om att misstänkliggöra enskilda ledare. Det handlar om att föreningen har ett ansvar mot barn, föräldrar, styrelse och bidragsgivare.",
      },
      {
        kind: "p",
        text: "Första steget är inventering. Kanslichefen Anders tar ut en aktuell ledarlista från FOGIS eller IdrottOnline och jämför den med den gamla mappen på kansliet. Resultatet blir ett gap-dokument med fyra kolumner:",
      },
      {
        kind: "ol",
        items: ["Namn", "Roll", "Datum för registerutdrag", "Status: OK / saknas / för gammalt"],
      },
      {
        kind: "p",
        text: "Andra steget är kommunikation. Maria skickar ett kort, neutralt meddelande till de ledare som saknar dokumentation:",
      },
      {
        kind: "quote",
        text: "Vi uppdaterar föreningens trygghetsdokumentation inför kommande säsong och bidragsansökan. Därför behöver vi ditt registerutdrag senast [datum].",
      },
      {
        kind: "p",
        text: "Tredje steget är styrelsebeslut. Styrelsen beslutar vem som äger rutinen framåt. Det måste in i protokollet. Annars blir det ännu en personberoende lösning.",
      },
      {
        kind: "p",
        text: "Skriv inte ett långt policydokument först. Det är fel start. Börja med att göra nuläget synligt.",
      },
      { kind: "p", text: "Ett starkt svar landar i tre konkreta resultat:" },
      { kind: "ul", items: ["aktuell ledarlista", "färdigt gap-dokument", "beslutad ansvarig person"] },
    ],
    impact: {
      resources: "Anders, Maria, Petra, FOGIS, IdrottOnline, styrelsemöte.",
      activities: "Inventera, jämföra, kommunicera, besluta.",
      goal: "100 % kontroll på vilka ledare som har giltigt registerutdrag.",
      effect: "Tryggare barn, mindre risk, starkare föreningsförtroende.",
    },
  },
  {
    id: "kommunikation",
    number: 2,
    level: 2,
    levelLabel: "Ganska lätt",
    area: "Kommunikation",
    trains: "kanalstruktur och medlemsförståelse",
    title: "Kommunikationen som splittrar föreningen",
    summary: [
      "Shelbyville IF har cirka 650 aktiva medlemmar och 22 lag. Föreningen har en halvtidsanställd kanslist, Fatima, och en ordförande, Dario, som lägger flera ideella timmar varje vecka.",
      "Föreningen kommunicerar mycket, men utan struktur. Tränare använder olika kanaler: WhatsApp, SMS, Facebook och e-post. Instagram är inte uppdaterat på tre månader. Hemsidan visar gamla träningstider. Nya familjer får ingen tydlig introduktion. De får i praktiken en träningsdräkt och ett kontonummer.",
      "Föreningen tror att lösningen är att ”synas mer”. Det är fel diagnos. Problemet är inte för lite kommunikation. Problemet är att ingen äger kommunikationen.",
      "Den här nivån är svårare än registerutdrag eftersom kommunikationen påverkar flera grupper samtidigt: spelare, föräldrar, ledare, kansli och styrelse.",
    ],
    challenge:
      "Hur hjälper du Shelbyville IF att gå från rörig informationsspridning till en enkel kommunikationsstruktur där varje kanal har ägare, syfte och miniminivå?",
    hints: [
      { kind: "p", text: "Börja med att skilja på information och kommunikation." },
      { kind: "p", text: "Information är: ”träning kl. 18.00.”" },
      {
        kind: "p",
        text: "Kommunikation är: ”du vet var du ska vara, vem du kontaktar och varför föreningen är värd att vara en del av.”",
      },
      {
        kind: "p",
        text: "Föreningen ska inte starta fler kanaler. Den ska städa i de kanaler som redan finns.",
      },
      { kind: "p", text: "Första steget är en kanalmatris. Den ska vara enkel:" },
      {
        kind: "table",
        headers: ["Kanal", "Ägare", "Syfte", "Frekvens"],
        rows: [
          ["Hemsida", "Fatima", "Schema, kontakt, grundinfo", "varje termin"],
          ["Instagram", "utsedd ledare/förälder", "synlighet och gemenskap", "1 gång/vecka under säsong"],
          ["WhatsApp lag", "tränare", "träning och match", "vid behov"],
          ["Välkomstinfo", "kansli/ungdomsansvarig", "ny familj förstår föreningen", "vid ny registrering"],
          ["Styrelseinfo", "ordförande", "beslut och riktning", "inför möten"],
        ],
      },
      {
        kind: "p",
        text: "Andra steget är att skapa en minsta välkomststruktur. En ny familj ska direkt förstå:",
      },
      {
        kind: "ol",
        items: [
          "vem tränaren är",
          "vad det kostar",
          "när och var träningen är",
          "vad som gäller om barnet vill sluta",
          "vem man kontaktar om något händer",
        ],
      },
      {
        kind: "p",
        text: "Tredje steget är att ta bort falskt ansvar. ”Någon borde fixa Instagram” är inte ansvar. ”Amina lägger ut en bild varje måndag under säsong” är ansvar.",
      },
      {
        kind: "p",
        text: "Ett starkt svar ska inte handla om snygg design. Det ska handla om förutsägbarhet, tillhörighet och enkelhet.",
      },
    ],
    impact: {
      resources: "Fatima, Dario, tränare, föräldrar, hemsida, Instagram, WhatsApp.",
      activities: "Kartlägga kanaler, utse ägare, skapa välkomstinfo, uppdatera grunddata.",
      goal: "Varje kanal har ägare, syfte och frekvens.",
      effect: "Färre missförstånd, bättre medlemsupplevelse, starkare behållning.",
    },
  },
  {
    id: "ekonomi",
    number: 3,
    level: 3,
    levelLabel: "Medel",
    area: "Ekonomi",
    trains: "styrelseansvar och personberoende",
    title: "Kassören som blivit föreningens ekonomisystem",
    summary: [
      "Ogdenville BK har cirka 680 medlemmar, 14 aktiva lag, en kanslist på 50 % och en styrelse på sju personer. Föreningen omsätter ungefär 1,6 miljoner kronor per år.",
      "Kassören Murat är pensionerad revisor och har skött föreningens ekonomi länge. Han kan allt: bokföring, bidrag, fakturering, lagavgifter, bankkontakter och kontakt med revisorer. Ordföranden Cecilia litar på honom och lyfter därför sällan ekonomin på styrelsemöten.",
      "Problemet uppstår när tre fakturabetalningar faller bort i systemet. Det upptäcks först när ett lag saknar träningsdräkter de redan betalat för. Föreningen har en kassabrist på 38 000 kronor som styrelsen inte kände till.",
      "Murat har inte gjort detta av illvilja. Han är tvärtom kompetent och lojal. Men föreningen har byggt sin ekonomistyrning på en person i stället för ett system.",
      "Den här nivån är medel eftersom lösningen kräver både struktur och relationskänsla. Du måste stärka styrelsens ansvar utan att förminska kassören.",
    ],
    challenge:
      "Hur får du Ogdenville BK:s styrelse att ta tillbaka ägarskapet över ekonomin utan att det upplevs som misstro mot Murat?",
    hints: [
      { kind: "p", text: "Börja med principen: kassören hanterar ekonomin, men styrelsen äger ansvaret." },
      {
        kind: "p",
        text: "Det går inte att säga: ”Murat har koll.” Det är inte en styrningsmodell. Det är personberoende.",
      },
      {
        kind: "p",
        text: "Första steget är en enkel månadsrapport på en A4-sida. Den ska innehålla tre rader:",
      },
      {
        kind: "ol",
        items: [
          "Intäkter hittills i år jämfört med budget",
          "Kostnader hittills i år jämfört med budget",
          "Kassa och bank just nu",
        ],
      },
      {
        kind: "p",
        text: "Alla i styrelsen ska kunna läsa den. Den behöver inte vara perfekt. Den behöver vara begriplig.",
      },
      { kind: "p", text: "Andra steget är attestordning. Föreningen behöver en enkel beslutsmodell:" },
      {
        kind: "ul",
        items: [
          "under 2 000 kr: kassör eller kansli hanterar",
          "2 000–10 000 kr: kassör + en styrelseperson",
          "över 10 000 kr: styrelsebeslut krävs",
        ],
      },
      {
        kind: "p",
        text: "Tredje steget är bank- och systembehörighet. Minst två personer måste kunna komma åt centrala system. Annars stannar föreningen om Murat blir sjuk, slutar eller hamnar i konflikt.",
      },
      {
        kind: "p",
        text: "Det viktiga samtalet med Murat ska inte vara: ”Vi kontrollerar dig.” Det ska vara: ”Vi skyddar dig och föreningen genom att göra ekonomin mindre personberoende.”",
      },
      {
        kind: "p",
        text: "Ett starkt svar ska innehålla ett styrelsebeslut, inte bara en rekommendation.",
      },
    ],
    impact: {
      resources: "Murats kompetens, Cecilia, styrelse, bank, bokföringssystem, budget.",
      activities: "Månadsrapport, attestordning, behörighetskontroll, styrelsebeslut.",
      goal: "Ekonomin kan förstås av fler än kassören.",
      effect: "Lägre sårbarhet, starkare kontroll, mindre juridisk risk, högre förtroende.",
    },
  },
  {
    id: "anlaggning",
    number: 4,
    level: 4,
    levelLabel: "Svår",
    area: "Anläggning",
    trains: "kostnadskontroll, avtal och kommunrelation",
    title: "Anläggningen som kostar pengar utan att någon ser det",
    summary: [
      "Capital City BK har cirka 650 medlemmar, en kanslist på halvtid och en ideell kassör. Föreningen använder en kommunalt upplåten konstgräsplan och bokar halltid i kommunens sporthall.",
      "Kassören Birgitta misstänker att hallkostnaderna inte stämmer. I mars betalade föreningen 8 400 kronor för februari, mer än månaden innan. Ingen i styrelsen har jämfört fakturorna från kommunens idrotts- och föreningsenhet med bokade och faktiskt använda tider.",
      "Ungdomsansvarig Markus har tider registrerade för 14 lag. Tre av lagen tränar inte längre. En tränare avbokade muntligt för sex veckor sedan, men avbokningen registrerades aldrig.",
      "Föreningen betalar alltså för tider den inte använder.",
      "Samtidigt vill ordföranden Anna lösa en ny träningsyta genom ett muntligt avtal med en privatperson som äger en gammal ridhuslokal. Det låter billigt och smidigt, men ingen har granskat avtal, uppsägningstid, brandskydd, tillgänglighet eller ansvar.",
      "Den här nivån är svår eftersom problemet blandar ekonomi, anläggning, kommunrelation, juridik och styrelseansvar.",
    ],
    challenge:
      "Hur hjälper du Capital City BK att ta kontroll över sina anläggningskostnader och samtidigt stoppa ett riskabelt privat avtal innan styrelsen låser fast föreningen?",
    hints: [
      { kind: "p", text: "Börja med att separera två problem:" },
      {
        kind: "ol",
        items: [
          "föreningen betalar för tider den inte använder",
          "föreningen riskerar att ingå ett muntligt och oklart anläggningsavtal",
        ],
      },
      { kind: "p", text: "Det första problemet löses med kontroll. Det andra löses med stoppregel." },
      {
        kind: "p",
        text: "Första steget är en anläggningsinventering. Markus och Birgitta ska jämföra:",
      },
      {
        kind: "ul",
        items: ["bokade tider", "använda tider", "avbokade tider", "fakturerade tider", "ansvarig ledare per tid"],
      },
      {
        kind: "p",
        text: "Detta ska göras i ett enkelt kalkylblad. Målet är att hitta glappet mellan bokning och verklighet.",
      },
      {
        kind: "p",
        text: "Andra steget är att utse en anläggningsansvarig. Inte ”Markus hjälper till lite”, utan ett formellt uppdrag:",
      },
      {
        kind: "ul",
        items: [
          "ansvar för kontakt med kommunens idrotts- och föreningsenhet",
          "ansvar för att avbokningar registreras",
          "ansvar för att fakturor kontrolleras mot bokade tider",
          "ansvar för rapport till styrelsen varje månad under högsäsong",
        ],
      },
      { kind: "p", text: "Tredje steget är stoppregel för privata anläggningsavtal:" },
      {
        kind: "ul",
        items: [
          "Inget muntligt avtal.",
          "Inget avtal utan uppsägningstid.",
          "Inget avtal utan kontroll av tillstånd, brandskydd och ansvar.",
          "Inget avtal utan styrelseprotokoll.",
        ],
      },
      { kind: "p", text: "Ett bra pris är inte ett bra pris om föreningen tar en dold juridisk risk." },
      { kind: "p", text: "Ett starkt svar ska landa i tre styrelsepunkter:" },
      {
        kind: "ol",
        items: [
          "Utse anläggningsansvarig.",
          "Kontrollera bokning mot faktura.",
          "Pausa privatpersonsavtalet tills riskerna är utredda.",
        ],
      },
    ],
    impact: {
      resources: "Birgitta, Markus, Anna, IdrottOnline, fakturor, kommunal kontakt, styrelsemöte.",
      activities: "Jämföra bokningar, kontrollera fakturor, utse ansvarig, granska avtal.",
      goal: "Inga oanvända tider betalas utan kontroll och inga muntliga avtal ingås.",
      effect: "Lägre kostnader, bättre kommunrelation, mindre juridisk risk, stabilare säsongsplanering.",
    },
  },
  {
    id: "drop-out",
    number: 5,
    level: 5,
    levelLabel: "Mycket svår",
    area: "Drop-out",
    trains: "systemtänkande, medlemsresa och långsiktig kultur",
    title: "Föreningen som tappar halva laget utan att veta varför",
    summary: [
      "North Haverbrook IK är en förening i stadens nordöstra del med cirka 680 aktiva medlemmar, varav 490 är under 18 år. Föreningen har vuxit stadigt, särskilt i åldrarna F/P 8–11. Rekryteringen fungerar.",
      "Problemet kommer senare.",
      "När ungdomsansvarig Susanne tittar i FOGIS ser hon att av 62 spelare som var aktiva i U12-lagen förra säsongen är 31 borta. Det är 50 %. Det har sett likadant ut i flera år, men ingen har gjort det synligt för styrelsen.",
      "Ordföranden Reza har trott att det är normalt att barn slutar i den åldern. Sportsligt ansvarig Tobias ser en annan del av problemet: vissa tränare orkar inte, och när de slutar faller hela lag. Kommunikationen till familjer går via Instagram och lagchattar. Det finns ingen utskrivningsrutin, ingen återkoppling och ingen samlad medlemsresa.",
      "Det här är det svåraste caset eftersom det inte finns en enda orsak. Drop-out kan bero på tränare, kostnad, nivå, kompisar, kommunikation, familjesituation, anläggning, kultur eller brist på utveckling. Föreningen måste bygga ett lärande system, inte gissa.",
    ],
    challenge:
      "Hur får du North Haverbrook IK att gå från osynligt spelartapp till ett system där föreningen mäter, förstår och agerar på drop-out i U12–U16 utan att belasta ledarna med ännu mer arbete?",
    hints: [
      { kind: "p", text: "Börja med att göra problemet synligt." },
      {
        kind: "p",
        text: "Så länge Reza bara ”hör talas om” tappet kommer han att normalisera det. När siffran ligger på styrelsebordet förändras frågan. 50 % tapp är inte en känsla. Det är ett styrningsproblem.",
      },
      { kind: "p", text: "Första steget är en enkel drop-out-tabell från FOGIS:" },
      {
        kind: "table",
        headers: ["Ålder", "Aktiva föregående säsong", "Aktiva nu", "Tapp", "Kommentar"],
        rows: [
          ["U12", "62", "31", "50 %", "kräver analys"],
          ["U13", "[antal]", "[antal]", "[procent]", ""],
          ["U14", "[antal]", "[antal]", "[procent]", ""],
          ["U15", "[antal]", "[antal]", "[procent]", ""],
          ["U16", "[antal]", "[antal]", "[procent]", ""],
        ],
      },
      {
        kind: "p",
        text: "Andra steget är att sluta behandla drop-out som en tränarfråga. Tränare påverkar, men föreningen äger systemet.",
      },
      { kind: "p", text: "Föreningen behöver tre minimirutiner:" },
      {
        kind: "ol",
        items: [
          "Välkomstrutin: varje ny familj får veta vad föreningen erbjuder, vad det kostar, vilka nivåer som finns och vem man kontaktar.",
          "Utskrivningsrutin: när en spelare slutar fångas orsaken upp med tre enkla frågor.",
          "Återkopplingsrutin: styrelsen får en sammanställning varje termin: vilka slutar, när slutar de och varför verkar de sluta?",
        ],
      },
      {
        kind: "p",
        text: "Tredje steget är att skydda ledarna från mer administration. Det ska inte byggas en tung enkätapparat. Det räcker med tre frågor via SMS eller formulär:",
      },
      {
        kind: "ol",
        items: [
          "Vad är huvudskälet till att barnet slutar?",
          "Finns det något föreningen hade kunnat göra annorlunda?",
          "Vill barnet fortsätta på annan nivå, annan roll eller annan tid?",
        ],
      },
      {
        kind: "p",
        text: "Fjärde steget är att ge ägarskap. Styrelsen måste besluta vem som äger frågan. Om ingen äger drop-out blir varje tapp en enskild händelse. Om någon äger frågan blir tappet ett lärande underlag.",
      },
      {
        kind: "p",
        text: "Ett starkt svar ska inte säga ”vi behöver behålla fler”. Det ska visa hur föreningen lär sig varför spelare försvinner.",
      },
      { kind: "p", text: "Det här caset kräver systemtänkande:" },
      {
        kind: "ul",
        items: [
          "rekrytering utan behållning är läckage",
          "ledartrötthet skapar spelartapp",
          "svag kommunikation gör familjer osäkra",
          "otydlig medlemsresa gör att spelare inte ser nästa steg",
          "styrelsen måste se mönster, inte bara enskilda lagproblem",
        ],
      },
    ],
    impact: {
      resources: "Susanne, Reza, Tobias, FOGIS, ledare, familjer, RF-SISU-stöd.",
      activities: "Ta ut statistik, identifiera tapp, skapa utskrivningsrutin, sammanställa orsaker, besluta ägarskap.",
      goal: "Styrelsen vet var, när och varför spelare slutar i U12–U16.",
      effect: "Bättre behållning, starkare medlemsvärde, mindre ledarberoende, mer hållbar föreningskultur.",
    },
  },
];
