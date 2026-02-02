import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Flame, Droplets, Shield, Factory, Utensils, Snowflake, Thermometer } from 'lucide-react';

const UrethaneCement = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Urethane Cement Flooring Naples FL | Commercial Kitchen Floors"
        description="Urethane cement flooring for commercial facilities in Naples, FL. Restaurants, commercial kitchens, food processing. USDA/FDA compliant. Duraflex system. ☎️ (239) 276-1462"
        keywords="urethane cement flooring Naples FL, commercial kitchen flooring Naples, food processing floor coating Naples FL, brewery flooring Naples, cementitious urethane SWFL, Duraflex flooring Fort Myers, restaurant kitchen floor contractor"
        url="/urethane-cement-flooring-naples-fl"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Urethane Cement Flooring for Commercial Facilities Naples FL",
          "description": "Professional urethane cement flooring for commercial kitchens, food processing and industrial facilities in Naples FL. Thermal shock and chemical resistant. USDA approved.",
          "areaServed": "Naples, FL",
          "serviceType": "Urethane Cement Flooring"
        }}
      />
      <Navbar />

      {/* Trust Bar */}
      <div className="bg-orange-700 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> USDA/FDA Compliant • Thermal Shock Resistant • Steam Clean Safe • Duraflex Certified Installer
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/gallery/urethane-cement-1.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Urethane Cement Flooring for Commercial Facilities in Naples, FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Restaurants • Commercial Kitchens • Food Processing • Heavy-Duty Specs
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              The <strong className="text-white">industry-standard flooring</strong> for restaurants, breweries, and food facilities. Thermal shock resistant. USDA approved.
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

      {/* Why Urethane Cement - Specs-driven */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Specs Call for Urethane Cement</h2>
            <p className="text-xl text-gray-600">
              Architects and engineers specify urethane cement for demanding environments because epoxy simply can't perform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <Thermometer className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Thermal Shock Resistant</h3>
                <p className="text-gray-600">
                  Withstands rapid temperature changes from -40°F to 250°F. Steam cleaning won't cause delamination.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <Droplets className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Chemical Resistant</h3>
                <p className="text-gray-600">
                  Resists acids, caustics, solvents, and aggressive cleaning chemicals used in food facilities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">USDA/FDA Compliant</h3>
                <p className="text-gray-600">
                  Meets food safety regulations. Seamless, non-porous surface prevents bacterial growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Urethane Cement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is Urethane Cement Flooring?</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Urethane Cement</strong> (also called cementitious urethane or urethane mortar) is the most durable flooring system available for demanding environments. It combines the strength of cement with the flexibility and chemical resistance of urethane.
            </p>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">We Are Duraflex Certified Installers</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Duraflex</strong> is a premium manufacturer of urethane cement flooring systems. Their products are specifically engineered for the most demanding applications - from commercial kitchens to food processing plants to heavy industrial facilities. When durability matters most, we specify Duraflex.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Unlike standard epoxy, urethane cement can withstand extreme thermal shock (hot water, steam cleaning), heavy impact, aggressive chemicals, and continuous abuse - making it the industry standard for food and beverage facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ideal Applications</h2>
            <p className="text-xl text-gray-600">Where urethane cement excels</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Commercial Kitchens</h3>
                <p className="text-gray-600">Restaurants, hotels, institutional kitchens. Handles hot grease, steam cleaning, heavy equipment.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Food Processing</h3>
                <p className="text-gray-600">Meat processing, dairy, bakeries. USDA/FDA compliant, sanitary seamless surface.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Breweries & Wineries</h3>
                <p className="text-gray-600">Fermentation areas, bottling lines. Resists acids, sugars, and constant wet conditions.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Snowflake className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cold Storage & Freezers</h3>
                <p className="text-gray-600">Walk-in coolers, freezer floors. Handles thermal cycling from -40°F to 200°F.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Chemical Processing</h3>
                <p className="text-gray-600">Labs, pharmaceutical, chemical plants. Extreme chemical resistance.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Heavy Industrial</h3>
                <p className="text-gray-600">Manufacturing, warehouses with forklift traffic. Impact and abrasion resistant.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Urethane Cement?</h2>
            <p className="text-xl text-gray-600">Unmatched performance for demanding environments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thermal Shock Resistant</h3>
              <p className="text-gray-600">Withstands extreme temperature changes from steam cleaning to freezing. Won't crack or delaminate.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chemical Resistant</h3>
              <p className="text-gray-600">Resists acids, alkalis, fats, oils, solvents, and aggressive cleaning chemicals.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact Resistant</h3>
              <p className="text-gray-600">Handles heavy equipment drops, forklift traffic, and constant physical abuse.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">FDA/USDA Compliant</h3>
              <p className="text-gray-600">Seamless, non-porous surface meets food safety requirements. Easy to sanitize.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Projects */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Urethane Cement Installations</h2>
            <p className="text-xl text-gray-600">Duraflex system in action</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group">
              <img 
                src="/images/gallery/urethane-cement-1.jpg" 
                alt="Urethane Cement Commercial Kitchen" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Commercial Kitchen - Duraflex System
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/urethane-cement-2.jpg" 
                alt="Urethane Cement Food Processing" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Food Service Area
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/urethane-cement-3.jpg" 
                alt="Urethane Cement Industrial Floor" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Heavy-Duty Industrial Application
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/urethane-cement-4.jpg" 
                alt="Urethane Cement Before Application" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Surface Preparation
              </p>
            </div>
            <div className="group">
              <img 
                src="/images/gallery/urethane-cement-5.jpg" 
                alt="Urethane Cement Complete Installation" 
                className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow"
              />
              <p className="text-center text-gray-600 mt-3 font-semibold">
                Complete Installation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Duraflex Urethane Cement Performance</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Property</th>
                    <th className="px-6 py-4 text-left">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">System Type</td>
                    <td className="px-6 py-4">Cementitious Urethane Mortar</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Typical Thickness</td>
                    <td className="px-6 py-4">1/4" to 3/8" (6-9mm)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Compressive Strength</td>
                    <td className="px-6 py-4">8,000+ psi</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Thermal Shock Resistance</td>
                    <td className="px-6 py-4">-40°F to 250°F (-40°C to 121°C)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Chemical Resistance</td>
                    <td className="px-6 py-4">Excellent - acids, alkalis, solvents, oils</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Impact Resistance</td>
                    <td className="px-6 py-4">Excellent - withstands heavy drops</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Slip Resistance</td>
                    <td className="px-6 py-4">Textured finish available for wet areas</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Food Safety</td>
                    <td className="px-6 py-4">USDA/FDA approved for food contact</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Urethane Cement vs. Standard Epoxy</h2>
            <p className="text-xl text-gray-600">Why urethane cement wins in demanding environments</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-400">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-center mb-4 text-green-700">Urethane Cement</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Thermal shock resistant (steam cleaning OK)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Can be applied to damp/green concrete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Superior chemical resistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Handles extreme temperature swings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>High impact resistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>25+ year lifespan in food facilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-500">Standard Epoxy</h3>
                  <ul className="space-y-3 text-gray-500">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400">✗</span>
                      <span>Can delaminate from thermal shock</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400">✗</span>
                      <span>Requires dry concrete substrate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400">✗</span>
                      <span>Limited chemical resistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400">✗</span>
                      <span>Cracks in freeze/thaw cycles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400">✗</span>
                      <span>Can chip from heavy impacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400">✗</span>
                      <span>May need replacement in 5-10 years</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Toughest Floors for the Toughest Jobs
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get Duraflex urethane cement flooring for your commercial kitchen, food facility, or industrial space. Serving Naples, Fort Myers, and all of SWFL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                Request Free Quote
              </Button>
            </Link>
            <Link to="/products.html">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg px-8">
                View Products & Materials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UrethaneCement;
