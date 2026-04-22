import HubHero from "@/components/HubHero";
import HubGrid from "@/components/HubGrid";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Index = () => {
  useDocumentTitle(
    undefined,
    "Fotbollsnyttan Göteborg – översikt över syfte, metod, satsningar och arbetsgrupper.",
  );
  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <main>
        <HubHero />
        <HubGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
