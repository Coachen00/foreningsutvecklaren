import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Varfor from "./pages/sections/Varfor";
import Fokus2026 from "./pages/sections/Fokus2026";
import GemensammaMal from "./pages/sections/GemensammaMal";
import VadOchHur from "./pages/sections/VadOchHur";
import Satsningarna from "./pages/sections/Satsningarna";
import Arbetsgrupper from "./pages/sections/Arbetsgrupper";
import Motesrytm from "./pages/sections/Motesrytm";
import EnBattreVag from "./pages/sections/EnBattreVag";
import Kontakt from "./pages/sections/Kontakt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sektion/varfor" element={<Varfor />} />
          <Route path="/sektion/fokus-2026" element={<Fokus2026 />} />
          <Route path="/sektion/gemensamma-mal" element={<GemensammaMal />} />
          <Route path="/sektion/vad-och-hur" element={<VadOchHur />} />
          <Route path="/sektion/satsningarna" element={<Satsningarna />} />
          <Route path="/sektion/arbetsgrupper" element={<Arbetsgrupper />} />
          <Route path="/sektion/motesrytm" element={<Motesrytm />} />
          <Route path="/sektion/en-battre-vag" element={<EnBattreVag />} />
          <Route path="/sektion/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
