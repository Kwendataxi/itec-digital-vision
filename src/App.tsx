import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Kwenda from "./pages/Kwenda";
import DemandeDevis from "./pages/DemandeDevis";
import NotFound from "./pages/NotFound";
import { RessourcesHumaines, GenieCivil, Technologies, Electricite } from "./pages/services";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kwenda" element={<Kwenda />} />
            <Route path="/demande-devis" element={<DemandeDevis />} />
            <Route path="/services/rh" element={<RessourcesHumaines />} />
            <Route path="/services/genie-civil" element={<GenieCivil />} />
            <Route path="/services/technologies" element={<Technologies />} />
            <Route path="/services/electricite" element={<Electricite />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
