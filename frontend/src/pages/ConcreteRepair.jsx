import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Wrench, Shield, Clock, Award, Users, Star } from 'lucide-react';

const ConcreteRepair = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Concrete Repair Naples FL | Crack Repair & Restoration SWFL | EpoxyArt33"
        description="Professional concrete repair in Naples, Fort Myers & SWFL. Fix cracks, spalling, uneven slabs before epoxy coating. Complete repair + epoxy packages. Free assessment! (239) 276-1462"
        keywords="concrete repair Naples, crack repair Fort Myers, concrete restoration SWFL, spalling repair, concrete leveling Cape Coral, garage floor repair Naples, concrete crack filling"
        url="/concrete-repair"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Concrete Repair & Restoration",
          "description": "Professional concrete repair services including crack filling, spalling repair, and surface restoration",
          "provider": { "@type": "LocalBusiness", "name": "EpoxyArt33" },
          "areaServed": "Southwest Florida"
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Concrete Repair</span><br />& Restoration
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Fix cracks, spalling, and damaged concrete before applying epoxy. Professional repair services in SWFL.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Get Free Assessment
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

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Concrete Problems We Fix</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Cracks & Fissures</h3>
                <p className="text-gray-600">
                  Hairline cracks to major structural cracks. We assess and repair all crack types.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Spalling & Flaking</h3>
                <p className="text-gray-600">
                  Surface deterioration where concrete breaks away in patches or layers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Uneven Settlement</h3>
                <p className="text-gray-600">
                  Sunken or uneven slabs that create trip hazards and drainage issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Joint Damage</h3>
                <p className="text-gray-600">
                  Control joints and expansion joints that have deteriorated or failed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Surface Pitting</h3>
                <p className="text-gray-600">
                  Small holes and indentations caused by age, weather, or poor finishing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Oil & Chemical Damage</h3>
                <p className="text-gray-600">
                  Concrete degradation from prolonged exposure to oils, acids, or chemicals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Before/After Transformation */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Damaged to <span className="text-yellow-600">Flawless</span>
            </h2>
            <p className="text-xl text-gray-600">See the complete transformation - repair + epoxy coating</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold z-10">
                BEFORE - Crack Repair
              </div>
              <img 
                src="/images/projects/repair-before.jpg" 
                alt="Garage floor with cracks marked for repair" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Multiple cracks and joints marked and prepared for professional repair
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold z-10">
                AFTER - Repaired + Coated
              </div>
              <img 
                src="/images/projects/repair-after.jpg" 
                alt="Repaired floor with Flake System coating" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                All cracks repaired and sealed with Torginol Flake System
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold z-10">
                BEFORE
              </div>
              <img 
                src="/images/projects/garage-before.jpg" 
                alt="Damaged concrete garage floor before repair" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Stained, damaged concrete with multiple issues
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold z-10">
                AFTER
              </div>
              <img 
                src="/images/projects/garage-after.jpg" 
                alt="Beautiful epoxy floor after repair and coating" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Professionally repaired and coated with Flake System epoxy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Repair Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Inspection</h3>
              <p className="text-gray-600">Thorough assessment of all damage and underlying causes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Grind & Prep</h3>
              <p className="text-gray-600">Diamond grind and prep damaged areas for optimal repair bonding</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Repair</h3>
              <p className="text-gray-600">Apply professional-grade repair materials and techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Finish</h3>
              <p className="text-gray-600">Smooth, level, and prepare surface for epoxy coating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Repair Before Epoxy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Repair Before Epoxy Coating?</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Applying epoxy over damaged concrete is like painting over rust—it looks good temporarily, but the underlying problem will return. Professional concrete repair ensures your epoxy floor lasts for decades.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Prevents Epoxy Failure</h3>
                  <p className="text-gray-600">Cracks will continue to spread under epoxy, causing delamination</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Structural Integrity</h3>
                  <p className="text-gray-600">Repairs restore strength to damaged concrete slabs</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Better Adhesion</h3>
                  <p className="text-gray-600">Repaired concrete provides a solid, stable base for epoxy</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Long-Term Savings</h3>
                  <p className="text-gray-600">Proper repairs prevent costly failures and re-work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair + Epoxy Package */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-400">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <span className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full">COMPLETE SOLUTION</span>
                </div>
                <h2 className="text-3xl font-bold text-center mb-4">Repair + Epoxy Package</h2>
                <p className="text-center text-gray-700 mb-8 text-lg">
                  Get both concrete repair and epoxy coating in one seamless project. We handle everything from start to finish.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-yellow-600" />
                      Included Repairs
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Crack filling & sealing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Spalling repair</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Surface leveling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Joint repair</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-yellow-600" />
                      Included Epoxy
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Premium epoxy system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Your choice of finish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Custom color options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Protective Polyaspartic topcoat</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                      Get Package Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Don't Let Damaged Concrete Hold You Back
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Free inspection and repair quote. Serving all of SWFL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Request Free Assessment
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConcreteRepair;