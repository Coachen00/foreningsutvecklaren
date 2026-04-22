import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Uppdrag from "./pages/areas/Uppdrag";
import Foreningsutveckling from "./pages/areas/Foreningsutveckling";
import SkolaSamverkan from "./pages/areas/SkolaSamverkan";
import Arbetsuppgifter from "./pages/areas/Arbetsuppgifter";
import Partners from "./pages/areas/Partners";
import Kvalitetsklubb from "./pages/areas/Kvalitetsklubb";
import FUiSkola from "./pages/areas/FUiSkola";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uppdrag" element={<Uppdrag />} />
          <Route path="/uppdrag/arbetsuppgifter" element={<Arbetsuppgifter />} />
          <Route path="/uppdrag/partners" element={<Partners />} />
          <Route path="/foreningsutveckling" element={<Foreningsutveckling />} />
          <Route
            path="/foreningsutveckling/kvalitetsklubb"
            element={<Kvalitetsklubb />}
          />
          <Route path="/skola-samverkan" element={<SkolaSamverkan />} />
          <Route path="/skola-samverkan/fu-i-skola" element={<FUiSkola />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
