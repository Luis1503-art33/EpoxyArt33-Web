import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Droplets, Shield, Sun, Building2, Timer, Award, MapPin, Phone, Clock, Sparkles } from 'lucide-react';

const Waterproofing = () => {
  // FAQ Schema Data
  const faqData = [
    {
      question: "What is TREMCO 350/351 waterproofing system?",
      answer: "TREMCO 350/351 is a premium traffic-bearing waterproofing membrane system. The 350 is a polyurethane base coat and 351 is a wear-resistant topcoat. Together they provide waterproofing plus a durable walking surface for balconies and terraces."
    },
    {
      question: "How long does waterproofing last in Florida?",
      answer: "TREMCO waterproofing systems typically last 15-20+ years with proper installation. The system is designed for Florida's heavy rainfall, UV exposure, and temperature variations."
    },
    {
      question: "Can you waterproof an existing balcony or terrace?",
      answer: "Yes. We can apply waterproofing over existing concrete surfaces after proper preparation. For failing waterproofing, we remove the old membrane and apply a new system."
    },
    {
      question: "What areas can be waterproofed?",
      answer: "We waterproof balconies, terraces, walkways, parking structures, rooftop decks, and any exterior surface above living space. If water can penetrate and cause damage below, we can waterproof it."
    },
    {
      question: "Is waterproofing slip-resistant?",
      answer: "Yes. The TREMCO 351 topcoat includes slip-resistant texture for safety. This is critical for exterior surfaces that get wet from rain or pool splash."
    },
    {
      question: "How much does waterproofing cost in Naples?",
      answer: "Waterproofing typically costs $10-20 per sq ft depending on substrate condition and accessibility. Contact us for a free assessment and custom quote for your project."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Waterproofing Naples FL | TREMCO 350/351 System | Balcony & Terrace Waterproofing SWFL | EpoxyArt33"
        description="Professional waterproofing in Naples, Fort Myers & SWFL using TREMCO 350/351 membrane system. Balconies, terraces, walkways. Prevent water damage! Free quotes (239) 276-1462"
        keywords="waterproofing Naples FL, TREMCO 350/351, balcony waterproofing Fort Myers, terrace waterproofing SWFL, walkway waterproofing, deck waterproofing Naples, waterproof membrane Florida"
        url="/waterproofing"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "@id": "https://epoxyart33.com/waterproofing#service",
          "name": "Waterproofing Services",
          "description": "Professional waterproofing using TREMCO 350/351 membrane system for balconies, terraces, and walkways",
          "areaServed": "Southwest Florida",
          "serviceType": "Waterproofing"
        }}
        faqData={faqData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/gallery/pool-deck-tropical-1.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Waterproofing</span><br />TREMCO 350/351 System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional waterproofing for balconies, terraces, and walkways. Protect your property from Florida's heavy rains.
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

      {/* What is TREMCO 350/351 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is TREMCO 350/351?</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>TREMCO 350/351</strong> is an industry-leading waterproofing membrane system designed for pedestrian traffic areas. It's a two-component, fluid-applied polyurethane membrane that provides superior protection against water infiltration.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">The TREMCO System Components</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800">TREMCO 350:</p>
                  <p className="text-gray-600">Base coat membrane - provides the primary waterproofing barrier</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">TREMCO 351:</p>
                  <p className="text-gray-600">Top coat with UV protection and wear resistance for traffic areas</p>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              This system is specifically engineered for Florida's challenging climate - handling intense UV exposure, heavy rainfall, humidity, and thermal cycling without cracking, peeling, or losing adhesion.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Waterproofing Applications</h2>
            <p className="text-xl text-gray-600">Ideal for exterior pedestrian areas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Balconies</h3>
                <p className="text-gray-600">
                  Protect balcony surfaces from water penetration. Prevent leaks into units below and structural damage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Terraces</h3>
                <p className="text-gray-600">
                  Full terrace and rooftop deck waterproofing. Beautiful finish that withstands Florida sun and storms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Walkways & Corridors</h3>
                <p className="text-gray-600">
                  Common area walkways, breezeways, and corridors in condos, apartments, and commercial buildings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">TREMCO 350/351 Benefits</h2>
            <p className="text-xl text-gray-600">Why professionals choose TREMCO</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">100% Waterproof</h3>
                <p className="text-gray-600">
                  Seamless membrane creates an impenetrable barrier. No seams, no joints, no weak points where water can enter.
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
                  The 351 topcoat is formulated with UV stabilizers to prevent yellowing and degradation from sun exposure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Traffic Rated</h3>
                <p className="text-gray-600">
                  Designed for pedestrian traffic. Durable enough for daily foot traffic on balconies and walkways.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Timer className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Cure Time</h3>
                <p className="text-gray-600">
                  Quick return to service. Most applications can accept foot traffic within 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Membrane</h3>
                <p className="text-gray-600">
                  Excellent elongation properties. Bridges hairline cracks and accommodates thermal movement without splitting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Industry Proven</h3>
                <p className="text-gray-600">
                  TREMCO is a trusted name in waterproofing. Used on thousands of projects worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">TREMCO 350/351 Performance Data</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Property</th>
                    <th className="px-6 py-4 text-left">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Membrane Type</td>
                    <td className="px-6 py-4">Two-component polyurethane</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Elongation</td>
                    <td className="px-6 py-4">300%+ (excellent crack bridging)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Tensile Strength</td>
                    <td className="px-6 py-4">1,500+ psi</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Abrasion Resistance</td>
                    <td className="px-6 py-4">Excellent - rated for pedestrian traffic</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">UV Stability</td>
                    <td className="px-6 py-4">UV-resistant topcoat (TREMCO 351)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Temperature Range</td>
                    <td className="px-6 py-4">-40°F to 180°F</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Chemical Resistance</td>
                    <td className="px-6 py-4">Resistant to dilute acids, alkalis, salt</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Colors Available</td>
                    <td className="px-6 py-4">Gray, tan, and custom colors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Installation Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Surface Prep</h3>
              <p className="text-gray-600">Clean, grind, and repair substrate. Remove contaminants and loose material.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Primer Application</h3>
              <p className="text-gray-600">Apply TREMCO primer for maximum adhesion to concrete substrate.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">TREMCO 350 Base</h3>
              <p className="text-gray-600">Apply base membrane coat. This provides the primary waterproofing barrier.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">TREMCO 351 Topcoat</h3>
              <p className="text-gray-600">Apply UV-resistant topcoat for traffic wear and sun protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why EpoxyArt33 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EpoxyArt33 for Waterproofing</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">TREMCO Certified</h3>
              <p className="text-gray-600">Professional application of premium TREMCO systems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">15-Year Protection</h3>
              <p className="text-gray-600">Long-lasting waterproofing for Florida weather</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial & Residential</h3>
              <p className="text-gray-600">From condos to commercial buildings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Minimize disruption to your property</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Waterproofing FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about waterproofing in Naples, FL</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas: Naples, Marco Island & SWFL</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {['Naples', 'Marco Island', 'Fort Myers', 'Cape Coral', 'Bonita Springs', 'Estero'].map((city) => (
              <div key={city} className="bg-white rounded-lg p-4 text-center border-2 hover:border-blue-400 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="font-semibold text-gray-800">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Related Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/pool-deck-resurfacing.html" className="group">
              <Card className="border-2 hover:border-blue-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Pool Deck</h3>
                  <p className="text-gray-600">Waterproof + beautiful</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/concrete-repair.html" className="group">
              <Card className="border-2 hover:border-blue-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Concrete Repair</h3>
                  <p className="text-gray-600">Fix before waterproofing</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/commercial-epoxy-flooring-naples-fl.html" className="group">
              <Card className="border-2 hover:border-blue-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Commercial</h3>
                  <p className="text-gray-600">Building solutions</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Water Damage Before It Starts
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Protect your balconies, terraces, and walkways with professional TREMCO waterproofing. Serving Naples, Fort Myers, and all of SWFL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact.html">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                Get Free Assessment
              </Button>
            </Link>
            <Link to="/gallery.html">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Waterproofing;
