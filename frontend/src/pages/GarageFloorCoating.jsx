import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Star, Shield, Clock, Palette, Sparkles, Phone, MapPin, Award, ChevronRight } from 'lucide-react';

const GarageFloorCoating = () => {
  // FAQ Schema Data
  const faqData = [
    {
      question: "How long does garage floor coating take to install in Naples?",
      answer: "Most residential garage floor coatings are completed in just 1 day. You can walk on the floor in 24 hours and park your car in 48-72 hours. Full cure takes 7 days."
    },
    {
      question: "Will epoxy garage floor coating peel from hot tires?",
      answer: "Not with our system. We use polyaspartic topcoat specifically designed to resist hot tire pickup. Unlike big-box store kits, our commercial-grade coating handles hot tires without peeling."
    },
    {
      question: "How long does a garage floor coating last in Florida?",
      answer: "Our garage floor coatings last 15-20+ years in Naples and SWFL. The polyaspartic topcoat is UV-stable and won't yellow from Florida sun exposure."
    },
    {
      question: "Do you offer financing for garage floor coating?",
      answer: "Yes! We offer financing options to make your garage floor transformation affordable. Ask about our 0% interest payment plans during your free estimate."
    },
    {
      question: "What preparation is needed for garage floor coating?",
      answer: "We handle all prep work. This includes diamond grinding to CSP 2-3 profile, crack repair, and MVB moisture barrier application—critical steps that DIY kits skip."
    },
    {
      question: "Can you coat a garage floor with moisture problems?",
      answer: "Yes. Our MVB (Moisture Vapor Barrier) primer blocks up to 25 lbs of moisture vapor transmission. We test moisture levels and use appropriate primers for Florida's humid climate."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Garage Floor Coating Naples FL | Epoxy Floor Installers Near Me"
        description="Professional garage floor coating in Naples FL. 1-day installation, 15-year warranty. No hot tire pickup. Moisture barrier included. Free estimate! ☎️ (239) 276-1462"
        keywords="garage floor coating Naples FL, epoxy garage floor Naples, garage floor epoxy near me, garage floor coating contractors Naples, residential epoxy flooring Naples FL, garage floor installers near me, epoxy floor coating Fort Myers"
        url="/garage-floor-coating"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Garage Floor Coating Naples FL",
          "description": "Professional garage floor epoxy coating with 1-day installation in Naples, FL. Includes diamond grinding, moisture barrier, and UV-stable polyaspartic topcoat.",
          "areaServed": "Naples, FL",
          "serviceType": "Garage Floor Epoxy Coating"
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

      {/* Trust Bar */}
      <div className="bg-green-700 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> 15-Year Warranty • No Hot Tire Pickup • 1-Day Installation • Financing Available
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-garage-flake.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Garage Floor Coating Naples FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Professional Epoxy Floor Installers Near You
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Transform your garage with professional-grade epoxy. <strong className="text-white">1-day installation. 15-year durability. Zero hot tire pickup.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Get Free Estimate
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

      {/* Our Process Section - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a rigorous 5-step process to ensure your garage floor coating lasts 15+ years.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-lg mb-2">Diamond Grinding</h3>
              <p className="text-gray-600 text-sm">CSP 2-3 profile with industrial grinders. Removes contaminants & opens pores.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-lg mb-2">Crack Repair</h3>
              <p className="text-gray-600 text-sm">Fill all cracks, spalls & divots with epoxy filler for a smooth surface.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-lg mb-2">Moisture Barrier</h3>
              <p className="text-gray-600 text-sm">MVB primer blocks moisture vapor up to 25 lbs. Prevents delamination.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold text-lg mb-2">100% Solids Epoxy</h3>
              <p className="text-gray-600 text-sm">Chemtec 100% solids epoxy base. No water, no solvents. Maximum durability.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">5</div>
              <h3 className="font-bold text-lg mb-2">Polyaspartic Top</h3>
              <p className="text-gray-600 text-sm">UV-stable clear coat. Won't yellow. Resists hot tire pickup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Naples Homeowners Choose Our Garage Floor Coating</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not all garage floor coatings are equal. Here's what sets professional epoxy apart from DIY kits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Hot Tire Pickup</h3>
                <p className="text-gray-600">
                  Our polyaspartic topcoat is specifically formulated to resist hot tire marks. Your floor stays pristine even in Florida's heat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">UV-Stable (Won't Yellow)</h3>
                <p className="text-gray-600">
                  Unlike cheap epoxy that yellows in Florida sun, our polyaspartic finish stays crystal clear for 15+ years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Installation</h3>
                <p className="text-gray-600">
                  Most garage floors completed in 1 day. Walk on it within 24 hours. Drive on it in 48-72 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Colors</h3>
                <p className="text-gray-600">
                  Choose from hundreds of Torginol flake colors and metallic finishes. Make it uniquely yours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Increases Home Value</h3>
                <p className="text-gray-600">
                  A professional garage floor adds curb appeal and resale value to your home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Long-Lasting Durability</h3>
                <p className="text-gray-600">
                  Industrial-grade epoxy lasts 15+ years with proper maintenance. Built to withstand SWFL heat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Garage Floor Systems</h2>
            <p className="text-xl text-gray-600">Choose the perfect finish for your garage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-yellow-200 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Flake System</h3>
                  <p className="text-gray-600">Most Popular for Garages</p>
                </div>
                <img 
                  src="/images/projects/garage-flake-1.jpg" 
                  alt="Flake System Garage" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Decorative Torginol flakes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Slip-resistant texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Hides concrete imperfections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Hundreds of color options</span>
                  </li>
                </ul>
                <Link to="/flake-system">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Metallic System</h3>
                  <p className="text-gray-600">Luxury 3D Effects</p>
                </div>
                <img 
                  src="/images/projects/metallic-silver-1.jpg" 
                  alt="Metallic System Garage" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stunning 3D visual effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Unique metallic pigments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>High-end showroom look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>One-of-a-kind patterns</span>
                  </li>
                </ul>
                <Link to="/metallic-epoxy">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">Solid Color</h3>
                  <p className="text-gray-600">Clean & Simple</p>
                </div>
                <img 
                  src="/images/projects/garage-solid-color.jpg" 
                  alt="Solid Color System Garage" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Budget-friendly option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sleek, uniform appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom color matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All the durability of epoxy</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600">Professional results, guaranteed</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Grind & Repair</h3>
              <p className="text-gray-600">Diamond grind concrete and repair any cracks or damage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Primer Application</h3>
              <p className="text-gray-600">MVB primer for humidity control and maximum adhesion</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Epoxy & Flakes</h3>
              <p className="text-gray-600">100% solid epoxy base with your chosen Torginol flake color</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Polyaspartic Topcoat</h3>
              <p className="text-gray-600">UV-resistant, high-gloss Polyaspartic seal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Transform Your Garage?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Get a free quote today. Serving Naples, Fort Myers, Cape Coral, and all of SWFL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Request Free Quote
              </Button>
            </Link>
            <Link to="/showroom">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                View Color Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GarageFloorCoating;