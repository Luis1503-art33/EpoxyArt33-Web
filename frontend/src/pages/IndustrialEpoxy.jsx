import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Factory, Zap, Shield, Wrench, Clock, Award } from 'lucide-react';

const IndustrialEpoxy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Industrial Epoxy Flooring Naples FL | Warehouse Floors SWFL | EpoxyArt33"
        description="Heavy-duty industrial epoxy flooring in Naples, Fort Myers & SWFL. Warehouses, manufacturing, factories. Chemical resistant, 20+ year lifespan. Free assessment! (239) 276-1462"
        keywords="industrial epoxy flooring Naples, warehouse floor coating Fort Myers, factory epoxy floor SWFL, heavy duty epoxy floor, manufacturing floor coating, industrial floor repair Naples, chemical resistant flooring"
        url="/industrial-epoxy"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Industrial Epoxy Flooring",
          "description": "Heavy-duty industrial epoxy flooring for warehouses and manufacturing facilities",
          "provider": { "@type": "LocalBusiness", "name": "EpoxyArt33" },
          "areaServed": "Southwest Florida"
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-quartz.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Industrial Epoxy</span><br />Heavy-Duty Flooring
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Engineered for warehouses, manufacturing, and industrial facilities. Maximum strength and chemical resistance.
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

      {/* Industrial Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Industrial Environments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your facility operates 24/7, you need flooring that can keep up. Our industrial epoxy systems are engineered to withstand the toughest conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Heavy Machinery Ready</h3>
                <p className="text-gray-600">
                  Handles forklifts, pallet jacks, heavy equipment, and constant traffic without cracking or wearing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Extreme Chemical Resistance</h3>
                <p className="text-gray-600">
                  Withstands acids, solvents, oils, hydraulic fluids, and industrial chemicals without degradation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Impact Resistant</h3>
                <p className="text-gray-600">
                  Absorbs heavy impacts from dropped tools, materials, and equipment without chipping or breaking.
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
                  Minimize downtime with efficient installation. Many projects completed over weekends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">20+ Year Service Life</h3>
                <p className="text-gray-600">
                  Long-lasting investment with minimal maintenance. Reduces long-term flooring costs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
                <p className="text-gray-600">
                  Easy to clean and maintain. No waxing, sealing, or special treatments required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industrial Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industrial Facility Types</h2>
            <p className="text-xl text-gray-600">We serve all types of industrial operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Manufacturing Plants',
              'Warehouses & Distribution Centers',
              'Food Processing Facilities',
              'Chemical Plants',
              'Automotive Facilities',
              'Pharmaceutical Manufacturing',
              'Airplane Hangars',
              'Cold Storage Facilities',
              'Assembly Lines',
              'Machine Shops',
              'Power Plants',
              'Water Treatment Plants'
            ].map((facility) => (
              <div key={facility} className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
                <Check className="w-6 h-6 text-yellow-600 mb-2" />
                <h3 className="text-lg font-bold">{facility}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recommended: Quartz System</h2>
            <p className="text-xl text-gray-600">The ultimate industrial flooring solution</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-400">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Quartz Epoxy System</h3>
                    <p className="text-gray-700 mb-6">
                      Our Quartz system combines high-performance epoxy with colored quartz aggregates for maximum durability. This is the gold standard for industrial flooring.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>1/4 inch to 3/8 inch thickness</strong> - Heavy-duty protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Quartz aggregates</strong> - Harder than concrete</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Chemical resistant</strong> - Acids, solvents, oils</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Custom colors</strong> - Match your branding</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link to="/quartz-system">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                          Learn More About Quartz System
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1565515235553-1f3c3fd0e4e3?w=600" 
                      alt="Industrial Quartz Floor"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Safety Features</h2>
            <p className="text-xl text-gray-600">Protect your workforce</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3">Anti-Slip Texture</h3>
                <p className="text-gray-600">
                  Add slip-resistant aggregates for improved traction in wet or oily conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3">Line Striping</h3>
                <p className="text-gray-600">
                  Safety lines, traffic lanes, and designated work areas integrated into the floor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3">ESD Options</h3>
                <p className="text-gray-600">
                  Electrostatic dissipative flooring for electronics manufacturing and sensitive operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Upgrade Your Facility?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Free facility assessment and custom quote. Serving industrial facilities throughout SWFL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Request Free Assessment
              </Button>
            </Link>
            <Link to="/quartz-system">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                View Quartz System Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrialEpoxy;
