import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Droplets, Sun, Shield, Users, Sparkles } from 'lucide-react';

const PoolDeckResurfacing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Pool Deck Resurfacing Naples FL | Slip-Resistant Coating | Free Estimate"
        description="Naples #1 pool deck resurfacing. Slip-resistant, UV-stable Polyaspartic coating that won't yellow. Cool to the touch in Florida sun. Marco Island, Fort Myers, SWFL. ☎️ (239) 276-1462"
        keywords="pool deck resurfacing Naples, pool deck resurfacing naples fl, epoxy pool deck Fort Myers, pool deck coating SWFL, slip resistant pool deck, pool deck repair Marco Island, Polyaspartic pool deck, cool deck coating Naples, pool deck contractor near me"
        url="/pool-deck-resurfacing"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "@id": "https://epoxyart33.com/pool-deck-resurfacing#service",
          "name": "Pool Deck Resurfacing",
          "description": "Slip-resistant, UV-resistant pool deck resurfacing with Polyaspartic coating",
          "areaServed": "Southwest Florida",
          "serviceType": "Pool Deck Resurfacing"
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-pool-deck.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pool Deck Resurfacing Naples FL - Slip-Resistant & UV-Stable Coating
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your pool area with slip-resistant, waterproof epoxy coating. Perfect for SWFL's sunny climate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:239-276-1462">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8">
                  Call (239) 276-1462
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our System for Pool Decks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Our Pool Deck System is Different</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Traditional concrete pool decks crack, stain, and become slippery when wet. Our specialized pool deck system uses <strong>Polyaspartic with color tint and Torginol flakes</strong> instead of traditional epoxy base. Why? Because Polyaspartic won't yellow or fade under Florida's intense UV rays.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">The Florida Sun Problem</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Standard epoxy-based systems can yellow and fade when exposed to constant sunlight and UV radiation. For pool decks that are exposed to the sun all day, we use Polyaspartic throughout the system - not just as a topcoat. This ensures your pool deck stays beautiful and maintains its color for years, even under SWFL's harsh sun.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our pool deck system is specifically engineered to withstand SWFL's intense sun, pool chemicals, constant water exposure, and high traffic - all while staying slip-resistant and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pool Deck Benefits</h2>
            <p className="text-xl text-gray-600">Safety, beauty, and durability</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Slip-Resistant Surface</h3>
                <p className="text-gray-600">
                  Textured finish provides excellent traction even when wet. Reduces slip-and-fall accidents around the pool.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">100% Waterproof</h3>
                <p className="text-gray-600">
                  Completely sealed surface prevents water absorption, mold, and mildew growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">UV Resistant</h3>
                <p className="text-gray-600">
                  Our topcoats are UV-stabilized to withstand Florida's intense sun without fading or yellowing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cooler to Walk On</h3>
                <p className="text-gray-600">
                  Light-colored epoxy reflects heat, staying cooler underfoot than traditional concrete on hot days.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Chemical Resistant</h3>
                <p className="text-gray-600">
                  Resists chlorine, salt, pool chemicals, and sunscreen without staining or degrading.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Beautiful Aesthetics</h3>
                <p className="text-gray-600">
                  Choose from hundreds of colors and designs. Create a resort-style look in your backyard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Pool Deck Projects */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Pool Deck Installations</h2>
            <p className="text-xl text-gray-600">Real projects in Southwest Florida</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <img 
                src="/images/projects/pool-deck-1.jpg" 
                alt="Pool Deck with Flake System - Full View" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Complete pool deck with Flake System - slip-resistant and beautiful
              </p>
            </div>
            <div>
              <img 
                src="/images/projects/pool-deck-2.jpg" 
                alt="Pool Deck Flake System Close-up" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Detail view - Full broadcast Torginol flakes for maximum safety
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Tropical Breeze */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Project: Tropical Breeze</h2>
            <p className="text-xl text-gray-600">Completed this week in Southwest Florida</p>
          </div>
          
          {/* Technical Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Color: Torginol Tropical Breeze</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A beautiful blend of coastal colors perfect for pool areas. This flake system features blue, white, and sand tones that complement any Florida backyard while providing maximum slip resistance.
            </p>
          </div>

          {/* Tropical Breeze Project Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group">
              <img 
                src="/images/gallery/pool-deck-tropical-1.jpg" 
                alt="Pool Deck Tropical Breeze - Full View" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Tropical Breeze - Screened Lanai
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/pool-deck-tropical-2.jpg" 
                alt="Pool Deck Tropical Breeze - Lanai View" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Slip-Resistant Finish
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/pool-deck-tropical-3.jpg" 
                alt="Pool Deck Tropical Breeze Complete" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Full Pool Area Coverage
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/pool-deck-tropical-4.jpg" 
                alt="Pool Deck Before Coating" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Before - Surface Preparation
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/pool-deck-tropical-5.jpg" 
                alt="Pool Deck Fresh Installation" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Fresh Installation Complete
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Systems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recommended Pool Deck Systems</h2>
            <p className="text-xl text-gray-600">Designed specifically for pool areas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-400 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <span className="bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full">BEST FOR POOLS</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Flake System with Extra Texture</h3>
                <img 
                  src="/images/samples/targinol-shorline-421.jpg" 
                  alt="Pool Deck Flake" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maximum slip resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Coastal color themes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Torginol premium flakes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>UV-resistant topcoat</span>
                  </li>
                </ul>
                <Link to="/flake-system">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold">
                    Learn More About Flake
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Quartz System</h3>
                  <p className="text-gray-600">Heavy-Duty Option</p>
                </div>
                <img 
                  src="/images/projects/pool-deck-quartz.jpg" 
                  alt="Pool Deck Quartz System" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Extreme durability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Commercial-grade strength</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Natural stone appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Perfect for high traffic</span>
                  </li>
                </ul>
                <Link to="/quartz-system">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold">
                    Learn More About Quartz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Suggestions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Pool Deck Colors</h2>
            <p className="text-xl text-gray-600">Cool, coastal, and inviting</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg">
              <img src="/images/samples/targinol-shorline-421.jpg" alt="Shoreline" className="w-full h-32 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">Shoreline</h3>
                <p className="text-sm text-gray-600">Coastal Blues & Whites</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg">
              <img src="/images/samples/targinol-tidewave-807.jpg" alt="Tidewave" className="w-full h-32 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">Tidewave</h3>
                <p className="text-sm text-gray-600">Ocean Blue Blend</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg">
              <img src="/images/samples/targinol-bean-960.jpg" alt="Bean" className="w-full h-32 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">Bean</h3>
                <p className="text-sm text-gray-600">Warm Sandy Tones</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg">
              <img src="/images/samples/targinol-orbit-310.jpg" alt="Orbit" className="w-full h-32 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">Orbit</h3>
                <p className="text-sm text-gray-600">Modern Gray Mix</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/showroom">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold">
                View All Color Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pool Deck Installation Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Grind & Repair</h3>
              <p className="text-gray-600">Diamond grind concrete and repair any cracks or damage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">MVB Primer</h3>
              <p className="text-gray-600">Moisture Vapor Barrier for humidity control and maximum adhesion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Polyaspartic + Flake/Quartz</h3>
              <p className="text-gray-600">Polyaspartic with color tint and flakes or Quartz - prevents yellowing from sun</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Polyaspartic Seal</h3>
              <p className="text-gray-600">UV-resistant Polyaspartic topcoat for long-lasting beauty and sun protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Pool Deck Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Serving Naples, Fort Myers, Cape Coral, and all of SWFL. Fast installation, stunning results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8">
                View Pool Deck Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoolDeckResurfacing;
