import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Tokenomics from "./pages/Tokenomics";
import Security from "./pages/Security";
import Team from "./pages/Team";
import Partnerships from "./pages/Partnerships";
import Roadmap from "./pages/Roadmap";
import FAQ from "./pages/FAQ";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/security" element={<Security />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
