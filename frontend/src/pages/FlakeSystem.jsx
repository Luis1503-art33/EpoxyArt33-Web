import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Shield, Sparkles, Home, Droplets } from 'lucide-react';

const FlakeSystem = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Garage Flake Floor Coatings Naples FL | Torginol Chip System"
        description="Garage flake floor coatings in Naples, FL. Premium Torginol chips, 200+ colors, slip-resistant texture. Perfect for Florida garages. Free estimate! ☎️ (239) 276-1462"
        keywords="garage flake floor Naples FL, flake epoxy flooring Naples, epoxy flake floors Naples FL, Torginol flake floor Naples, chip floor coating Naples FL, garage floor coating Naples, epoxy garage floor near me"
        url="/garage-flake-floors-naples-fl"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Garage Flake Floor Coatings Naples FL",
          "description": "Premium Torginol flake epoxy flooring for garages in Naples FL. Slip-resistant and easy to maintain.",
          "areaServed": "Naples, FL",
          "serviceType": "Garage Flake Floor Coating"
        }}
      />
      <Navbar />

      {/* Trust Bar */}
      <div className="bg-amber-700 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> 200+ Color Options • Slip-Resistant Texture • UV-Stable • Premium Torginol Flakes
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-flake-main.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Garage Flake Floor Coatings in Naples, FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Premium Torginol Chip System - 200+ Colors Available
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Beautiful, slip-resistant, and durable. <strong className="text-white">The #1 choice for Naples garages and pool decks.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Get Free Estimate
                </Button>
              </Link>
              <Link to="/showroom">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8">
                  View Color Samples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Flake System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is a Flake Epoxy System?</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A Flake epoxy system (also called chip flooring) consists of colored decorative flakes broadcast onto a wet epoxy base coat, then sealed with a clear Polyaspartic topcoat. The flakes create a multi-dimensional, textured finish that's both beautiful and functional.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We use premium <strong>Torginol flakes</strong>—the industry leader in quality decorative epoxy flakes. With hundreds of color combinations available, you can customize your floor to match any style.
            </p>
          </div>
        </div>
      </section>

      {/* Real Project Showcase */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Speaks for Itself</h2>
            <p className="text-xl text-gray-600">Real Flake System installations in SWFL</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/projects/garage-flake-1.jpg" 
              alt="Professional Flake System Installation" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-center text-gray-600 mt-4 italic">
              Full broadcast Flake System - Residential garage in Naples, FL
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Flake System?</h2>
            <p className="text-xl text-gray-600">The most versatile epoxy flooring option</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Slip-Resistant Texture</h3>
                <p className="text-gray-600">
                  The flakes create a textured surface that provides excellent traction, even when wet—perfect for garages and pool decks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hides Imperfections</h3>
                <p className="text-gray-600">
                  The multi-color flake pattern conceals minor concrete cracks and imperfections beautifully.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hundreds of Colors</h3>
                <p className="text-gray-600">
                  Choose from Torginol's extensive flake color library—from neutral to bold, we have options for every style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Waterproof & Chemical Resistant</h3>
                <p className="text-gray-600">
                  Fully sealed surface resists water, oil, gas, and chemicals. Ideal for harsh environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Extremely Durable</h3>
                <p className="text-gray-600">
                  Impact-resistant and long-lasting. Can withstand heavy vehicles, foot traffic, and daily wear.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy to Clean</h3>
                <p className="text-gray-600">
                  Seamless surface wipes clean with just a mop. No grout lines to scrub or stains to worry about.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Flake Colors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Torginol Flake Colors</h2>
            <p className="text-xl text-gray-600">From classic to contemporary</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-domino-411.jpg" alt="Domino" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-411 Domino</h3>
                <p className="text-sm text-gray-600">Black & White Classic</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-rapids-506.jpg" alt="Rapids" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-506 Rapids</h3>
                <p className="text-sm text-gray-600">Blue & White Blend</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-coyote-513.jpg" alt="Coyote" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-513 Coyote</h3>
                <p className="text-sm text-gray-600">Desert Tan Tones</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/images/samples/targinol-orbit-310.jpg" alt="Orbit" className="w-full h-40 object-cover" />
              <CardContent className="pt-4 text-center">
                <h3 className="font-bold">FB-310 Orbit</h3>
                <p className="text-sm text-gray-600">Modern Gray Mix</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/showroom">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                View All Flake Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flake Coverage Options</h2>
            <p className="text-xl text-gray-600">Choose the density that fits your style</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-center">Light Coverage</h3>
                <p className="text-center text-gray-600 mb-4">25-50% flake coverage</p>
                <p className="text-gray-700">
                  More epoxy base color shows through. Creates a subtle, speckled appearance with some texture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-2">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Full Broadcast</h3>
                <p className="text-center text-gray-600 mb-4">90-100% flake coverage</p>
                <p className="text-gray-700">
                  Maximum texture and slip resistance. Completely covers the base coat. Best for garages and pool decks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-center">Medium Coverage</h3>
                <p className="text-center text-gray-600 mb-4">50-75% flake coverage</p>
                <p className="text-gray-700">
                  Balanced look between base color and flakes. Moderate texture and decorative appeal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Garages</h3>
              <p className="text-gray-600">The #1 choice for residential and commercial garages</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Pool Decks</h3>
              <p className="text-gray-600">Slip-resistant and waterproof for safe pool areas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Patios & Porches</h3>
              <p className="text-gray-600">Outdoor living spaces that can handle the elements</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial Spaces</h3>
              <p className="text-gray-600">Showrooms, workshops, and retail environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Upgrade Your Floor?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Request free samples and get a no-obligation quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/showroom">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                Request Free Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FlakeSystem;