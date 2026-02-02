import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Check, 
  Star, 
  Shield, 
  Clock, 
  Phone, 
  MapPin, 
  Award,
  Home,
  Building2,
  Droplets,
  Sparkles,
  Factory,
  ChevronRight,
  Users,
  BadgeCheck
} from 'lucide-react';

const EpoxyFlooringNaples = () => {
  const services = [
    {
      title: 'Garage Floor Coating',
      description: 'Transform your Naples garage with premium epoxy. Flake, metallic, or solid color options.',
      link: '/garage-floor-coating.html',
      icon: Home
    },
    {
      title: 'Pool Deck Resurfacing',
      description: 'Slip-resistant, UV-stable coatings perfect for Naples pool areas and lanais.',
      link: '/pool-deck-resurfacing.html',
      icon: Droplets
    },
    {
      title: 'Metallic Epoxy',
      description: 'Stunning 3D metallic effects that make your Naples home stand out.',
      link: '/metallic-epoxy.html',
      icon: Sparkles
    },
    {
      title: 'Commercial Epoxy',
      description: 'Durable flooring solutions for Naples restaurants, retail, and offices.',
      link: '/commercial-epoxy.html',
      icon: Building2
    },
    {
      title: 'Industrial Epoxy',
      description: 'Heavy-duty coatings for Naples warehouses and manufacturing facilities.',
      link: '/industrial-epoxy.html',
      icon: Factory
    },
    {
      title: 'Concrete Repair',
      description: 'Fix cracks, spalls, and damage before coating. Essential for Naples concrete.',
      link: '/concrete-repair.html',
      icon: Shield
    }
  ];

  const naplesAreas = [
    'Downtown Naples',
    'Old Naples',
    'Park Shore',
    'Pelican Bay',
    'Pelican Marsh',
    'Grey Oaks',
    'Quail West',
    'Tiburón',
    'Vineyards',
    'Golden Gate',
    'North Naples',
    'East Naples'
  ];

  const nearbyAreas = [
    { name: 'Marco Island', link: '/epoxy-flooring-marco-island.html' },
    { name: 'Bonita Springs', link: '/epoxy-flooring-bonita-springs.html' },
    { name: 'Estero', link: '/epoxy-flooring-estero.html' },
    { name: 'Fort Myers', link: '/epoxy-flooring-fort-myers.html' },
    { name: 'Cape Coral', link: '/epoxy-flooring-cape-coral.html' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Epoxy Flooring Naples FL | #1 Rated Floor Coating Contractor"
        description="Naples' top-rated epoxy flooring contractor. Garage floors, pool decks, commercial coatings. 15-year warranty. OSHA certified. Free estimate! ☎️ (239) 276-1462"
        keywords="epoxy flooring naples fl, epoxy flooring naples, garage floor coating naples fl, pool deck resurfacing naples fl, metallic epoxy naples fl, commercial epoxy flooring naples, epoxy floor installers near me naples, concrete coating naples florida"
        url="/epoxy-flooring-naples"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Epoxy Flooring Naples FL",
          "description": "Professional epoxy flooring installation in Naples FL. Garage floors, pool decks, metallic epoxy, commercial coatings. 15-year warranty. OSHA certified.",
          "areaServed": {
            "@type": "City",
            "name": "Naples",
            "containedInPlace": {
              "@type": "State",
              "name": "Florida"
            }
          },
          "serviceType": "Epoxy Flooring Installation"
        }}
      />
      <Navbar />

      {/* Trust Bar */}
      <div className="bg-amber-700 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> Naples' #1 Rated • 15-Year Warranty • 500+ Local Projects • Free Estimates
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-metallic.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">160 15th St SW, Naples, FL 34117</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Epoxy Flooring Naples FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              #1 Rated Garage & Pool Deck Coating Contractor
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Naples' most trusted epoxy flooring contractor. <strong className="text-white">15-year warranty. 1-day installation. No hot tire pickup.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link to="/contact.html">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Get Free Naples Quote
                </Button>
              </Link>
              <a href="tel:239-276-1462">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  (239) 276-1462
                </Button>
              </a>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <BadgeCheck className="w-5 h-5 text-yellow-400" />
                <span>OSHA 30 Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>500+ Projects in SWFL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Naples Chooses EpoxyArt33 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Naples Homeowners & Businesses Choose EpoxyArt33
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              For over a decade, Naples residents have trusted EpoxyArt33 for premium epoxy flooring solutions. 
              From the luxury estates of Port Royal and Grey Oaks to commercial spaces in downtown Naples, 
              we've transformed hundreds of floors across Collier County.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Naples-Specific Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Understanding of Naples' humidity and salt air challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>UV-resistant coatings for intense Florida sunshine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Hurricane-tested installations (600+ projects survived)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Moisture vapor barrier systems for Naples concrete</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Naples Credentials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>OSHA 30-Hour Safety Certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fully Licensed & Insured in Florida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>SAM.GOV Registered (Government Contracts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Torginol & Chemtec Certified Installer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Naples */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Epoxy Flooring Services in Naples, FL</h2>
            <p className="text-xl text-gray-600">Complete flooring solutions for every Naples property</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl hover:border-yellow-400 transition-all group">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                    <service.icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Naples Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Naples Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-600">Professional epoxy flooring throughout Collier County</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {naplesAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg">
                  <MapPin className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Also Serving Nearby Communities</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {nearbyAreas.map((area, index) => (
                  <Link 
                    key={index}
                    to={area.link}
                    className="bg-white px-4 py-2 rounded-full border border-yellow-300 hover:bg-yellow-100 transition-colors text-gray-700 font-medium"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naples Project Gallery */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Naples Epoxy Flooring Projects</h2>
            <p className="text-xl text-gray-300">Real transformations from Naples homes and businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/gallery/driveway-1.jpg" 
                alt="Epoxy driveway coating Naples FL" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
              <p className="text-center mt-3 text-gray-300">Driveway Resurfacing - Naples</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/gallery/pool-deck-tropical-1.jpg" 
                alt="Pool deck resurfacing Naples Florida" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
              <p className="text-center mt-3 text-gray-300">Pool Deck - Tropical Breeze</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/gallery/restaurant-1.jpg" 
                alt="Commercial epoxy flooring Naples restaurant" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
              <p className="text-center mt-3 text-gray-300">Restaurant Floor - Naples</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery.html">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                View Full Naples Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Epoxy for Naples Homes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Epoxy Flooring is Perfect for Naples Homes
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Naples, Florida presents unique challenges for flooring. The combination of <strong>high humidity</strong>, 
                <strong>salt air from the Gulf</strong>, intense <strong>UV exposure</strong>, and seasonal <strong>hurricane threats</strong> 
                means homeowners need flooring that can handle it all. Epoxy flooring is the ideal solution.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits for Naples Properties:</h3>
              
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Moisture Resistant</h4>
                    <p className="text-gray-600">Our MVB primers block moisture vapor, preventing peeling and bubbling common with Naples concrete.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">UV Stable</h4>
                    <p className="text-gray-600">Polyaspartic topcoats won't yellow under Naples' intense sunshine.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Hurricane Ready</h4>
                    <p className="text-gray-600">Seamless coating sheds water quickly and won't be damaged by flooding.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Salt Air Resistant</h4>
                    <p className="text-gray-600">Chemical-resistant coating protects against corrosive salt air damage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Epoxy Flooring Cost in Naples, FL</h2>
            <p className="text-xl text-gray-600">Transparent pricing for Naples homeowners</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2">
              <table className="w-full">
                <thead className="bg-yellow-500 text-black">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Service</th>
                    <th className="px-6 py-4 text-left font-bold">Price Range (per sq ft)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Flake System (Garage)</td>
                    <td className="px-6 py-4">$6 - $10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Metallic Epoxy</td>
                    <td className="px-6 py-4">$8 - $15</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Pool Deck Resurfacing</td>
                    <td className="px-6 py-4">$8 - $12</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Solid Color Epoxy</td>
                    <td className="px-6 py-4">$4 - $7</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Commercial Epoxy</td>
                    <td className="px-6 py-4">$5 - $10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Quartz System</td>
                    <td className="px-6 py-4">$6 - $12</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 mt-4">
              *Prices vary based on condition of concrete, size of project, and specific requirements. Contact us for a free, detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Transform Your Naples Property?
          </h2>
          <p className="text-xl text-yellow-900 mb-8 max-w-2xl mx-auto">
            Join 500+ satisfied Naples homeowners and businesses. Get your free estimate today - no obligation, no pressure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact.html">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Get Free Naples Quote
              </Button>
            </Link>
            <a href="tel:239-276-1462">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                (239) 276-1462
              </Button>
            </a>
          </div>
          <p className="text-yellow-800 mt-6">
            <MapPin className="w-4 h-4 inline mr-1" />
            Serving all of Naples, FL and Collier County
          </p>
        </div>
      </section>

      {/* FAQ Section for Naples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Epoxy Flooring Naples
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How long does epoxy flooring last in Naples?</h3>
                <p className="text-gray-700">
                  With proper installation and our premium materials, epoxy flooring in Naples typically lasts 15-20+ years. 
                  Our UV-resistant topcoats are specifically chosen to withstand Naples' intense sunshine without yellowing.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Is epoxy flooring good for Naples humidity?</h3>
                <p className="text-gray-700">
                  Absolutely! We use moisture vapor barrier (MVB) primers specifically designed for Florida's humid climate. 
                  This prevents the peeling and bubbling that occurs when moisture is trapped under the coating.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly can you complete a Naples garage floor?</h3>
                <p className="text-gray-700">
                  Most Naples garage floors can be completed in 1-2 days. The floor is typically ready for light foot traffic 
                  within 24 hours and vehicle traffic within 72 hours, depending on the system chosen.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer free estimates in Naples?</h3>
                <p className="text-gray-700">
                  Yes! We offer completely free, no-obligation estimates for all Naples properties. We'll visit your home or business, 
                  assess the concrete condition, discuss your options, and provide a detailed written quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpoxyFlooringNaples;
