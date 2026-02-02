import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Sparkles, Palette, Eye, Home, Building2, Shield, Phone, ChevronRight, Award, Clock } from 'lucide-react';

const MetallicEpoxy = () => {
  // FAQ Schema Data for Metallic Epoxy
  const faqData = [
    {
      question: "How is metallic epoxy different from regular epoxy?",
      answer: "Metallic epoxy uses special metallic pigments that create unique, three-dimensional swirling patterns as it cures. Unlike solid color or flake epoxy, each metallic floor is one-of-a-kind—no two floors look exactly alike."
    },
    {
      question: "How long does metallic epoxy flooring last?",
      answer: "When properly installed with UV-stable polyaspartic topcoat, metallic epoxy floors last 15-20+ years. Our installation includes diamond grinding, MVB primer, and multiple topcoat layers for maximum durability."
    },
    {
      question: "Is metallic epoxy slippery?",
      answer: "Metallic epoxy has a smooth, high-gloss finish. For areas where slip resistance is needed (like kitchens or bathrooms), we can add anti-slip additives to the topcoat without affecting the metallic look."
    },
    {
      question: "Can metallic epoxy be used outdoors in Florida?",
      answer: "Metallic epoxy is best for indoor applications. For outdoor areas like pool decks and patios, we recommend flake or quartz systems which handle UV exposure and temperature fluctuations better."
    },
    {
      question: "How much does metallic epoxy flooring cost in Naples?",
      answer: "Metallic epoxy is a premium system, typically $8-15 per sq ft depending on complexity and prep work. It costs more than flake systems but creates a truly unique luxury finish worth the investment."
    },
    {
      question: "What colors are available for metallic epoxy?",
      answer: "We offer unlimited color combinations—silver, gold, copper, blue ocean, pearl white, charcoal, and custom blends. We can create any color theme you envision, from subtle elegance to bold statement floors."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Metallic Epoxy Flooring Naples FL | 3D Designer Floors"
        description="Metallic epoxy flooring in Naples, FL. Stunning 3D effects, one-of-a-kind designs. Homes, showrooms, commercial. Free design consultation! ☎️ (239) 276-1462"
        keywords="metallic epoxy flooring Naples FL, metallic epoxy floor Naples, 3D epoxy flooring near me, luxury epoxy floors Naples, designer epoxy flooring Naples FL, metallic floor coating Fort Myers"
        url="/metallic-epoxy-floors-naples-fl"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Metallic Epoxy Flooring Naples FL",
          "description": "Luxury 3D metallic epoxy flooring with stunning visual effects. One-of-a-kind designer floors for homes and businesses in Naples FL.",
          "areaServed": "Naples, FL",
          "serviceType": "Metallic Epoxy Flooring"
        }}
        faqData={faqData}
      />
      <Navbar />

      {/* Trust Bar */}
      <div className="bg-purple-800 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> One-of-a-Kind Designs • UV-Stable Finish • 15-Year Durability • Free Design Consultation
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-metallic.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Metallic Epoxy Flooring in Naples, FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Luxury 3D Designer Floors That Are Truly One-of-a-Kind
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Transform any space into a work of art. <strong className="text-white">Each floor is unique—no two are ever the same.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Free Design Consultation
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

      {/* What is Metallic Epoxy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is Metallic Epoxy?</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Metallic epoxy flooring uses metallic pigments mixed with clear epoxy resin to create dynamic, three-dimensional visual effects. As the epoxy cures, the metallic particles shift and swirl, creating unique patterns that resemble marble, ocean waves, molten metal, or cosmic nebulas.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              No two metallic floors are exactly alike—each installation is a work of art. The glossy, reflective finish adds depth and movement to any space, making it perfect for luxury homes, showrooms, retail spaces, and commercial lobbies.
            </p>
          </div>
        </div>
      </section>

      {/* Real Project Showcase */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real Metallic Epoxy Installation</h2>
            <p className="text-xl text-gray-300">Silver Storm Metallic - Residential Garage in SWFL</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <img 
              src="/images/projects/metallic-silver-1.jpg" 
              alt="Metallic Epoxy Silver Storm Installation" 
              className="w-full h-auto rounded-lg shadow-2xl border-4 border-yellow-500"
            />
            <p className="text-center text-gray-400 mt-6 italic text-lg">
              Stunning 3D metallic effects create a unique, luxury finish that transforms any space
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Metallic Epoxy?</h2>
            <p className="text-xl text-gray-600">Beauty meets durability</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Stunning Visual Impact</h3>
                <p className="text-gray-600">
                  Create jaw-dropping, one-of-a-kind floors that become the centerpiece of any room.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unlimited Design Options</h3>
                <p className="text-gray-600">
                  Choose from metallic golds, silvers, coppers, blues, or custom color blends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">High-Gloss Finish</h3>
                <p className="text-gray-600">
                  Mirror-like shine enhances light reflection, making spaces feel larger and brighter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Durable & Long-Lasting</h3>
                <p className="text-gray-600">
                  Industrial-strength epoxy withstands heavy foot traffic, impacts, and daily wear.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Versatile Applications</h3>
                <p className="text-gray-600">
                  Perfect for basements, living rooms, kitchens, showrooms, lobbies, and retail spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy Maintenance</h3>
                <p className="text-gray-600">
                  Seamless surface is simple to clean—just sweep and mop. No grout lines or seams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Themes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Metallic Color Themes</h2>
            <p className="text-xl text-gray-600">Each creates a unique atmosphere</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400" alt="Ocean Blue" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Ocean Blue</h3>
                <p className="text-gray-600 mb-4">
                  Deep blues with white and turquoise swirls create a serene, coastal vibe. Perfect for beach homes.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=400" alt="Silver Storm" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Silver Storm</h3>
                <p className="text-gray-600 mb-4">
                  Metallic silvers and grays create a sleek, modern industrial look. Ideal for contemporary spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400" alt="Copper Sunset" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Copper Sunset</h3>
                <p className="text-gray-600 mb-4">
                  Warm coppers, golds, and bronze tones bring elegance and sophistication to any interior.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400" alt="Marble Elegance" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Marble Elegance</h3>
                <p className="text-gray-600 mb-4">
                  Black, white, and gold patterns mimic natural marble. Timeless luxury for high-end spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400" alt="Cosmic Galaxy" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Cosmic Galaxy</h3>
                <p className="text-gray-600 mb-4">
                  Deep purples, blues, and metallic accents create an otherworldly, celestial aesthetic.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1487147264018-f937fba0c817?w=400" alt="Custom Blend" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Custom Blend</h3>
                <p className="text-gray-600 mb-4">
                  Work with us to create your own unique color palette. The possibilities are endless!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Metallic Epoxy Process</h2>
            <p className="text-xl text-gray-600">Precision craftsmanship at every step</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Grind & Repair</h3>
                <p className="text-gray-600">Diamond grind concrete and repair any cracks or damage to ensure a perfect canvas.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Primer Layer</h3>
                <p className="text-gray-600">MVB primer for humidity control and maximum adhesion between concrete and metallic epoxy.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Metallic Epoxy Application</h3>
                <p className="text-gray-600">100% solid metallic epoxy with pigments carefully applied and manipulated to create the desired pattern.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Polyaspartic Clear Seal</h3>
                <p className="text-gray-600">High-gloss, UV-resistant Polyaspartic clear coat protects the metallic beauty for years to come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
            <div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold">Residential</h3>
              <p className="text-gray-600">Basements, living rooms, kitchens</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold">Commercial</h3>
              <p className="text-gray-600">Showrooms, retail, offices</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold">Luxury Spaces</h3>
              <p className="text-gray-600">Lobbies, hotels, spas</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold">Art Studios</h3>
              <p className="text-gray-600">Galleries, creative spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Metallic Epoxy Installation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating a stunning metallic floor requires precision and expertise. Here's our proven process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Diamond Grinding</h3>
              <p className="text-gray-300">CSP 2-3 profile for maximum adhesion. Essential for metallic systems to bond properly.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">MVB Primer</h3>
              <p className="text-gray-300">Moisture Vapor Barrier prevents bubbles and delamination—critical in Florida's humidity.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Metallic Epoxy Application</h3>
              <p className="text-gray-300">100% solids epoxy with metallic pigments carefully manipulated for unique 3D effects.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 font-bold text-black text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">UV-Stable Topcoat</h3>
              <p className="text-gray-300">Polyaspartic clear coat protects the metallic beauty and prevents yellowing.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/contact.html">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <Phone className="w-5 h-5 mr-2" /> Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why EpoxyArt33 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EpoxyArt33 for Metallic Epoxy</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Artistic Expertise</h3>
              <p className="text-gray-600">We treat each floor as a work of art, not just a coating job.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
              <p className="text-gray-600">Only the highest quality metallic pigments and 100% solids epoxy.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">15-Year Warranty</h3>
              <p className="text-gray-600">We stand behind the beauty and durability of every metallic floor.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
              <p className="text-gray-600">Unlimited color combinations to match your vision.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/why-epoxyart33.html">
              <Button variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-bold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Metallic Epoxy FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about metallic epoxy flooring</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-purple-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Other Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/garage-flake-floors-naples-fl.html" className="group">
              <Card className="border-2 hover:border-purple-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">Garage Flake Floors</h3>
                  <p className="text-gray-600">Durable, slip-resistant floors for garages</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/commercial-epoxy-flooring-naples-fl.html" className="group">
              <Card className="border-2 hover:border-purple-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">Commercial Epoxy</h3>
                  <p className="text-gray-600">Professional flooring for businesses</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quartz-pool-deck-coatings-naples-fl.html" className="group">
              <Card className="border-2 hover:border-purple-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">Quartz & Pool Deck</h3>
                  <p className="text-gray-600">Heavy-duty outdoor coatings</p>
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
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your metallic epoxy vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Request Free Quote
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetallicEpoxy;