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
import DrivewayResurfacing from "./pages/DrivewayResurfacing";
import Waterproofing from "./pages/Waterproofing";
import UrethaneCement from "./pages/UrethaneCement";
import GovernmentContracts from "./pages/GovernmentContracts";
import EpoxyFlooringNaples from "./pages/EpoxyFlooringNaples";
import EpoxyFlooringFortMyers from "./pages/EpoxyFlooringFortMyers";
import EpoxyFlooringCapeCoral from "./pages/EpoxyFlooringCapeCoral";
import EpoxyFlooringMarcoIsland from "./pages/EpoxyFlooringMarcoIsland";
import EpoxyFlooringBonitaSprings from "./pages/EpoxyFlooringBonitaSprings";
import EpoxyFlooringEstero from "./pages/EpoxyFlooringEstero";
import WhyEpoxyArt33 from "./pages/WhyEpoxyArt33";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from "./pages/Products";
import FloorVisualizer from "./pages/FloorVisualizer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Main Pages with .html */}
          <Route path="/services.html" element={<Services />} />
          <Route path="/gallery.html" element={<Gallery />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/blog/:slug.html" element={<BlogPost />} />
          <Route path="/faq.html" element={<FAQ />} />
          <Route path="/showroom.html" element={<Showroom />} />
          <Route path="/products.html" element={<Products />} />
          <Route path="/visualizer.html" element={<FloorVisualizer />} />
          
          {/* Service Pages with .html */}
          <Route path="/garage-floor-coating.html" element={<GarageFloorCoating />} />
          <Route path="/metallic-epoxy.html" element={<MetallicEpoxy />} />
          <Route path="/flake-system.html" element={<FlakeSystem />} />
          <Route path="/quartz-system.html" element={<QuartzSystem />} />
          <Route path="/pool-deck-resurfacing.html" element={<PoolDeckResurfacing />} />
          <Route path="/commercial-epoxy.html" element={<CommercialEpoxy />} />
          <Route path="/industrial-epoxy.html" element={<IndustrialEpoxy />} />
          <Route path="/concrete-repair.html" element={<ConcreteRepair />} />
          <Route path="/driveway-resurfacing.html" element={<DrivewayResurfacing />} />
          <Route path="/waterproofing.html" element={<Waterproofing />} />
          <Route path="/urethane-cement.html" element={<UrethaneCement />} />
          <Route path="/government-contracts.html" element={<GovernmentContracts />} />
          <Route path="/epoxy-flooring-naples.html" element={<EpoxyFlooringNaples />} />
          <Route path="/epoxy-flooring-fort-myers.html" element={<EpoxyFlooringFortMyers />} />
          <Route path="/epoxy-flooring-cape-coral.html" element={<EpoxyFlooringCapeCoral />} />
          <Route path="/epoxy-flooring-marco-island.html" element={<EpoxyFlooringMarcoIsland />} />
          <Route path="/epoxy-flooring-bonita-springs.html" element={<EpoxyFlooringBonitaSprings />} />
          <Route path="/epoxy-flooring-estero.html" element={<EpoxyFlooringEstero />} />
          
          {/* Additional Pages with .html */}
          <Route path="/why-epoxyart33.html" element={<WhyEpoxyArt33 />} />
          <Route path="/privacy.html" element={<PrivacyPolicy />} />

          {/* Legacy routes (redirects for old URLs without .html) */}
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/products" element={<Products />} />
          <Route path="/visualizer" element={<FloorVisualizer />} />
          <Route path="/garage-floor-coating" element={<GarageFloorCoating />} />
          <Route path="/metallic-epoxy" element={<MetallicEpoxy />} />
          <Route path="/flake-system" element={<FlakeSystem />} />
          <Route path="/quartz-system" element={<QuartzSystem />} />
          <Route path="/pool-deck-resurfacing" element={<PoolDeckResurfacing />} />
          <Route path="/commercial-epoxy" element={<CommercialEpoxy />} />
          <Route path="/industrial-epoxy" element={<IndustrialEpoxy />} />
          <Route path="/concrete-repair" element={<ConcreteRepair />} />
          <Route path="/driveway-resurfacing" element={<DrivewayResurfacing />} />
          <Route path="/waterproofing" element={<Waterproofing />} />
          <Route path="/urethane-cement" element={<UrethaneCement />} />
          <Route path="/government-contracts" element={<GovernmentContracts />} />
          <Route path="/epoxy-flooring-naples" element={<EpoxyFlooringNaples />} />
          <Route path="/epoxy-flooring-fort-myers" element={<EpoxyFlooringFortMyers />} />
          <Route path="/epoxy-flooring-cape-coral" element={<EpoxyFlooringCapeCoral />} />
          <Route path="/epoxy-flooring-marco-island" element={<EpoxyFlooringMarcoIsland />} />
          <Route path="/epoxy-flooring-bonita-springs" element={<EpoxyFlooringBonitaSprings />} />
          <Route path="/epoxy-flooring-estero" element={<EpoxyFlooringEstero />} />
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
