import { Suspense, lazy, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Uppdrag = lazy(() => import("./pages/areas/Uppdrag"));
const Foreningslyftet = lazy(() => import("./pages/areas/Foreningsutveckling"));
const SkolaSamverkan = lazy(() => import("./pages/areas/SkolaSamverkan"));
const Arbetsuppgifter = lazy(() => import("./pages/areas/Arbetsuppgifter"));
const Partners = lazy(() => import("./pages/areas/Partners"));
const Kvalitetsklubb = lazy(() => import("./pages/areas/Kvalitetsklubb"));
const Begrepp = lazy(() => import("./pages/areas/Begrepp"));
const FUiSkola = lazy(() => import("./pages/areas/FUiSkola"));
const EnBattreVag = lazy(() => import("./pages/areas/EnBattreVag"));
const JamstalldhetTrygghet = lazy(() => import("./pages/areas/JamstalldhetTrygghet"));
const Spelarutbildning = lazy(() => import("./pages/areas/Spelarutbildning"));

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash, pathname]);
  return null;
};

const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <Loader2
      className="h-5 w-5 animate-spin text-muted-foreground"
      aria-label="Laddar sida"
    />
  </div>
);

const Protected = ({ children }: { children: React.ReactNode }) => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AuthProvider>
          <ScrollToHash />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              {/* Publika auth-sidor */}
              <Route path="/login" element={<Login />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Skyddat innehåll — kräver inloggning */}
              <Route path="/" element={<Protected><Home /></Protected>} />

              {/* Primära huvuduppdrag */}
              <Route path="/foreningsutveckling" element={<Protected><Foreningslyftet /></Protected>} />
              <Route path="/en-battre-vag" element={<Protected><EnBattreVag /></Protected>} />
              <Route path="/fu-skola" element={<Protected><FUiSkola /></Protected>} />

              {/* Bakåtkompatibel alias */}
              <Route
                path="/skola-samverkan/fu-i-skola"
                element={<Navigate to="/fu-skola" replace />}
              />

              {/* Sekundära / stödjande sidor */}
              <Route path="/uppdrag" element={<Protected><Uppdrag /></Protected>} />
              <Route path="/uppdrag/arbetsuppgifter" element={<Protected><Arbetsuppgifter /></Protected>} />
              <Route path="/uppdrag/partners" element={<Protected><Partners /></Protected>} />
              <Route
                path="/foreningsutveckling/kvalitetsklubb"
                element={<Protected><Kvalitetsklubb /></Protected>}
              />
              <Route
                path="/foreningsutveckling/begrepp"
                element={<Protected><Begrepp /></Protected>}
              />
              <Route
                path="/foreningsutveckling/jamstalldhet-och-trygghet"
                element={<Protected><JamstalldhetTrygghet /></Protected>}
              />
              <Route
                path="/foreningslyftet/jamstalldhet-och-trygghet"
                element={
                  <Navigate
                    to="/foreningsutveckling/jamstalldhet-och-trygghet"
                    replace
                  />
                }
              />
              <Route path="/uppdrag/spelarutbildning" element={<Protected><Spelarutbildning /></Protected>} />
              <Route path="/skola-samverkan" element={<Protected><SkolaSamverkan /></Protected>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
