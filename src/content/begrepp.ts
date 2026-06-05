export interface GlossaryTerm {
  id: string;
  term: string;
  question: string;
  answer: string;
}

export interface GlossaryCategory {
  id: string;
  label: string;
  terms: GlossaryTerm[];
}

/**
 * Begreppsordlista för förtroendevalda och ledare i en idrottsförening.
 * Förklaringarna hålls på principnivå – exakta belopp, åldersgränser och
 * ansökningsdatum utelämnas medvetet eftersom de ändras mellan åren.
 */
export const GLOSSARY: GlossaryCategory[] = [
  {
    id: "ekonomi",
    label: "Ekonomi & redovisning",
    terms: [
      {
        id: "bokforing",
        term: "Bokföring",
        question: "Bokföring – vad är det i en förening?",
        answer:
          "Bokföring är att löpande registrera föreningens alla ekonomiska händelser – medlemsavgifter, bidrag, inköp och försäljning – så att pengarna går att följa och redovisa. De flesta idrottsföreningar är bokföringsskyldiga enligt bokföringslagen, och bokföringen är grunden för bokslutet och för att medlemmarna ska kunna lita på ekonomin.",
      },
      {
        id: "lopande-bokforing",
        term: "Löpande bokföring",
        question: "Löpande bokföring – vad gör man då?",
        answer:
          "Man registrerar varje affärshändelse så snart den sker, eller minst en gång i månaden: vad som hänt, när, hur mycket och mot vilket konto. Varje post ska ha en verifikation – kvitto, faktura eller kontoutdrag – som bevis. Det löpande arbetet gör att kassören har koll under året och att bokslutet inte blir en gissningslek efter årsskiftet.",
      },
      {
        id: "budget",
        term: "Budget",
        question: "Budget – vad är det?",
        answer:
          "Budgeten är föreningens ekonomiska plan för det kommande året: en uppskattning av vilka intäkter som väntas och vad de ska räcka till. Den beslutas oftast av årsmötet och är styrelsens verktyg för att prioritera. Till skillnad från bokföring och bokslut blickar budgeten framåt – den handlar om planerade pengar, inte om vad som redan hänt.",
      },
      {
        id: "bokslut",
        term: "Bokslut / årsredovisning",
        question: "Bokslut och årsredovisning – vad är det?",
        answer:
          "Vid räkenskapsårets slut summeras bokföringen i ett bokslut – en sammanställning av årets intäkter, kostnader, tillgångar och skulder. Det visar om föreningen gick med över- eller underskott och hur stark ekonomin är. Större föreningar upprättar en formell årsredovisning, mindre föreningar ofta ett enklare bokslut. Det är underlaget årsmötet använder för att godkänna det gångna året.",
      },
      {
        id: "revision",
        term: "Revision",
        question: "Revision – varför behövs en revisor?",
        answer:
          "Revisorn är medlemmarnas kontrollfunktion. Hen granskar att bokföring och bokslut stämmer och att styrelsen förvaltat föreningens pengar enligt stadgar och årsmötesbeslut, och lämnar en revisionsberättelse med förslag om styrelsen ska beviljas ansvarsfrihet. Revisorn väljs av årsmötet och ska vara oberoende av styrelsen.",
      },
    ],
  },
  {
    id: "styrning",
    label: "Styrning & planering",
    terms: [
      {
        id: "verksamhetsplanering-vad",
        term: "Verksamhetsplanering",
        question: "Verksamhetsplanering – vad är det?",
        answer:
          "Verksamhetsplanering är att i förväg bestämma vad föreningen ska göra under kommande period och varför. Den binder ihop föreningens mål med konkreta aktiviteter, ansvar och resurser, så att arbetet blir medvetet i stället för tillfälligt. Planen blir också måttstocken man följer upp mot i verksamhetsberättelsen.",
      },
      {
        id: "verksamhetsplanering-innehall",
        term: "Verksamhetsplanering",
        question: "Verksamhetsplanering – vad ska ingå?",
        answer:
          "En användbar verksamhetsplan rymmer: mål för perioden, aktiviteterna som ska leda dit, vem som ansvarar för vad, en tidsplan, en budget som täcker aktiviteterna, och hur det ska följas upp. Den bör hänga ihop med föreningens verksamhetsidé – och för en idrottsförening gärna kopplas till Kvalitetsklubbs fyra fokusområden.",
      },
      {
        id: "stadgar",
        term: "Stadgar",
        question: "Stadgar – vad är det?",
        answer:
          "Stadgarna är föreningens grundregler, dess egen 'grundlag'. De beskriver föreningens ändamål, vem som kan bli medlem, hur årsmötet går till, hur styrelsen väljs, hur beslut fattas och hur föreningen kan ändra stadgarna eller upplösas. De beslutas av medlemmarna och styr allt annat – krockar ett beslut med stadgarna är det stadgarna som gäller.",
      },
      {
        id: "arsmote",
        term: "Årsmöte",
        question: "Årsmöte – vad måste tas upp?",
        answer:
          "Årsmötet är föreningens högsta beslutande organ, där medlemmarna en gång om året tar ställning till hur föreningen styrts och vart den ska. Vissa punkter ska alltid med: verksamhets- och förvaltningsberättelse, revisorernas berättelse, frågan om ansvarsfrihet för styrelsen, val av styrelse och revisorer samt budget och verksamhetsplan framåt. Exakt dagordning framgår av stadgarna.",
      },
    ],
  },
  {
    id: "bidrag",
    label: "Bidrag & finansiering",
    terms: [
      {
        id: "bidrag-varfor",
        term: "Bidrag",
        question: "Bidrag – vad gör det för en förening?",
        answer:
          "Bidrag är extern finansiering – från stat, kommun eller idrottsrörelsen – som kompletterar medlems- och deltagaravgifter. De gör det möjligt att hålla avgifterna nere, driva verksamhet i prioriterade områden, utbilda och behålla ledare och våga satsa långsiktigt. De flesta bidrag är riktade: de ska användas till ett bestämt syfte och återrapporteras.",
      },
      {
        id: "bidrag-vanligast",
        term: "Bidrag",
        question: "Bidrag – vilka är vanligast att söka?",
        answer:
          "För en idrottsförening är de vanligaste: statligt lokalt aktivitetsstöd (LOK-stöd) för ungdomsverksamhet, som söks via IdrottOnline; kommunala föreningsbidrag – aktivitets-, anläggnings- och utbildningsbidrag – från hemkommunen; samt projekt- och utbildningsstöd via RF-SISU, exempelvis inom Idrottslyftet. Därtill finns riktade satsningar som En bättre väg i prioriterade områden.",
      },
    ],
  },
];
