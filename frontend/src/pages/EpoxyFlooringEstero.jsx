import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Star, Shield, Phone, MapPin, Home, Building2, Droplets, Sparkles, Factory, ChevronRight, BadgeCheck } from 'lucide-react';

const EpoxyFlooringEstero = () => {
  const services = [
    { title: 'Garage Floor Coating', description: 'Transform your Estero garage with premium epoxy coatings.', link: '/garage-floor-coating.html', icon: Home },
    { title: 'Pool Deck Resurfacing', description: 'Slip-resistant coatings for Estero pool areas.', link: '/pool-deck-resurfacing.html', icon: Droplets },
    { title: 'Metallic Epoxy', description: 'Stunning 3D metallic effects for Estero homes.', link: '/metallic-epoxy.html', icon: Sparkles },
    { title: 'Commercial Epoxy', description: 'Durable flooring for Estero businesses at Coconut Point.', link: '/commercial-epoxy.html', icon: Building2 },
    { title: 'Driveway Resurfacing', description: 'Decorative driveway coatings for Estero properties.', link: '/driveway-resurfacing.html', icon: Factory },
    { title: 'Concrete Repair', description: 'Fix cracks and damage before coating.', link: '/concrete-repair.html', icon: Shield }
  ];

  const esteroAreas = ['Coconut Point', 'Miromar Lakes', 'The Brooks', 'Grandezza', 'Rapallo', 'Bella Terra', 'Fountain Lakes', 'Stoneybrook', 'Estero Oaks', 'West Bay', 'Corkscrew', 'Via Coconut'];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Epoxy Flooring Estero FL | Garage & Pool Deck Coating | EpoxyArt33"
        description="Estero's premier epoxy flooring contractor. Serving Miromar Lakes, The Brooks, Coconut Point & more. OSHA certified, licensed & insured. ☎️ (239) 276-1462"
        keywords="epoxy flooring estero, epoxy flooring estero fl, garage floor coating estero, pool deck resurfacing estero, metallic epoxy estero, epoxy contractor estero, miromar lakes flooring"
        url="/epoxy-flooring-estero"
      />
      <SchemaMarkup data={{ "@type": "Service", "@id": "https://epoxyart33.com/epoxy-flooring-estero#service", "name": "Epoxy Flooring Estero FL", "description": "Professional epoxy flooring in Estero", "areaServed": { "@type": "City", "name": "Estero", "containedInPlace": { "@type": "State", "name": "Florida" } }, "serviceType": "Epoxy Flooring Installation" }} />
      <Navbar />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('/images/gallery/restaurant-1.jpg')` }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">Serving Estero, FL & Lee County</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Epoxy Flooring Estero FL - Premium Installation & Coating
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Estero's trusted epoxy flooring contractor. Serving Miromar Lakes, The Brooks, Coconut Point, and all communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link to="/contact.html"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">Get Free Estero Quote</Button></Link>
              <a href="tel:239-276-1462"><Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8"><Phone className="w-5 h-5 mr-2" />(239) 276-1462</Button></a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><BadgeCheck className="w-5 h-5 text-yellow-400" /><span>OSHA 30 Certified</span></div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Shield className="w-5 h-5 text-green-400" /><span>Licensed & Insured</span></div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="w-5 h-5 text-yellow-400" /><span>500+ SWFL Projects</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Estero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Estero Chooses EpoxyArt33</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Estero's premier communities like Miromar Lakes, The Brooks, and Grandezza deserve premium flooring solutions. From lakefront estates to Coconut Point commercial spaces, we deliver coatings built for Florida's demanding environment.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estero Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-yellow-600 mt-0.5" /><span>Lakefront property specialists</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-yellow-600 mt-0.5" /><span>Golf community experience</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-yellow-600 mt-0.5" /><span>HOA-compliant finishes</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-yellow-600 mt-0.5" /><span>Commercial/retail expertise</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Credentials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-0.5" /><span>OSHA 30-Hour Certified</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-0.5" /><span>Fully Licensed & Insured</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 mt-0.5" /><span>SAM.GOV Registered</span></li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Epoxy Services in Estero</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl hover:border-yellow-400 transition-all group">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"><service.icon className="w-7 h-7 text-yellow-600" /></div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-yellow-600 font-semibold">Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Estero Communities We Serve</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {esteroAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg">
                  <MapPin className="w-4 h-4 text-yellow-600" /><span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Also Serving</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/epoxy-flooring-bonita-springs.html" className="bg-white px-4 py-2 rounded-full border border-yellow-300 hover:bg-yellow-100 text-gray-700 font-medium">Bonita Springs</Link>
                <Link to="/epoxy-flooring-fort-myers.html" className="bg-white px-4 py-2 rounded-full border border-yellow-300 hover:bg-yellow-100 text-gray-700 font-medium">Fort Myers</Link>
                <Link to="/epoxy-flooring-naples.html" className="bg-white px-4 py-2 rounded-full border border-yellow-300 hover:bg-yellow-100 text-gray-700 font-medium">Naples</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Transform Your Estero Property</h2>
          <p className="text-xl text-yellow-900 mb-8">Free estimate - no obligation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact.html"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">Get Free Quote</Button></Link>
            <a href="tel:239-276-1462"><Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8"><Phone className="w-5 h-5 mr-2" />(239) 276-1462</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpoxyFlooringEstero;
