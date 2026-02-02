import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, X, Clock, Sun, Shield, DollarSign, Droplets, Thermometer } from 'lucide-react';

const EpoxyVsPolyaspartic = () => {
  const comparisonData = [
    {
      feature: 'Cure Time',
      epoxy: '24-72 hours',
      polyaspartic: '2-6 hours',
      winner: 'polyaspartic',
      details: 'Polyaspartic cures much faster, allowing same-day return to service in many cases.'
    },
    {
      feature: 'UV Stability',
      epoxy: 'Will yellow over time',
      polyaspartic: 'UV-stable, won\'t yellow',
      winner: 'polyaspartic',
      details: 'Critical for Florida. Epoxy yellows in direct sunlight; polyaspartic stays clear.'
    },
    {
      feature: 'Hot Tire Pickup',
      epoxy: 'Can be an issue',
      polyaspartic: 'Highly resistant',
      winner: 'polyaspartic',
      details: 'Hot tires can lift epoxy in Florida heat. Polyaspartic resists this.'
    },
    {
      feature: 'Temperature Flexibility',
      epoxy: 'Sensitive to temp',
      polyaspartic: 'Wide temp range',
      winner: 'polyaspartic',
      details: 'Polyaspartic can be applied in temperatures from 20°F to 100°F+.'
    },
    {
      feature: 'Durability',
      epoxy: 'Excellent (15+ years)',
      polyaspartic: 'Excellent (15+ years)',
      winner: 'tie',
      details: 'Both systems provide excellent long-term durability when properly installed.'
    },
    {
      feature: 'Chemical Resistance',
      epoxy: 'Excellent',
      polyaspartic: 'Excellent',
      winner: 'tie',
      details: 'Both resist oils, gasoline, and common chemicals found in garages.'
    },
    {
      feature: 'Cost',
      epoxy: 'Lower cost',
      polyaspartic: 'Higher cost',
      winner: 'epoxy',
      details: 'Epoxy is typically 20-30% less expensive than polyaspartic coatings.'
    },
    {
      feature: 'Appearance Options',
      epoxy: 'Wide variety',
      polyaspartic: 'Wide variety',
      winner: 'tie',
      details: 'Both can be combined with flakes, metallic pigments, and solid colors.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Epoxy vs Polyaspartic Flooring | Which is Better for Florida?"
        description="Epoxy vs Polyaspartic floor coating comparison. Learn which is better for Florida garages: cure time, UV stability, hot tire pickup resistance. Expert guide from Naples flooring pros."
        keywords="epoxy vs polyaspartic, epoxy vs polyaspartic flooring, polyaspartic vs epoxy garage floor, which is better epoxy or polyaspartic, polyaspartic flooring pros and cons, epoxy floor coating comparison"
        url="/epoxy-vs-polyaspartic"
      />
      <SchemaMarkup 
        data={{
          "@type": "FAQPage",
          "name": "Epoxy vs Polyaspartic Flooring Comparison",
          "description": "Comprehensive comparison of epoxy and polyaspartic floor coatings for Florida homeowners"
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Epoxy vs Polyaspartic Flooring
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Which is Better for Your Florida Garage?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A complete guide from Naples' flooring experts. <strong className="text-white">Spoiler: We use BOTH for optimal results.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Quick Answer</h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong>For Florida garages, we recommend a HYBRID system:</strong> 100% solids epoxy as the base coat (for maximum adhesion and durability) with a polyaspartic topcoat (for UV stability and hot tire resistance).
              </p>
              <p className="text-gray-600">
                This gives you the best of both worlds: the proven durability of epoxy with the Florida-specific benefits of polyaspartic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Head-to-Head Comparison</h2>
            <p className="text-xl text-gray-600 text-center mb-10">
              See how epoxy and polyaspartic stack up feature by feature.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-bold text-gray-900 border-b-2">Feature</th>
                    <th className="p-4 text-center font-bold text-gray-900 border-b-2 bg-blue-50">Epoxy</th>
                    <th className="p-4 text-center font-bold text-gray-900 border-b-2 bg-green-50">Polyaspartic</th>
                    <th className="p-4 text-center font-bold text-gray-900 border-b-2">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-gray-900 border-b">{row.feature}</td>
                      <td className="p-4 text-center text-gray-700 border-b bg-blue-50/50">{row.epoxy}</td>
                      <td className="p-4 text-center text-gray-700 border-b bg-green-50/50">{row.polyaspartic}</td>
                      <td className="p-4 text-center border-b">
                        {row.winner === 'polyaspartic' && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-semibold text-sm">
                            Polyaspartic
                          </span>
                        )}
                        {row.winner === 'epoxy' && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                            Epoxy
                          </span>
                        )}
                        {row.winner === 'tie' && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-semibold text-sm">
                            Tie
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters in Florida */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why This Matters in Florida</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <Card className="border-2 border-red-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="w-8 h-8 text-red-500" />
                    <h3 className="text-xl font-bold text-gray-900">UV Exposure</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Florida gets intense UV radiation year-round. Standard epoxy will yellow and discolor within 1-2 years when exposed to sunlight through garage doors or windows.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Our solution:</strong> Polyaspartic topcoat that's 100% UV-stable.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Thermometer className="w-8 h-8 text-orange-500" />
                    <h3 className="text-xl font-bold text-gray-900">Hot Tire Pickup</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Hot tires from driving in Florida heat can literally lift epoxy off the floor. This is one of the most common complaints about cheap epoxy installations.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Our solution:</strong> Polyaspartic topcoat rated for hot tire resistance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="w-8 h-8 text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-900">Humidity & Moisture</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Florida's high humidity causes moisture vapor to push through concrete. Without proper preparation, any coating can fail.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Our solution:</strong> MVB (Moisture Vapor Barrier) primer on EVERY job.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-green-500" />
                    <h3 className="text-xl font-bold text-gray-900">Fast Return to Service</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Florida homeowners don't want to wait 3-5 days for their garage. Polyaspartic's fast cure time means you can walk on your floor the same day.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Our solution:</strong> 1-day installation with polyaspartic topcoat.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hybrid System */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Hybrid System: Best of Both Worlds</h2>
            <p className="text-xl mb-10 text-amber-100">
              We don't make you choose. Our system combines the strengths of both technologies.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
                <h3 className="font-bold mb-2">Diamond Grinding</h3>
                <p className="text-sm text-amber-100">CSP 2-3 profile for maximum adhesion</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
                <h3 className="font-bold mb-2">MVB Primer</h3>
                <p className="text-sm text-amber-100">Blocks moisture vapor up to 25 lbs</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                <h3 className="font-bold mb-2">100% Solids Epoxy</h3>
                <p className="text-sm text-amber-100">Chemtec base coat + flakes/color</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
                <h3 className="font-bold mb-2">Polyaspartic Top</h3>
                <p className="text-sm text-amber-100">UV-stable, hot tire resistant</p>
              </div>
            </div>
            
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 font-bold text-lg px-8">
                Get a Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Is polyaspartic worth the extra cost?</h3>
                <p className="text-gray-700">
                  In Florida, yes. The UV stability and hot tire resistance alone justify the cost difference. A floor that yellows or peels in 2 years isn't a bargain at any price.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Can I get just epoxy without polyaspartic?</h3>
                <p className="text-gray-700">
                  Yes, but we don't recommend it for garages with sun exposure. For interior spaces without UV exposure (basements, enclosed commercial areas), 100% epoxy is a great choice.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-3">What about 100% polyaspartic systems?</h3>
                <p className="text-gray-700">
                  Some companies offer all-polyaspartic systems. These work but are significantly more expensive. Our hybrid approach gives you the same performance at a better value.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-3">How long will the hybrid system last?</h3>
                <p className="text-gray-700">
                  With proper installation and maintenance, 15-20+ years. We back our work with a 15-year warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get the Best of Both?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free estimate for our hybrid epoxy + polyaspartic system. See why Naples homeowners trust EpoxyArt33.
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
      </section>

      <Footer />
    </div>
  );
};

export default EpoxyVsPolyaspartic;
