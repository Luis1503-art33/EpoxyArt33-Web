import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Shield, Sparkles, Home, Droplets, Phone, ChevronRight, Award, Clock } from 'lucide-react';

const FlakeSystem = () => {
  // FAQ Schema Data
  const faqData = [
    {
      question: "How long does a flake epoxy floor last in Naples, FL?",
      answer: "With proper installation using 100% solids epoxy and polyaspartic topcoat, flake floors last 15-20+ years in Naples. Our UV-stable topcoat prevents yellowing from Florida sun exposure."
    },
    {
      question: "Will my garage floor coating peel from hot tires?",
      answer: "No. We use polyaspartic topcoat specifically designed to resist hot tire pickup. Unlike DIY kits, our commercial-grade system handles the heat from hot tires without peeling or discoloring."
    },
    {
      question: "How do you prepare the concrete before coating?",
      answer: "We diamond grind the concrete to CSP 2-3 profile (not acid etch) for maximum adhesion. Then we repair all cracks and apply MVB (Moisture Vapor Barrier) primer—critical for Florida's humidity."
    },
    {
      question: "Can you coat a garage floor with moisture issues?",
      answer: "Yes. Our MVB primer blocks up to 25 lbs of moisture vapor transmission, making it ideal for Florida slabs. We test moisture levels before installation and use appropriate primers."
    },
    {
      question: "How long until I can park on my new garage floor?",
      answer: "Light foot traffic in 24 hours. You can park vehicles on the floor after 48-72 hours. Full cure takes 7 days, but normal use can begin within 3 days."
    },
    {
      question: "What's the difference between flake and metallic epoxy?",
      answer: "Flake epoxy uses colored chips for texture and slip resistance—ideal for garages and pool decks. Metallic creates smooth, 3D swirled effects for a luxury look—better for interior living spaces and showrooms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Garage Flake Floor Coatings Naples FL | Torginol Chip System"
        description="Garage flake floor coatings in Naples, FL. Premium Torginol chips, 200+ colors, slip-resistant texture. Perfect for Florida garages. Free estimate! ☎️ (239) 276-1462"
        keywords="garage flake floor Naples FL, flake epoxy flooring Naples, epoxy flake floors Naples FL, Torginol flake floor Naples, chip floor coating Naples FL, garage floor coating Naples, epoxy garage floor near me"
        url="/garage-flake-floors-naples-fl"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Garage Flake Floor Coatings Naples FL",
          "description": "Premium Torginol flake epoxy flooring for garages in Naples FL. Slip-resistant and easy to maintain.",
          "areaServed": "Naples, FL",
          "serviceType": "Garage Flake Floor Coating"
        }}
        faqData={faqData}
      />
      <Navbar />

      {/* Trust Bar */}
      <div className="bg-amber-700 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> 200+ Color Options • Slip-Resistant Texture • UV-Stable • Premium Torginol Flakes
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-flake-main.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Garage Flake Floor Coatings in Naples, FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Premium Torginol Chip System - 200+ Colors Available
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Beautiful, slip-resistant, and durable. <strong className="text-white">The #1 choice for Naples garages and pool decks.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Get Free Estimate
                </Button>
              </Link>
              <Link to="/showroom">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8">
                  View Color Samples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Flake System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is a Flake Epoxy System?</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A Flake epoxy system (also called chip flooring) consists of colored decorative flakes broadcast onto a wet epoxy base coat, then sealed with a clear Polyaspartic topcoat. The flakes create a multi-dimensional, textured finish that's both beautiful and functional.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We use premium <strong>Torginol flakes</strong>—the industry leader in quality decorative epoxy flakes. With hundreds of color combinations available, you can customize your floor to match any style.
            </p>
          </div>
        </div>
      </section>

      {/* Real Project Showcase */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Speaks for Itself</h2>
            <p className="text-xl text-gray-600">Real Flake System installations in SWFL</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/projects/garage-flake-1.jpg" 
              alt="Professional Flake System Installation" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-center text-gray-600 mt-4 italic">
              Full broadcast Flake System - Residential garage in Naples, FL
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Flake System?</h2>
            <p className="text-xl text-gray-600">The most versatile epoxy flooring option</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Slip-Resistant Texture</h3>
                <p className="text-gray-600">
                  The flakes create a textured surface that provides excellent traction, even when wet—perfect for garages and pool decks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hides Imperfections</h3>
                <p className="text-gray-600">
                  The multi-color flake pattern conceals minor concrete cracks and imperfections beautifully.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hundreds of Colors</h3>
                <p className="text-gray-600">
                  Choose from Torginol's extensive flake color library—from neutral to bold, we have options for every style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Waterproof & Chemical Resistant</h3>
                <p className="text-gray-600">
                  Fully sealed surface resists water, oil, gas, and chemicals. Ideal for harsh environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Extremely Durable</h3>
                <p className="text-gray-600">
                  Impact-resistant and long-lasting. Can withstand heavy vehicles, foot traffic, and daily wear.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy to Clean</h3>
                <p className="text-gray-600">
                  Seamless surface wipes clean with just a mop. No grout lines to scrub or stains to worry about.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Flake Colors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Torginol Flake Colors</h2>
            <p className="text-xl text-gray-600">From classic to contemporary</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-domino-411.jpg" alt="Domino" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-411 Domino</h3>
                <p className="text-sm text-gray-600">Black & White Classic</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-rapids-506.jpg" alt="Rapids" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-506 Rapids</h3>
                <p className="text-sm text-gray-600">Blue & White Blend</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-coyote-513.jpg" alt="Coyote" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-513 Coyote</h3>
                <p className="text-sm text-gray-600">Desert Tan Tones</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-orbit-310.jpg" alt="Orbit" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-310 Orbit</h3>
                <p className="text-sm text-gray-600">Modern Gray Mix</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/showroom">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                View All Flake Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flake Coverage Options</h2>
            <p className="text-xl text-gray-600">Choose the density that fits your style</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-center">Light Coverage</h3>
                <p className="text-center text-gray-600 mb-4">25-50% flake coverage</p>
                <p className="text-gray-700">
                  More epoxy base color shows through. Creates a subtle, speckled appearance with some texture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-2">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Full Broadcast</h3>
                <p className="text-center text-gray-600 mb-4">90-100% flake coverage</p>
                <p className="text-gray-700">
                  Maximum texture and slip resistance. Completely covers the base coat. Best for garages and pool decks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-center">Medium Coverage</h3>
                <p className="text-center text-gray-600 mb-4">50-75% flake coverage</p>
                <p className="text-gray-700">
                  Balanced look between base color and flakes. Moderate texture and decorative appeal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garages</h3>
              <p className="text-gray-600">The #1 choice for residential and commercial garages</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pool Decks</h3>
              <p className="text-gray-600">Slip-resistant and waterproof for safe pool areas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Patios & Porches</h3>
              <p className="text-gray-600">Outdoor living spaces that can handle the elements</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial Spaces</h3>
              <p className="text-gray-600">Showrooms, workshops, and retail environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Installation Process - Technical SEO Content */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Professional Installation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proper preparation is 90% of a successful epoxy floor. Here's how we ensure your flake floor lasts 15+ years in Florida's demanding climate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Diamond Grinding (CSP 2-3)</h3>
              <p className="text-gray-300">
                We use industrial diamond grinders to create a <strong>CSP 2-3 profile</strong>—the optimal texture for epoxy adhesion. This is far superior to acid etching and ensures permanent bonding.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Crack & Surface Repair</h3>
              <p className="text-gray-300">
                All cracks, spalls, and divots are filled with epoxy crack filler and ground smooth. This creates a seamless canvas and prevents future cracking.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">MVB Moisture Barrier</h3>
              <p className="text-gray-300">
                Our <strong>Moisture Vapor Barrier (MVB)</strong> primer blocks up to 25 lbs of moisture transmission—critical for Florida's high humidity and prevents delamination.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">100% Solids Epoxy Base</h3>
              <p className="text-gray-300">
                We apply <strong>Chemtec 100% solids epoxy</strong>—not the water-based products from big box stores. Zero solvents means maximum durability and chemical resistance.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">5</div>
              <h3 className="text-xl font-bold mb-3">Torginol Flake Broadcast</h3>
              <p className="text-gray-300">
                Premium <strong>Torginol decorative flakes</strong> are broadcast onto wet epoxy for full coverage. 200+ color blends available to match your style.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">6</div>
              <h3 className="text-xl font-bold mb-3">Polyaspartic Clear Coat</h3>
              <p className="text-gray-300">
                Final seal with <strong>UV-stable polyaspartic topcoat</strong>—resists hot tire pickup, yellowing, and abrasion. This is what makes our floors last 15-20 years.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-yellow-400 text-lg font-semibold mb-4">Most installations completed in just 1 day!</p>
            <Link to="/contact.html">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <Phone className="w-5 h-5 mr-2" /> Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why EpoxyArt33 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Naples Homeowners Choose EpoxyArt33</h2>
            <p className="text-xl text-gray-600">The difference between a floor that lasts 5 years vs 15+ years</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial-Grade Materials</h3>
              <p className="text-gray-600">100% solids Chemtec epoxy + Torginol flakes—same products used in commercial applications.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">15-Year Warranty</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranty coverage. Built to last.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">1-Day Installation</h3>
              <p className="text-gray-600">Most projects completed in 1 day. Walk in 24hrs, drive in 48-72hrs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Hot Tire Pickup</h3>
              <p className="text-gray-600">Polyaspartic topcoat prevents peeling from hot tires—unlike DIY kits.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/why-epoxyart33.html">
              <Button variant="outline" className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black font-bold">
                Learn More About Us <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about flake epoxy floors in Naples, FL</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-yellow-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/faq.html">
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                View All FAQs <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Other Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/metallic-epoxy-floors-naples-fl.html" className="group">
              <Card className="border-2 hover:border-yellow-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600">Metallic Epoxy Floors</h3>
                  <p className="text-gray-600">Stunning 3D designer floors for luxury spaces</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quartz-pool-deck-coatings-naples-fl.html" className="group">
              <Card className="border-2 hover:border-yellow-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Droplets className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600">Quartz & Pool Deck</h3>
                  <p className="text-gray-600">Heavy-duty coatings for pool areas and commercial</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/commercial-epoxy-flooring-naples-fl.html" className="group">
              <Card className="border-2 hover:border-yellow-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600">Commercial Epoxy</h3>
                  <p className="text-gray-600">Professional flooring for businesses and retail</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Upgrade Your Floor?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Request free samples and get a no-obligation quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/showroom">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                Request Free Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FlakeSystem;