import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Building2, Store, Trophy, Clock } from 'lucide-react';

const CommercialEpoxy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Commercial Epoxy</span> Flooring Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Professional, durable floors for retail, offices, showrooms, and commercial spaces throughout SWFL.
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

      {/* Why Commercial Epoxy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Epoxy Flooring</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your floors are one of the first things customers notice. Make the right impression with beautiful, professional epoxy flooring.
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
                alt="Commercial Kitchen Epoxy Floor" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 font-semibold">
                Commercial Kitchen - Solid Color System
              </p>
            </div>
            <div>
              <img 
                src="/images/projects/commercial-hallway-1.jpg" 
                alt="Commercial Hallway with Flake System" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 font-semibold">
                Commercial Hallway - Flake System
              </p>
            </div>
            <div>
              <img 
                src="/images/projects/commercial-kitchen-2.jpg" 
                alt="Restaurant Kitchen Epoxy" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <p className="text-center text-gray-600 mt-4 font-semibold">
                Restaurant Kitchen - Food-Safe Coating
              </p>
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
                  alt="Flake" 
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
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400" 
                  alt="Metallic" 
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
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400" 
                  alt="Quartz" 
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