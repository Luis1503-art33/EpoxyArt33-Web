import React, { useState } from 'react';
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
  Menu,
  X
} from 'lucide-react';
import { services, testimonials, galleryItems, stats, benefits } from '../mock';
import { toast } from 'sonner';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const iconMap = {
    home: HomeIcon,
    building: Building2,
    factory: Factory,
    award: Award,
    users: Users,
    shield: Shield,
    clock: Clock
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success('Quote request submitted! We\'ll contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const filteredGallery = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EF</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Elite Epoxy Floors</h1>
                <p className="text-xs text-gray-600">Naples, FL</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Gallery</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Contact</button>
              <Button onClick={() => scrollToSection('quote')} className="bg-amber-700 hover:bg-amber-800 text-white">
                Get Free Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-amber-700 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-amber-700 transition-colors font-medium">Gallery</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-amber-700 transition-colors font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-amber-700 transition-colors font-medium">Contact</button>
              <Button onClick={() => scrollToSection('quote')} className="bg-amber-700 hover:bg-amber-800 text-white w-full">
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5">
              #1 Epoxy Flooring in Naples, FL
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Floors Into
              <span className="block text-amber-700">Works of Art</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium epoxy flooring solutions for residential, commercial, and industrial spaces in Southwest Florida. Exceptional quality, stunning results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('quote')} size="lg" className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6">
                Get Free Estimate <ChevronRight className="ml-2" />
              </Button>
              <Button onClick={() => scrollToSection('gallery')} size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700 text-lg px-8 py-6">
                View Our Work
              </Button>
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Specialized epoxy solutions tailored to your unique needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
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
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-amber-700 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Choose Elite Epoxy Floors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the difference that quality and expertise make</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Explore our stunning epoxy flooring installations</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Residential', 'Commercial', 'Industrial'].map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={selectedCategory === category ? 'bg-amber-700 hover:bg-amber-800' : 'hover:border-amber-700 hover:text-amber-700'}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredGallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Badge className="w-fit mb-2 bg-amber-700">{item.category}</Badge>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it</p>
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

      {/* Quote Form */}
      <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                      <option value="residential">Residential Epoxy</option>
                      <option value="commercial">Commercial Epoxy</option>
                      <option value="industrial">Industrial Epoxy</option>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to answer your questions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">(239) 555-0100</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">info@eliteepoxyfl.com</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Naples, FL 34102</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EF</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Elite Epoxy Floors</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Premium epoxy flooring solutions in Southwest Florida.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Residential Epoxy</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Commercial Epoxy</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Industrial Epoxy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-amber-500 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Gallery</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Testimonials</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Service Area</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Naples, FL</li>
                <li>Bonita Springs, FL</li>
                <li>Marco Island, FL</li>
                <li>Fort Myers, FL</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Elite Epoxy Floors. All rights reserved. | Serving Naples & Southwest Florida
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;