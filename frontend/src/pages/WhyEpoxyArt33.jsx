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
        title="Why Choose EpoxyArt33 | OSHA Certified | Licensed & Insured | SAM.GOV Registered | Naples FL"
        description="OSHA 30 certified, fully licensed & insured, SAM.GOV registered for government contracts. 500+ SWFL clients trust EpoxyArt33. Naples, Fort Myers & Southwest Florida."
        keywords="why choose EpoxyArt33, OSHA certified epoxy contractor, licensed insured flooring Naples, SAM.GOV registered contractor, government epoxy contractor Florida, certified epoxy installer SWFL"
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

      {/* Credentials & Certifications Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Credentials & Certifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When you hire EpoxyArt33, you're hiring a fully licensed, insured, and certified professional contractor. 
              Our credentials speak to our commitment to safety, quality, and professionalism.
            </p>
          </div>

          {/* Main Credentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* OSHA 30 Certification */}
            <Card className="bg-white/10 backdrop-blur border-yellow-500/50 hover:border-yellow-400 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-center text-yellow-400 mb-3">OSHA 30 Certified</h3>
                <p className="text-gray-300 text-center mb-4">
                  Our team holds OSHA 30-Hour Construction Safety certification, demonstrating advanced knowledge of workplace safety standards and hazard prevention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>30-hour comprehensive safety training</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Hazard identification & prevention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>OSHA regulations compliance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Safe work environment guaranteed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Licensed & Insured */}
            <Card className="bg-white/10 backdrop-blur border-green-500/50 hover:border-green-400 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-green-400 mb-3">Fully Licensed & Insured</h3>
                <p className="text-gray-300 text-center mb-4">
                  We maintain comprehensive insurance coverage and all required business licenses, protecting you and your property throughout every project.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>General Liability Insurance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Workers' Compensation Coverage</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Florida State Business License</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Certificate of Insurance available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SAM.GOV Registered */}
            <Card className="bg-white/10 backdrop-blur border-blue-500/50 hover:border-blue-400 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Landmark className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-blue-400 mb-3">SAM.GOV Registered</h3>
                <p className="text-gray-300 text-center mb-4">
                  Registered in the System for Award Management (SAM.GOV), qualified to perform federal, state, and local government contract work.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Federal government contracts eligible</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>State & municipal projects qualified</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Verified business credentials</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Compliant with federal requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Credentials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10 hover:border-white/30 transition-all">
              <FileCheck className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">LLC Registered</h4>
              <p className="text-sm text-gray-400">Legally established Limited Liability Company in Florida</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10 hover:border-white/30 transition-all">
              <Scale className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Bonded Contractor</h4>
              <p className="text-sm text-gray-400">Financial guarantee of project completion and quality</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10 hover:border-white/30 transition-all">
              <FileText className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">W-9 on File</h4>
              <p className="text-sm text-gray-400">Tax documentation ready for commercial & government clients</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10 hover:border-white/30 transition-all">
              <BadgeCheck className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Manufacturer Trained</h4>
              <p className="text-sm text-gray-400">Factory-trained on Torginol, Chemtec & premium products</p>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-12 text-center">
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Why Credentials Matter</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                In the flooring industry, many contractors operate without proper licensing, insurance, or safety training. 
                This puts property owners at risk. At EpoxyArt33, we invest in certifications and compliance because 
                <strong className="text-white"> your safety and peace of mind are non-negotiable</strong>. 
                When you hire us, you're hiring a legitimate, professional contractor who will be here for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Serve All Sectors</h2>
            <p className="text-xl text-gray-600">From homeowners to government agencies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Residential</h3>
                <p className="text-gray-600 mb-4">
                  Homeowners throughout Naples, Fort Myers, and SWFL trust us with their garages, patios, and pool decks.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Garage floors</li>
                  <li>• Pool decks</li>
                  <li>• Driveways</li>
                  <li>• Patios & lanais</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Commercial</h3>
                <p className="text-gray-600 mb-4">
                  Businesses rely on us for professional, durable floors that impress customers and handle heavy traffic.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Restaurants & kitchens</li>
                  <li>• Retail stores</li>
                  <li>• Warehouses</li>
                  <li>• Office buildings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Landmark className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Government</h3>
                <p className="text-gray-600 mb-4">
                  SAM.GOV registered and qualified for federal, state, and municipal contract work.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Federal facilities</li>
                  <li>• Municipal buildings</li>
                  <li>• Schools & universities</li>
                  <li>• Military installations</li>
                </ul>
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