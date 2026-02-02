import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Star, Shield, Phone, MapPin, Home, Building2, Droplets, Sparkles, Factory, ChevronRight, BadgeCheck, Anchor } from 'lucide-react';

const EpoxyFlooringMarcoIsland = () => {
  // FAQ Schema Data for Marco Island
  const faqData = [
    {
      question: "Why choose EpoxyArt33 for Marco Island luxury homes?",
      answer: "We specialize in high-end finishes for Marco Island estates. Our premium metallic and flake systems complement luxury waterfront homes. We understand island living demands - salt air, humidity, and hurricane resistance."
    },
    {
      question: "Is epoxy flooring good for Marco Island salt air?",
      answer: "Yes! We use specialized salt-resistant coatings and UV-stable polyaspartic topcoats designed for barrier island conditions. Our systems protect against corrosion from constant salt air exposure."
    },
    {
      question: "How much does epoxy flooring cost on Marco Island?",
      answer: "Marco Island epoxy flooring typically costs $6-18 per sq ft depending on the system. Our luxury metallic finishes and waterproofing services are popular choices for island estates."
    },
    {
      question: "Do you offer waterproofing for Marco Island balconies?",
      answer: "Absolutely! TREMCO 350/351 waterproofing is perfect for Marco Island balconies, terraces, and walkways. Critical for protecting the living space below from water damage."
    },
    {
      question: "Can you coat Marco Island pool decks?",
      answer: "Yes! Pool deck resurfacing is one of our specialties for Marco Island. We use slip-resistant, UV-stable coatings that handle constant sun and water exposure. Perfect for waterfront properties."
    },
    {
      question: "How long does installation take on Marco Island?",
      answer: "Most Marco Island projects are completed in 1-2 days. We understand island logistics and plan accordingly. Pool decks, garages, and balconies typically take 1 day each."
    }
  ];

  const services = [
    { title: 'Pool Deck Resurfacing', description: 'Slip-resistant coatings perfect for Marco Island waterfront homes.', link: '/pool-deck-resurfacing.html', icon: Droplets },
    { title: 'Garage Floor Coating', description: 'Transform your Marco Island garage with premium epoxy.', link: '/garage-floor-coating.html', icon: Home },
    { title: 'Metallic Epoxy', description: 'Luxury 3D metallic effects for Marco Island estates.', link: '/metallic-epoxy-floors-naples-fl.html', icon: Sparkles },
    { title: 'Waterproofing', description: 'TREMCO 350/351 for balconies and terraces.', link: '/waterproofing.html', icon: Shield },
    { title: 'Commercial Epoxy', description: 'Durable flooring for Marco Island businesses.', link: '/commercial-epoxy-flooring-naples-fl.html', icon: Building2 },
    { title: 'Driveway Resurfacing', description: 'Decorative patterns for Marco Island driveways.', link: '/driveway-resurfacing.html', icon: Factory }
  ];

  const marcoAreas = ['Hideaway Beach', 'Tigertail Beach', 'South Beach', 'Residents Beach', 'Marco Island Marriott', 'Olde Marco', 'Marco Town Center', 'Key Marco', 'Goodland', 'Isle of Capri'];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Epoxy Flooring Marco Island FL | Pool Deck & Garage Coating | EpoxyArt33"
        description="Marco Island's premier epoxy flooring contractor. Pool decks, garages, waterproofing for luxury island homes. OSHA certified, licensed & insured. ☎️ (239) 276-1462"
        keywords="epoxy flooring marco island, epoxy flooring marco island fl, pool deck resurfacing marco island, garage floor coating marco island, waterproofing marco island, luxury epoxy flooring, epoxy contractor marco island"
        url="/epoxy-flooring-marco-island"
      />
      <SchemaMarkup 
        data={{ 
          "@type": "Service", 
          "@id": "https://epoxyart33.com/epoxy-flooring-marco-island#service", 
          "name": "Epoxy Flooring Marco Island FL", 
          "description": "Professional epoxy flooring for Marco Island luxury homes", 
          "areaServed": { "@type": "City", "name": "Marco Island", "containedInPlace": { "@type": "State", "name": "Florida" } }, 
          "serviceType": "Epoxy Flooring Installation" 
        }}
        faqData={faqData}
      />
      <Navbar />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('/images/gallery/pool-deck-tropical-2.jpg')` }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Anchor className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">Serving Marco Island, FL & Collier County</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Epoxy Flooring Marco Island FL - Luxury Island Home Specialists
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Marco Island's trusted epoxy contractor. Premium pool deck, garage, and waterproofing solutions for island living.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link to="/contact.html"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">Get Free Marco Island Quote</Button></Link>
              <a href="tel:239-276-1462"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8"><Phone className="w-5 h-5 mr-2" />(239) 276-1462</Button></a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><BadgeCheck className="w-5 h-5 text-yellow-400" /><span>OSHA 30 Certified</span></div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Shield className="w-5 h-5 text-green-400" /><span>Licensed & Insured</span></div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="w-5 h-5 text-yellow-400" /><span>Luxury Home Specialists</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Marco Island */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Marco Island Flooring Specialists</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Marco Island's luxury homes demand premium flooring solutions. As a barrier island, properties here face unique challenges - constant salt air exposure, high humidity, and the need for hurricane-resistant finishes. Our coatings are specifically designed for island living.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Island-Specific Solutions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-600 mt-0.5" /><span>Salt air & corrosion resistant coatings</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-600 mt-0.5" /><span>Waterfront pool deck specialists</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-600 mt-0.5" /><span>Hurricane-rated installations</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-600 mt-0.5" /><span>UV-stable luxury finishes</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marco Island Credentials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-0.5" /><span>OSHA 30-Hour Certified</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-0.5" /><span>Fully Licensed & Insured</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-0.5" /><span>Luxury home experience</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-0.5" /><span>Premium materials only</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Epoxy Services for Marco Island Homes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl hover:border-blue-400 transition-all group">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4"><service.icon className="w-7 h-7 text-blue-600" /></div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marco Island Areas We Serve</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {marcoAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-600" /><span className="text-gray-700 text-sm">{area}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Also Serving Nearby</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/epoxy-flooring-naples.html" className="bg-white px-4 py-2 rounded-full border border-blue-300 hover:bg-blue-100 text-gray-700 font-medium">Naples</Link>
                <Link to="/epoxy-flooring-bonita-springs.html" className="bg-white px-4 py-2 rounded-full border border-blue-300 hover:bg-blue-100 text-gray-700 font-medium">Bonita Springs</Link>
                <Link to="/epoxy-flooring-estero.html" className="bg-white px-4 py-2 rounded-full border border-blue-300 hover:bg-blue-100 text-gray-700 font-medium">Estero</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Marco Island Home?</h2>
          <p className="text-xl text-blue-100 mb-8">Free estimate for Marco Island properties.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact.html"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">Get Free Quote</Button></Link>
            <a href="tel:239-276-1462"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8"><Phone className="w-5 h-5 mr-2" />(239) 276-1462</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpoxyFlooringMarcoIsland;
