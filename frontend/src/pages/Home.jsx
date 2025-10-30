import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Home as HomeIcon, 
  Building2, 
  Factory, 
  Award, 
  Users, 
  Shield, 
  Clock, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Droplets,
  Hammer
} from 'lucide-react';
import { stats, benefits } from '../mock';
import { toast } from 'sonner';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Quote request submitted! We\'ll contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        toast.error('Failed to submit request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error('Failed to submit request. Please try again or call us directly.');
    }
  };

  const featuredServices = [
    {
      id: 1,
      title: 'Garage Floor Coating',
      description: 'Transform your garage into a stunning, durable space that adds value to your home.',
      icon: HomeIcon,
      link: '/garage-floor-coating',
      features: ['Slip Resistant', 'Easy to Clean', 'Chemical Resistant']
    },
    {
      id: 2,
      title: 'Metallic Epoxy',
      description: 'Create breathtaking 3D metallic effects that make your floors a work of art.',
      icon: Sparkles,
      link: '/metallic-epoxy',
      features: ['Unique Designs', 'Luxurious Look', 'Seamless Finish']
    },
    {
      id: 3,
      title: 'Flake System',
      description: 'Decorative flake floors perfect for garages, patios, and commercial spaces.',
      icon: Droplets,
      link: '/flake-system',
      features: ['UV Resistant', 'Customizable', 'High Durability']
    },
    {
      id: 4,
      title: 'Pool Deck Resurfacing',
      description: 'Non-slip, beautiful surfaces perfect for Florida pool areas.',
      icon: Building2,
      link: '/pool-deck-resurfacing',
      features: ['Heat Reflective', 'Waterproof', 'Safe Surface']
    },
    {
      id: 5,
      title: 'Commercial Epoxy',
      description: 'Heavy-duty flooring solutions for retail, offices, and commercial spaces.',
      icon: Building2,
      link: '/commercial-epoxy',
      features: ['Fast Installation', 'Low Maintenance', 'Professional Look']
    },
    {
      id: 6,
      title: 'Industrial Epoxy',
      description: 'Maximum durability for warehouses, factories, and industrial facilities.',
      icon: Factory,
      link: '/industrial-epoxy',
      features: ['Heavy Traffic', 'Chemical Proof', 'Long Lasting']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Robert Thompson',
      location: 'Naples, FL',
      rating: 5,
      text: 'The metallic epoxy floor in my showroom garage is absolutely stunning. EpoxyArt33 delivered beyond my expectations!',
      project: 'Metallic Garage Floor'
    },
    {
      id: 2,
      name: 'Maria Gonzalez',
      location: 'Marco Island, FL',
      rating: 5,
      text: 'Our pool deck looks amazing and is much safer now. The flake system is perfect for our Florida weather!',
      project: 'Pool Deck Resurfacing'
    },
    {
      id: 3,
      name: 'David Chen',
      location: 'Fort Myers, FL',
      rating: 5,
      text: 'Restaurant kitchen done with quartz epoxy - extremely durable and easy to clean. Best investment!',
      project: 'Commercial Kitchen'
    }
  ];

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5 text-base">
              Premium Epoxy Flooring in SWFL
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Art Beneath
              <span className="block text-amber-700">Your Feet</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your floors with EpoxyArt33's premium epoxy solutions. Serving Naples, Marco Island, Fort Myers, and all of Southwest Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToQuote} size="lg" className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6">
                Get Free Estimate <ChevronRight className="ml-2" />
              </Button>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700 text-lg px-8 py-6">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-700 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Specialized epoxy solutions for every need in Southwest Florida</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="border-2 border-gray-200 hover:border-amber-700 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                      <Icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-amber-700 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                View All Services <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Choose EpoxyArt33</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the difference that quality and expertise make</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality Materials</h3>
              <p className="text-gray-600">We use only the highest-grade epoxy systems that ensure longevity and beauty.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Installation</h3>
              <p className="text-gray-600">Our skilled technicians bring 3+ years of specialized experience to every project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranty coverage for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Most projects completed within 2-3 days with minimal disruption to your schedule.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/why">
              <Button size="lg" variant="outline" className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real reviews from satisfied customers across Southwest Florida</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white border-2 border-gray-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    <MapPin className="w-4 h-4 inline mr-1" />{testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">"{testimonial.text}"</p>
                  <Badge variant="outline" className="border-amber-700 text-amber-700">{testimonial.project}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-700">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proudly Serving Southwest Florida</h2>
            <p className="text-xl text-amber-100 mb-6">Naples • Marco Island • Estero • Bonita Beach • Fort Myers • Cape Coral • SWFL</p>
            <a href="tel:2392761462">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
                <Phone className="mr-2" />
                Call Us: (239) 276-1462
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600">Tell us about your project and we'll provide a detailed estimate within 24 hours</p>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(239) 555-0123"
                      required
                      className="border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700"
                    >
                      <option value="">Select a service</option>
                      <option value="garage">Garage Floor Coating</option>
                      <option value="metallic">Metallic Epoxy</option>
                      <option value="flake">Flake System</option>
                      <option value="quartz">Quartz System</option>
                      <option value="pool">Pool Deck Resurfacing</option>
                      <option value="commercial">Commercial Epoxy</option>
                      <option value="industrial">Industrial Epoxy</option>
                      <option value="concrete">Concrete Repair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project: square footage, location, timeline, etc."
                    rows={5}
                    required
                    className="border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-amber-700 hover:bg-amber-800 text-white text-lg py-6">
                  Request Free Quote <ChevronRight className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;