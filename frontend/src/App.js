import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Showroom from "./pages/Showroom";
import GarageFloorCoating from "./pages/GarageFloorCoating";
import MetallicEpoxy from "./pages/MetallicEpoxy";
import FlakeSystem from "./pages/FlakeSystem";
import QuartzSystem from "./pages/QuartzSystem";
import PoolDeckResurfacing from "./pages/PoolDeckResurfacing";
import CommercialEpoxy from "./pages/CommercialEpoxy";
import IndustrialEpoxy from "./pages/IndustrialEpoxy";
import ConcreteRepair from "./pages/ConcreteRepair";
import WhyEpoxyArt33 from "./pages/WhyEpoxyArt33";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from "./pages/Products";
import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/products" element={<Products />} />
          {/* Service Pages */}
          <Route path="/garage-floor-coating" element={<GarageFloorCoating />} />
          <Route path="/metallic-epoxy" element={<MetallicEpoxy />} />
          <Route path="/flake-system" element={<FlakeSystem />} />
          <Route path="/quartz-system" element={<QuartzSystem />} />
          <Route path="/pool-deck-resurfacing" element={<PoolDeckResurfacing />} />
          <Route path="/commercial-epoxy" element={<CommercialEpoxy />} />
          <Route path="/industrial-epoxy" element={<IndustrialEpoxy />} />
          <Route path="/concrete-repair" element={<ConcreteRepair />} />
          {/* Additional Pages */}
          <Route path="/why" element={<WhyEpoxyArt33 />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;