import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Award, Users, Clock, Shield, Star, Heart, Wrench, FileCheck, Building2, BadgeCheck, Scale, HardHat, FileText, Landmark, ShieldCheck } from 'lucide-react';

const WhyEpoxyArt33 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Why Choose EpoxyArt33 | Best Epoxy Flooring Naples FL | SWFL"
        description="Discover why 500+ SWFL clients choose EpoxyArt33. Premium materials, expert craftsmen, fast turnaround, quality guarantee. Naples, Fort Myers & Southwest Florida."
        keywords="why choose EpoxyArt33, best epoxy company Naples, top flooring contractor Fort Myers, trusted epoxy installer SWFL, quality epoxy flooring, premium floor coating"
        url="/why"
      />
      <SchemaMarkup />
      <Navbar />
      
      <section className="relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-gray-900">EpoxyArt33</span>?
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              500+ happy clients, 3+ years of excellence, and a commitment to quality that's unmatched in Southwest Florida.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Promise to You</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At EpoxyArt33, we don't just install epoxy floors—we create art beneath your feet. Every project is treated with the care and attention it deserves, from the first consultation to the final topcoat. Your satisfaction is our obsession.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">More than just another flooring company</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
                <p className="text-gray-600">
                  We use only top-tier products like Torginol flakes and industrial-grade epoxy resins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Craftsmen</h3>
                <p className="text-gray-600">
                  Our team has years of hands-on experience. We don't cut corners or rush jobs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Most projects completed in just 1 day. Minimal disruption to your life or business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind our work. Comprehensive warranty on all installations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-700">
                Your vision, your timeline, your budget. We work around you, not the other way around.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Excellence Always</h3>
              <p className="text-gray-700">
                Good enough isn't good enough for us. We pursue perfection in every square foot we install.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Community Focused</h3>
              <p className="text-gray-700">
                Proud to serve Naples, Fort Myers, and all of SWFL. Your neighbors trust us, and so can you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Experience the EpoxyArt33 Difference
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Join 500+ satisfied clients. Get your free quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyEpoxyArt33;