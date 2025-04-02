import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// SEO Optimized Pages
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import About from "./pages/About";

// Platform Pages
import AIAnalytics from "./pages/platform/AIAnalytics";
import BrandMatching from "./pages/platform/BrandMatching";
import AutomatedOutreach from "./pages/platform/AutomatedOutreach";
import PerformanceTracking from "./pages/platform/PerformanceTracking";

// Solutions Pages
import ForBrands from "./pages/solutions/ForBrands";
import ForCreators from "./pages/solutions/ForCreators";
import ForAgencies from "./pages/solutions/ForAgencies";

// Resources Pages
import MarketInsights from "./pages/resources/MarketInsights.tsx";
import SuccessStories from "./pages/resources/SuccessStories.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* SEO Optimized Routes */}
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          
          {/* Platform Routes */}
          <Route path="/platform/ai-analytics" element={<AIAnalytics />} />
          <Route path="/platform/brand-matching" element={<BrandMatching />} />
          <Route path="/platform/automated-outreach" element={<AutomatedOutreach />} />
          <Route path="/platform/performance-tracking" element={<PerformanceTracking />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions/for-brands" element={<ForBrands />} />
          <Route path="/solutions/for-creators" element={<ForCreators />} />
          <Route path="/solutions/for-agencies" element={<ForAgencies />} />
          
          {/* Resources Routes */}
          <Route path="/resources/market-insights" element={<MarketInsights />} />
          <Route path="/resources/success-stories" element={<SuccessStories />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
