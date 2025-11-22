import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Membresias from "./pages/Membresias";
import Atracciones from "./pages/Atracciones";
import AtraccionesAcuaticas from "./pages/AtraccionesAcuaticas";
import AtraccionesSpa from "./pages/AtraccionesSpa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/membresias" element={<Membresias />} />
            <Route path="/atracciones" element={<Atracciones />} />
            <Route path="/atracciones/acuaticas" element={<AtraccionesAcuaticas />} />
            <Route path="/atracciones/spa" element={<AtraccionesSpa />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
