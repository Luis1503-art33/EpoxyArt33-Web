import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Shield, Zap, Factory, Sparkles, Building2, Phone, ChevronRight, Award, Droplets } from 'lucide-react';

const QuartzSystem = () => {
  // FAQ Schema Data
  const faqData = [
    {
      question: "What is the difference between quartz and flake epoxy flooring?",
      answer: "Quartz systems use crusite quartz aggregate for maximum hardness and chemical resistance—ideal for commercial kitchens and pool decks. Flake systems use decorative vinyl chips for aesthetics—best for garages. Quartz is harder and more durable but costs more."
    },
    {
      question: "Is quartz epoxy good for pool decks in Florida?",
      answer: "Yes! Quartz epoxy is excellent for Florida pool decks. It's UV-stable, slip-resistant when textured, and handles constant water exposure. The textured surface provides better traction than smooth concrete."
    },
    {
      question: "How long does quartz epoxy flooring last?",
      answer: "Quartz epoxy systems typically last 20+ years in commercial environments when properly installed. The quartz aggregate is harder than concrete and extremely resistant to wear, chemicals, and impacts."
    },
    {
      question: "Can quartz epoxy be used in commercial kitchens?",
      answer: "Absolutely. Quartz epoxy is the preferred choice for commercial kitchens because it resists hot liquids, grease, acids, and heavy equipment. However, for areas with extreme thermal shock (steam cleaning), urethane cement may be better."
    },
    {
      question: "Is quartz epoxy flooring slip-resistant?",
      answer: "Yes, when broadcast to saturation, quartz creates a textured surface that provides excellent slip resistance—even when wet. This makes it ideal for pool decks, commercial kitchens, and areas prone to moisture."
    },
    {
      question: "How much does quartz epoxy cost compared to flake?",
      answer: "Quartz systems typically cost 20-30% more than flake systems due to the premium aggregate material and thicker application. However, the increased durability often makes it more cost-effective long-term for commercial applications."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Quartz & Pool Deck Epoxy Coatings Naples FL | Heavy-Duty System"
        description="Quartz and pool deck epoxy coatings in Naples, FL. Maximum durability for commercial kitchens, pool decks & high-traffic areas. Free estimate! ☎️ (239) 276-1462"
        keywords="quartz epoxy flooring Naples FL, pool deck coating Naples FL, quartz floor coating Naples, heavy duty epoxy flooring Naples, commercial quartz flooring Fort Myers, broadcast quartz epoxy near me"
        url="/quartz-pool-deck-coatings-naples-fl"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "name": "Quartz & Pool Deck Epoxy Coatings Naples FL",
          "description": "Industrial-strength quartz epoxy flooring and pool deck coatings for commercial and residential applications in Naples FL.",
          "areaServed": "Naples, FL",
          "serviceType": "Quartz Epoxy System"
        }}
      />
      {/* FAQ Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* Trust Bar */}
      <div className="bg-gray-800 text-white py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4" /> Maximum Durability • Chemical Resistant • Impact Resistant • 20+ Year Lifespan
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/projects/hero-quartz.jpg')` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quartz & Pool Deck Epoxy Coatings in Naples, FL
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
              Heavy-Duty Commercial Floor Coating for Maximum Durability
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Industrial-strength flooring for the toughest environments. <strong className="text-white">20+ year lifespan. Chemical & impact resistant.</strong>
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

      {/* What is Quartz System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is a Quartz Epoxy System?</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A Quartz epoxy system combines high-performance epoxy resin with colored quartz sand aggregates to create the most durable, impact-resistant flooring solution available. It's the gold standard for commercial, industrial, and high-traffic environments.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Unlike decorative flake systems, quartz systems are engineered for <strong>maximum strength</strong>. The quartz particles are harder than concrete, creating a floor that can withstand extreme abuse, heavy machinery, and chemical exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Real Quartz Installation */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industrial-Grade Quartz Installation</h2>
            <p className="text-xl text-gray-600">Real commercial project in SWFL</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/projects/hero-quartz.jpg" 
              alt="Commercial Quartz System Installation" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-center text-gray-600 mt-4 italic">
              Heavy-duty Quartz System - Commercial space with maximum durability
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Quartz System?</h2>
            <p className="text-xl text-gray-600">Built for the toughest conditions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Maximum Impact Resistance</h3>
                <p className="text-gray-600">
                  Quartz aggregates create an armor-like surface that resists heavy impacts, dropped tools, and machinery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Superior Chemical Resistance</h3>
                <p className="text-gray-600">
                  Stands up to acids, solvents, oils, and harsh chemicals. Ideal for automotive, manufacturing, and industrial facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Heavy-Traffic Ready</h3>
                <p className="text-gray-600">
                  Designed for constant foot traffic, forklifts, pallet jacks, and industrial equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Long Service Life</h3>
                <p className="text-gray-600">
                  Properly installed quartz floors can last 20+ years in demanding industrial environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customizable Colors</h3>
                <p className="text-gray-600">
                  Available in a range of colors to match your branding or aesthetic preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
                <p className="text-gray-600">
                  Non-porous surface is easy to clean and maintain. No waxing or special treatments required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Thickness Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">System Thickness Options</h2>
            <p className="text-xl text-gray-600">Tailored to your traffic level and budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-center">1/8 inch</h3>
                <p className="text-center text-gray-600 mb-4">Light to Medium Traffic</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Retail spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Commercial offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Light industrial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-2">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">1/4 inch</h3>
                <p className="text-center text-gray-600 mb-4">Heavy Traffic</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Warehouses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Auto shops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-center">3/8 inch+</h3>
                <p className="text-center text-gray-600 mb-4">Extreme Duty</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Heavy machinery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Chemical plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Industrial facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ideal Applications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Manufacturing Facilities</h3>
              <p className="text-gray-600">Production floors with heavy equipment</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Warehouses & Distribution</h3>
              <p className="text-gray-600">Forklift and pallet jack traffic</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Automotive Shops</h3>
              <p className="text-gray-600">Lifts, tools, and chemical exposure</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Commercial Kitchens</h3>
              <p className="text-gray-600">Food-safe, easy to sanitize</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Airplane Hangars</h3>
              <p className="text-gray-600">Heavy aircraft and equipment</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Medical Facilities</h3>
              <p className="text-gray-600">Sterile, non-porous surfaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Need Industrial-Strength Flooring?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Contact us for a free site assessment and custom quote for your facility.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8">
                Request Free Quote
              </Button>
            </Link>
            <Link to="/industrial-epoxy">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8">
                Industrial Epoxy Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuartzSystem;
