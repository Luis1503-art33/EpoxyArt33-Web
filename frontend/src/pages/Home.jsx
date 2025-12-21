import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import NewsletterSignup from '../components/NewsletterSignup';
import AnimatedCounter from '../components/AnimatedCounter';
import Card3D from '../components/Card3D';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
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
      <SEO 
        title="EpoxyArt33 | Premium Epoxy Flooring Naples, Fort Myers, SWFL"
        description="Transform your floors with EpoxyArt33's premium epoxy solutions. Garage floors, metallic epoxy, pool decks, commercial flooring. 500+ projects in Southwest Florida. Free estimates! Call (239) 276-1462"
        keywords="epoxy flooring Naples FL, garage floor coating Fort Myers, pool deck resurfacing Marco Island, metallic epoxy SWFL, commercial epoxy flooring Cape Coral, industrial epoxy Bonita Springs, Torginol flakes, polyaspartic coating, concrete repair Naples"
        url="/"
      />
      <SchemaMarkup />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5 text-base">
                Premium Epoxy Flooring in SWFL
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Art Beneath
              <motion.span 
                className="block text-amber-700"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your Feet
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform your floors with EpoxyArt33's premium epoxy solutions. Serving Naples, Marco Island, Fort Myers, and all of Southwest Florida.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={scrollToQuote} size="lg" className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                  Get Free Estimate <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
              <Link to="/gallery">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700 text-lg px-8 py-6">
                    View Our Work
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Stats with Animated Counters */}
          <ScrollReveal>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-amber-700 mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-amber-700 mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-amber-700 mb-2">
                  <AnimatedCounter end={3} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-amber-700 mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Specialized epoxy solutions for every need in Southwest Florida</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={index * 0.1} direction="up">
                  <Card3D className="h-full">
                    <Card className="border-2 border-gray-200 hover:border-amber-700 hover:shadow-2xl transition-all duration-300 group h-full">
                      <CardHeader>
                        <motion.div 
                          className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
                        </motion.div>
                        <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-center text-gray-700"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-amber-700 mr-2 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        <Link to={service.link}>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white">
                              Learn More
                            </Button>
                          </motion.div>
                        </Link>
                      </CardContent>
                    </Card>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white shadow-lg">
                    View All Services <ChevronRight className="ml-2" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollReveal>
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
              <p className="text-gray-600">Most projects completed within 1 day with minimal disruption to your schedule.</p>
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

      {/* Before/After Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              See the <span className="text-yellow-600">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From dull, damaged concrete to stunning epoxy floors. Slide to see the difference.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <BeforeAfterSlider 
              beforeImage="/images/projects/garage-before.jpg"
              afterImage="/images/projects/garage-after.jpg"
              altText="Garage Floor Transformation"
            />
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                View Full Gallery <ChevronRight className="ml-2 w-4 h-4" />
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

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-16 h-16 text-black mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Get Exclusive Offers & Tips
            </h2>
            <p className="text-xl text-gray-900 mb-8">
              Join our newsletter for epoxy flooring tips, special promotions, and inspiration. No spam, unsubscribe anytime.
            </p>
            <div className="flex justify-center">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;