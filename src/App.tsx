import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Kwenda from "./pages/Kwenda";
import DemandeDevis from "./pages/DemandeDevis";
import NotFound from "./pages/NotFound";
import { RessourcesHumaines, GenieCivil, Technologies, Electricite } from "./pages/services";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash was already shown in this session
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence mode="wait">
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          </AnimatePresence>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/kwenda" element={<Kwenda />} />
              <Route path="/demande-devis" element={<DemandeDevis />} />
              <Route path="/rh" element={<RessourcesHumaines />} />
              <Route path="/genie-civil" element={<GenieCivil />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/electricite" element={<Electricite />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
