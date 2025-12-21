import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
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
        toast.success('Message sent! We\'ll contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', service: '', location: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again or call us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact EpoxyArt33 | Free Epoxy Floor Quote Naples FL | SWFL"
        description="Get a free epoxy flooring quote in Naples, Fort Myers & SWFL. Call (239) 276-1462 or fill out our form. Serving Naples, Marco Island, Cape Coral & all of Southwest Florida."
        keywords="epoxy flooring quote Naples, contact epoxy company Fort Myers, free estimate SWFL, epoxy floor consultation, Naples flooring contractor, Marco Island epoxy, Cape Coral floor coating"
        url="/contact"
      />
      <SchemaMarkup />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5">
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact EpoxyArt33
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your floors? Contact us for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 border-gray-200 hover:border-amber-700 hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Call Us</h3>
                <a href="tel:2392761462" className="text-amber-700 font-semibold text-lg hover:text-amber-800">
                  (239) 276-1462
                </a>
                <p className="text-gray-600 text-sm mt-2">Mon-Sat: 8am - 6pm</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:border-amber-700 hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email Us</h3>
                <a href="mailto:epoxyfloorsolutions33@gmail.com" className="text-amber-700 font-semibold hover:text-amber-800 break-all text-sm">
                  epoxyfloorsolutions33@gmail.com
                </a>
                <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:border-amber-700 hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Service Area</h3>
                <p className="text-gray-700 font-medium">Southwest Florida</p>
                <p className="text-gray-600 text-sm mt-2">Naples, Marco Island, Fort Myers & more</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Request a Free Quote</CardTitle>
                <p className="text-center text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                      <select 
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700"
                      >
                        <option value="">Select your location</option>
                        <option value="naples">Naples</option>
                        <option value="marco-island">Marco Island</option>
                        <option value="estero">Estero</option>
                        <option value="bonita-beach">Bonita Beach</option>
                        <option value="fort-myers">Fort Myers</option>
                        <option value="cape-coral">Cape Coral</option>
                        <option value="other">Other SWFL Area</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
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
                      <option value="other">Other/Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project: square footage, current condition, timeline, any specific requirements..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-amber-700 hover:bg-amber-800 text-white text-lg py-6">
                    Send Message <ChevronRight className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Areas We Serve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-amber-700 mb-3">Collier County</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Naples</li>
                <li>• Marco Island</li>
                <li>• Golden Gate</li>
                <li>• Immokalee</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-amber-700 mb-3">Lee County</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fort Myers</li>
                <li>• Cape Coral</li>
                <li>• Estero</li>
                <li>• Bonita Springs</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            Don't see your area? <a href="tel:2392761462" className="text-amber-700 font-semibold hover:text-amber-800">Call us</a> - we may still be able to help!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
