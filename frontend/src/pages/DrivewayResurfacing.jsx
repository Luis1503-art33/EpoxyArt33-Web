import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Truck, Sun, Shield, Home, Sparkles, MapPin, Phone, Award, Clock, Droplets } from 'lucide-react';

const DrivewayResurfacing = () => {
  // FAQ Schema Data
  const faqData = [
    {
      question: "How long does driveway resurfacing last in Florida?",
      answer: "Our UV-stable polyaspartic driveway coatings last 10-15+ years in Naples and SWFL. The formula is designed to resist Florida sun, rain, and tire traffic without yellowing or peeling."
    },
    {
      question: "Can you resurface a cracked driveway?",
      answer: "Yes. We repair cracks, fill joints, and level uneven areas before applying the coating. Minor cracks are invisible after resurfacing. For severely damaged driveways, we may recommend partial replacement."
    },
    {
      question: "What patterns and colors are available for driveway resurfacing?",
      answer: "We offer solid colors, decorative flake patterns, and faux tile/stone designs. Popular choices include tan, gray, terracotta, and custom blends that complement your home's exterior."
    },
    {
      question: "How long does driveway resurfacing take?",
      answer: "Most residential driveways are completed in 1-2 days. You can walk on the surface in 24 hours and drive on it in 48-72 hours. Full cure takes 7 days."
    },
    {
      question: "Is driveway resurfacing slip-resistant?",
      answer: "Yes. We can add anti-slip texture to the topcoat for safety, especially important for sloped driveways. The texture provides traction even when wet from Florida rain."
    },
    {
      question: "How much does driveway resurfacing cost in Naples?",
      answer: "Driveway resurfacing typically costs $6-12 per sq ft depending on size, condition, and decorative pattern chosen. Contact us for a free on-site estimate."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Driveway Resurfacing Naples FL | Epoxy Driveway Coating SWFL | EpoxyArt33"
        description="Professional driveway resurfacing in Naples, Fort Myers & SWFL. Decorative diamond patterns, slip-resistant & UV-stable finishes. Transform your driveway! Free quotes (239) 276-1462"
        keywords="driveway resurfacing Naples, epoxy driveway Fort Myers, driveway coating SWFL, decorative driveway Naples, concrete driveway resurfacing, driveway repair Marco Island, driveway contractor Naples FL"
        url="/driveway-resurfacing"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "@id": "https://epoxyart33.com/driveway-resurfacing#service",
          "name": "Driveway Resurfacing",
          "description": "Professional driveway resurfacing with decorative patterns and UV-resistant coating",
          "areaServed": "Southwest Florida",
          "serviceType": "Driveway Resurfacing"
        }}
      />
      {/* FAQ Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/gallery/driveway-1.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Driveway Resurfacing</span><br />Make a Lasting First Impression
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your driveway with decorative patterns, stunning finishes, and long-lasting protection against Florida's harsh elements.
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

      {/* Why Choose Our System for Driveways */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Our Driveway System Stands Out</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Your driveway is the first thing guests and visitors see. A cracked, stained, or faded driveway detracts from your home's curb appeal. Our specialized driveway resurfacing system uses <strong>Polyaspartic coating with decorative flake patterns</strong> to create stunning diamond designs that last for years.
            </p>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Diamond Pattern Difference</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our signature diamond pattern technique creates a high-end, elegant look that transforms ordinary concrete into a work of art. Using precision tape work and multiple coats, we achieve crisp lines and alternating tones that add dimension and depth to your driveway.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Unlike standard concrete sealers that wear off quickly, our system is engineered to withstand vehicle traffic, hot tires, oil spills, UV exposure, and Florida's heavy rains - keeping your driveway looking pristine year after year.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Driveway Resurfacing Benefits</h2>
            <p className="text-xl text-gray-600">Beauty, durability, and value</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Increased Curb Appeal</h3>
                <p className="text-gray-600">
                  A beautifully resurfaced driveway dramatically improves your home's appearance and increases property value.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vehicle-Grade Durability</h3>
                <p className="text-gray-600">
                  Engineered to handle daily vehicle traffic, hot tires, and heavy loads without peeling or wearing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">UV & Weather Resistant</h3>
                <p className="text-gray-600">
                  Our Polyaspartic topcoat won't yellow, fade, or chalk under Florida's intense sun and weather.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Stain Resistant</h3>
                <p className="text-gray-600">
                  Sealed surface resists oil, grease, rust stains, and tire marks. Easy to clean with just soap and water.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Crack & Spall Repair</h3>
                <p className="text-gray-600">
                  We repair existing cracks, spalls, and damage before coating, giving you a like-new surface.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Designs</h3>
                <p className="text-gray-600">
                  Choose from diamond patterns, borders, multiple colors, and custom designs to match your home's style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Driveway Projects */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Driveway Installations</h2>
            <p className="text-xl text-gray-600">Real projects in Southwest Florida</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <img 
                src="/images/gallery/driveway-1.jpg" 
                alt="Driveway with Diamond Pattern - Full View" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Diamond pattern driveway with decorative Flake System finish
              </p>
            </div>
            <div>
              <img 
                src="/images/gallery/driveway-2.jpg" 
                alt="Driveway Resurfacing In Progress" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Our team at work - precision taping for perfect diamond patterns
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <img 
                src="/images/gallery/driveway-3.jpg" 
                alt="Completed Driveway - Angle View" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Stunning results - see the EpoxyArt33 truck in action
              </p>
            </div>
            <div>
              <img 
                src="/images/gallery/driveway-4.jpg" 
                alt="Driveway Before Application" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Surface preparation - diamond tape pattern before coating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Systems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recommended Driveway Systems</h2>
            <p className="text-xl text-gray-600">Designed specifically for exterior concrete</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-amber-400 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Decorative Flake with Diamond Pattern</h3>
                <img 
                  src="/images/gallery/driveway-1.jpg" 
                  alt="Driveway Flake System" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Signature diamond pattern design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Slip-resistant texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Torginol premium flakes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>UV-resistant Polyaspartic topcoat</span>
                  </li>
                </ul>
                <Link to="/flake-system.html">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold">
                    Learn More About Flake System
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Solid Color with Patterns</h3>
                  <p className="text-gray-600">Clean & Modern Option</p>
                </div>
                <img 
                  src="/images/projects/garage-solid-color.jpg" 
                  alt="Solid Color Driveway" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sleek, uniform appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multiple color options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Diamond or border patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Easy maintenance</span>
                  </li>
                </ul>
                <Link to="/garage-floor-coating.html">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold">
                    Learn More About Solid Color
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Driveway Resurfacing Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Grind & Repair</h3>
              <p className="text-gray-600">Diamond grind concrete surface and repair all cracks, spalls, and damage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Pattern Tape</h3>
              <p className="text-gray-600">Apply precision masking tape for diamond pattern or custom design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Polyaspartic + Flake</h3>
              <p className="text-gray-600">Apply tinted Polyaspartic base with full broadcast of decorative flakes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Topcoat</h3>
              <p className="text-gray-600">UV-resistant Polyaspartic clear coat for lasting protection and shine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why EpoxyArt33 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EpoxyArt33 for Your Driveway</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">UV-Stable Formula</h3>
              <p className="text-gray-600">Won't yellow or fade from Florida sun</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">10-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive coverage on materials and labor</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">1-2 Day Install</h3>
              <p className="text-gray-600">Minimal disruption to your home</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Curb Appeal</h3>
              <p className="text-gray-600">Increase your property value</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Driveway Resurfacing FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about driveway coating in Naples, FL</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-amber-400 transition-colors">
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
              <div key={city} className="bg-white rounded-lg p-4 text-center border-2 hover:border-amber-400 transition-colors">
                <MapPin className="w-6 h-6 text-amber-600 mx-auto mb-2" />
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
              <Card className="border-2 hover:border-amber-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Droplets className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600">Pool Deck</h3>
                  <p className="text-gray-600">Match your driveway</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/garage-flake-floors-naples-fl.html" className="group">
              <Card className="border-2 hover:border-amber-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600">Garage Floors</h3>
                  <p className="text-gray-600">Complete your exterior</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/concrete-repair.html" className="group">
              <Card className="border-2 hover:border-amber-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600">Concrete Repair</h3>
                  <p className="text-gray-600">Fix before coating</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Driveway Today
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Serving Naples, Fort Myers, Cape Coral, Marco Island, and all of SWFL. Fast installation, stunning results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact.html">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-amber-600 font-bold text-lg px-8">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/gallery.html">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold text-lg px-8">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DrivewayResurfacing;
