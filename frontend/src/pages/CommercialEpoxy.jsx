import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Building2, Store, Trophy, Clock, Shield, Phone, ChevronRight, Award, Factory, Sparkles } from 'lucide-react';

const CommercialEpoxy = () => {
  // FAQ Schema Data
  const faqData = [
    {
      question: "Can you install commercial epoxy floors on weekends to minimize business disruption?",
      answer: "Yes! We offer weekend and after-hours installation for businesses that can't afford downtime. Most commercial projects are completed in 1-2 days, and you can resume light traffic within 24 hours."
    },
    {
      question: "How long does commercial epoxy flooring last?",
      answer: "Commercial epoxy floors typically last 15-20 years with proper installation and maintenance. High-traffic areas may need a topcoat refresh after 7-10 years, but the base system remains intact."
    },
    {
      question: "What commercial epoxy system is best for restaurants?",
      answer: "For restaurants, we recommend quartz or flake systems for dining areas (slip-resistant, decorative) and urethane cement for kitchens (thermal shock and chemical resistant). We'll assess your needs during our free site visit."
    },
    {
      question: "Is commercial epoxy flooring slip-resistant?",
      answer: "Yes, when specified correctly. We can add anti-slip aggregates to the topcoat or use textured systems like quartz or flake broadcast. We always consider safety for your employees and customers."
    },
    {
      question: "How much does commercial epoxy flooring cost in Naples?",
      answer: "Commercial epoxy typically costs $4-12 per sq ft depending on the system, prep work required, and square footage. Larger areas benefit from better pricing. Contact us for a free site assessment and custom quote."
    },
    {
      question: "Do you work with general contractors and property managers?",
      answer: "Absolutely. We work with GCs, property managers, and facility directors throughout SWFL. We provide competitive bids, coordinate schedules, and carry full liability and workers' comp insurance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Commercial Epoxy Flooring Contractors Naples FL | Business Floors"
        description="Commercial epoxy flooring contractors in Naples, FL. Restaurants, retail, warehouses. Minimal downtime, weekend installation. Licensed & insured. Free estimate! ☎️ (239) 276-1462"
        keywords="commercial epoxy flooring Naples FL, commercial floor coating Naples, business epoxy flooring near me, restaurant floor coating Naples, retail epoxy floor Fort Myers, commercial epoxy contractor Naples FL"
        url="/commercial-epoxy-flooring-naples-fl"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Commercial Epoxy Flooring Contractors Naples FL",
          "description": "Professional commercial epoxy flooring for restaurants, retail stores, warehouses and offices in Naples FL. Weekend installation available.",
          "areaServed": "Naples, FL",
          "serviceType": "Commercial Epoxy Flooring"
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
      <div className="bg-blue-800 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> Licensed & Insured • Weekend Installation • Minimal Downtime • Financing Available
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-commercial.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial Epoxy Flooring Contractors in Naples, FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Restaurant, Retail & Warehouse Floor Coating Specialists
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Professional commercial flooring with <strong className="text-white">minimal business disruption</strong>. Weekend installation available.
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

      {/* Why Commercial Epoxy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Naples Businesses Choose Our Commercial Epoxy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your floors impact customer perception, employee safety, and maintenance costs. Invest in flooring that works as hard as you do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Appearance</h3>
                <p className="text-gray-600">
                  Clean, polished floors enhance your brand image and impress customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Minimal Downtime</h3>
                <p className="text-gray-600">
                  Fast installation means less disruption to your business operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
                <p className="text-gray-600">
                  Easy to clean and maintain. Reduces long-term flooring costs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Long-Lasting Durability</h3>
                <p className="text-gray-600">
                  Withstands heavy foot traffic and daily commercial use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Applications</h2>
            <p className="text-xl text-gray-600">We serve all types of commercial facilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <Store className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Retail Stores</h3>
              <p className="text-gray-600">Showrooms, boutiques, malls</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <Building2 className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Office Buildings</h3>
              <p className="text-gray-600">Lobbies, hallways, common areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Restaurants & Cafes</h3>
              <p className="text-gray-600">Dining areas, kitchens, bars</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Auto Dealerships</h3>
              <p className="text-gray-600">Showrooms, service areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Medical Facilities</h3>
              <p className="text-gray-600">Clinics, hospitals, labs</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Fitness Centers</h3>
              <p className="text-gray-600">Gyms, yoga studios, spas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Hotels & Resorts</h3>
              <p className="text-gray-600">Lobbies, ballrooms, pool areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Salons & Spas</h3>
              <p className="text-gray-600">High-end, easy-to-clean surfaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Educational Facilities</h3>
              <p className="text-gray-600">Schools, daycare centers, training rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Commercial Projects */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commercial Installations</h2>
            <p className="text-xl text-gray-600">Professional flooring solutions for businesses across SWFL</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <img 
                src="/images/projects/commercial-kitchen-1.jpg" 
                alt="Commercial kitchen epoxy floor installation in Naples FL - solid color system for restaurants" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 font-semibold">
                Commercial Kitchen - Solid Color System
              </p>
            </div>
            <div>
              <img 
                src="/images/projects/commercial-hallway-1.jpg" 
                alt="Commercial hallway flake epoxy flooring in Fort Myers FL - decorative and durable" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 font-semibold">
                Commercial Hallway - Flake System
              </p>
            </div>
            <div>
              <img 
                src="/images/projects/commercial-kitchen-2.jpg" 
                alt="Restaurant kitchen epoxy flooring Naples FL - food-safe coating for commercial kitchens" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 font-semibold">
                Restaurant Kitchen - Food-Safe Coating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Project Feature */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Project: Restaurant Floor</h2>
            <p className="text-xl text-gray-600">MVB Solid 100% Clear + High Wear Urethane Topcoat</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Technical Info Box */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Technical Specifications</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-gray-800">Base System:</p>
                  <p className="text-gray-600">MVB (Moisture Vapor Barrier) Solid 100%</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Finish:</p>
                  <p className="text-gray-600">Clear Coat</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Topcoat:</p>
                  <p className="text-gray-600">High Wear Urethane</p>
                </div>
              </div>
            </div>

            {/* Restaurant Project Images Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group">
                <img 
                  src="/images/gallery/restaurant-1.jpg" 
                  alt="Restaurant epoxy floor Naples FL - MVB Solid Clear Finish for commercial dining" 
                  className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
                />
                <p className="text-center text-gray-600 mt-3 font-semibold">
                  MVB Solid Clear - Main Dining Area
                </p>
              </div>
              <div className="group">
                <img 
                  src="/images/gallery/restaurant-2.jpg" 
                  alt="Restaurant dining area epoxy flooring Fort Myers FL - UV-resistant urethane finish" 
                  className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
                />
                <p className="text-center text-gray-600 mt-3 font-semibold">
                  High Wear Urethane Finish
                </p>
              </div>
              <div className="group">
                <img 
                  src="/images/gallery/restaurant-3.jpg" 
                  alt="Restaurant clear epoxy floor Southwest Florida - sleek commercial finish" 
                  className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
                />
                <p className="text-center text-gray-600 mt-3 font-semibold">
                  Clear Coat - Service Area
                </p>
              </div>
              <div className="group">
                <img 
                  src="/images/gallery/restaurant-4.jpg" 
                  alt="Restaurant kitchen prep area epoxy coating Naples FL - surface preparation" 
                  className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
                />
                <p className="text-center text-gray-600 mt-3 font-semibold">
                  Kitchen Prep - Before Application
                </p>
              </div>
              <div className="group">
                <img 
                  src="/images/gallery/restaurant-5.jpg" 
                  alt="Restaurant epoxy floor installation process SWFL - commercial flooring contractor" 
                  className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
                />
                <p className="text-center text-gray-600 mt-3 font-semibold">
                  Installation Process
                </p>
              </div>
            </div>

            {/* Benefits for restaurants */}
            <div className="mt-10 grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-gray-800">Food Safe</h4>
                <p className="text-sm text-gray-600">Meets health code requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-gray-800">Easy Clean</h4>
                <p className="text-sm text-gray-600">Seamless, non-porous surface</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-gray-800">Chemical Resistant</h4>
                <p className="text-sm text-gray-600">Resists grease, oils, cleaners</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-gray-800">Durable</h4>
                <p className="text-sm text-gray-600">High Wear Urethane protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Flooring Systems</h2>
            <p className="text-xl text-gray-600">Tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-yellow-200 hover:shadow-2xl transition-all">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-center">Flake System</h3>
                <img 
                  src="/images/samples/targinol-orbit-310.jpg" 
                  alt="Commercial flake epoxy flooring sample Naples FL - Torginol decorative flakes" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Decorative and durable. Perfect for retail, showrooms, and offices. Hundreds of colors available.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Slip-resistant texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Easy maintenance</span>
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
                <h3 className="text-2xl font-bold mb-4 text-center">Metallic System</h3>
                <img 
                  src="/images/projects/metallic-silver-1.jpg" 
                  alt="Metallic epoxy flooring for commercial showroom Naples FL - 3D designer floors" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Stunning 3D effects. Ideal for high-end retail, hotels, and luxury spaces.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Unique visual impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Luxury aesthetics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>One-of-a-kind designs</span>
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
                <h3 className="text-2xl font-bold mb-4 text-center">Quartz System</h3>
                <img 
                  src="/images/projects/hero-quartz.jpg" 
                  alt="Commercial quartz epoxy flooring Fort Myers FL - heavy-duty industrial floors" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Heavy-duty strength. Best for high-traffic commercial spaces and warehouses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maximum durability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Heavy traffic ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Chemical resistant</span>
                  </li>
                </ul>
                <Link to="/quartz-system">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Epoxy FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about commercial floor coating</p>
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

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Related Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/urethane-cement-flooring-naples-fl.html" className="group">
              <Card className="border-2 hover:border-blue-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Factory className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Urethane Cement</h3>
                  <p className="text-gray-600">For commercial kitchens and food processing</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quartz-pool-deck-coatings-naples-fl.html" className="group">
              <Card className="border-2 hover:border-blue-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Quartz System</h3>
                  <p className="text-gray-600">Heavy-duty industrial flooring</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/metallic-epoxy-floors-naples-fl.html" className="group">
              <Card className="border-2 hover:border-blue-400 hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Metallic Epoxy</h3>
                  <p className="text-gray-600">Luxury floors for showrooms and retail</p>
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
            Elevate Your Commercial Space
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Free site visit and quote. Serving businesses throughout Naples, Fort Myers, and SWFL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Request Free Quote
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                View Commercial Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialEpoxy;