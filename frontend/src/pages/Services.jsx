import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Home, 
  Building2, 
  Factory, 
  Sparkles, 
  Droplets, 
  Layers,
  Waves,
  Hammer,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Garage Floor Coating',
      description: 'Transform your garage with durable, beautiful epoxy floor coatings. Perfect for residential and commercial garages in Southwest Florida.',
      icon: Home,
      link: '/garage-floor-coating',
      features: [
        'Slip-resistant finish',
        'Chemical and oil resistant',
        'Easy to clean and maintain',
        'Increases property value',
        'Quick installation (1-2 days)'
      ],
      seoKeywords: 'garage floor coating Naples FL, epoxy garage floors SWFL'
    },
    {
      id: 2,
      title: 'Metallic Epoxy Floors',
      description: 'Create stunning 3D metallic effects with our premium metallic epoxy systems. Each floor is a unique work of art.',
      icon: Sparkles,
      link: '/metallic-epoxy',
      features: [
        'Unique metallic designs',
        'Seamless, smooth finish',
        'Reflects light beautifully',
        'Perfect for showrooms',
        'Customizable colors'
      ],
      seoKeywords: 'metallic epoxy floors Naples, 3D epoxy flooring Fort Myers'
    },
    {
      id: 3,
      title: 'Flake Epoxy System',
      description: 'Decorative flake floors combining beauty and durability. Ideal for garages, patios, commercial spaces, and pool decks.',
      icon: Droplets,
      link: '/flake-system',
      features: [
        'UV resistant color flakes',
        'Hides imperfections',
        'Non-slip texture',
        'Unlimited color combinations',
        'High impact resistance'
      ],
      seoKeywords: 'flake epoxy system Marco Island, decorative epoxy floors'
    },
    {
      id: 4,
      title: 'Quartz Epoxy System',
      description: 'Heavy-duty quartz flooring for maximum durability. Perfect for high-traffic commercial and industrial applications.',
      icon: Layers,
      link: '/quartz-system',
      features: [
        'Extreme durability',
        'Slip-resistant surface',
        'Chemical resistant',
        'Easy to sanitize',
        'Ideal for food service'
      ],
      seoKeywords: 'quartz epoxy flooring Cape Coral, commercial floor coating'
    },
    {
      id: 5,
      title: 'Pool Deck Resurfacing',
      description: 'Transform your pool area with safe, beautiful, heat-reflective epoxy coatings. Perfect for Florida's climate.',
      icon: Waves,
      link: '/pool-deck-resurfacing',
      features: [
        'Heat-reflective surface',
        'Slip-resistant when wet',
        'UV and chlorine resistant',
        'Waterproof protection',
        'Cool to the touch'
      ],
      seoKeywords: 'pool deck resurfacing Naples FL, epoxy pool deck coating'
    },
    {
      id: 6,
      title: 'Commercial Epoxy',
      description: 'Professional-grade epoxy flooring for retail stores, offices, showrooms, and healthcare facilities.',
      icon: Building2,
      link: '/commercial-epoxy',
      features: [
        'Fast installation',
        'Minimal downtime',
        'Professional appearance',
        'Low maintenance',
        'Durable and long-lasting'
      ],
      seoKeywords: 'commercial epoxy flooring Fort Myers, retail floor coating'
    },
    {
      id: 7,
      title: 'Industrial Epoxy',
      description: 'Maximum strength epoxy systems for warehouses, factories, and industrial facilities requiring heavy-duty flooring.',
      icon: Factory,
      link: '/industrial-epoxy',
      features: [
        'Heavy forklift traffic rated',
        'Chemical resistant',
        'Impact resistant',
        'Easy to clean',
        'Long service life (15+ years)'
      ],
      seoKeywords: 'industrial epoxy flooring SWFL, warehouse floor coating'
    },
    {
      id: 8,
      title: 'Concrete Repair',
      description: 'Expert concrete crack repair, leveling, and surface preparation before epoxy installation.',
      icon: Hammer,
      link: '/concrete-repair',
      features: [
        'Crack repair and filling',
        'Surface leveling',
        'Spalling repair',
        'Moisture mitigation',
        'Professional preparation'
      ],
      seoKeywords: 'concrete repair Naples FL, concrete floor leveling'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5">
            Complete Epoxy Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Premium Epoxy Flooring Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the perfect epoxy flooring solution for your residential, commercial, or industrial project in Southwest Florida.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="border-2 border-gray-200 hover:border-amber-700 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors flex-shrink-0">
                        <Icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-amber-700 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                        Learn More <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Floors?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free quote and consultation from Southwest Florida's epoxy flooring experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-700">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving All of Southwest Florida</h3>
          <p className="text-lg text-gray-600">
            Naples • Marco Island • Estero • Bonita Beach • Fort Myers • Cape Coral • SWFL
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;