import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
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
          {/* Service Pages - Coming Soon */}
          <Route path="/garage-floor-coating" element={<Services />} />
          <Route path="/metallic-epoxy" element={<Services />} />
          <Route path="/flake-system" element={<Services />} />
          <Route path="/quartz-system" element={<Services />} />
          <Route path="/pool-deck-resurfacing" element={<Services />} />
          <Route path="/commercial-epoxy" element={<Services />} />
          <Route path="/industrial-epoxy" element={<Services />} />
          <Route path="/concrete-repair" element={<Services />} />
          {/* Additional Pages - Coming Soon */}
          <Route path="/why" element={<Home />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/showroom" element={<Home />} />
          <Route path="/privacy" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;