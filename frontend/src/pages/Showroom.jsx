import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ChevronRight, Package, Palette, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const Showroom = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sampleType: '',
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: formData.sampleType }),
      });
      if (response.ok) {
        toast.success('Sample request submitted! We will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', sampleType: '', message: '' });
      } else {
        toast.error('Failed to submit. Please call us directly.');
      }
    } catch (error) {
      toast.error('Failed to submit. Please call us directly.');
    }
  };

  const flakeSamples = [
    { name: 'Classic Gray', colors: 'Black, White, Gray Mix', image: '/images/gallery/garage-1.jpg' },
    { name: 'Ocean Blue', colors: 'Blue, Teal, White', image: '/images/gallery/pool-deck-1.jpg' },
    { name: 'Desert Tan', colors: 'Tan, Brown, Beige', image: '/images/gallery/pool-deck-2.jpg' },
    { name: 'Midnight Black', colors: 'Black, Silver, Charcoal', image: '/images/gallery/garage-2.jpg' },
    { name: 'Coastal Blend', colors: 'Blue, Gray, White', image: '/images/gallery/pool-deck-3.jpg' },
    { name: 'Neutral Mix', colors: 'Beige, White, Tan', image: '/images/gallery/garage-3.jpg' }
  ];

  const quartzSamples = [
    { name: 'Clear Quartz', color: 'Transparent with colored quartz', image: '/images/gallery/commercial-kitchen.jpg' },
    { name: 'Beige Quartz', color: 'Natural beige with sand tones', image: '/images/gallery/kitchen-quartz-1.jpg' },
    { name: 'Gray Quartz', color: 'Contemporary gray finish', image: '/images/gallery/kitchen-quartz-2.jpg' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-1.5">
            Material Samples
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            EpoxyArt33 Showroom
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our premium Targinol Flake Systems and Quartz options. Request free samples for your project.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Palette className="w-10 h-10 text-yellow-600" />
              <h2 className="text-4xl font-bold text-gray-900">Targinol Flake Systems</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use premium Targinol flake products - the industry leader in decorative epoxy flakes. 
              Beautiful, durable, and available in hundreds of custom color combinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flakeSamples.map((sample, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-yellow-600 hover:shadow-xl transition-all group">
                <div className="overflow-hidden">
                  <img 
                    src={sample.image} 
                    alt={sample.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{sample.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="border-yellow-600 text-yellow-700 mt-2">
                      Targinol Premium
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>Colors:</strong> {sample.colors}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Slip-resistant texture</li>
                    <li>• UV stable colors</li>
                    <li>• Easy to clean</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-bold text-xl text-gray-900 mb-3">Why Targinol Flakes?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <strong>✓ Premium Quality:</strong> Industrial-grade decorative flakes
              </div>
              <div>
                <strong>✓ Color Fast:</strong> Won't fade in Florida sun
              </div>
              <div>
                <strong>✓ Unlimited Designs:</strong> Mix and match colors
              </div>
              <div>
                <strong>✓ Safety First:</strong> Anti-slip texture when wet
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-10 h-10 text-yellow-600" />
              <h2 className="text-4xl font-bold text-gray-900">Quartz Epoxy Systems</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most durable option. Quartz systems combine colored quartz sand with high-performance epoxy 
              for maximum durability. Perfect for commercial kitchens and high-traffic areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quartzSamples.map((sample, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-yellow-600 hover:shadow-xl transition-all group">
                <div className="overflow-hidden">
                  <img 
                    src={sample.image} 
                    alt={sample.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{sample.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{sample.color}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Heavy-duty durability</li>
                    <li>• Chemical resistant</li>
                    <li>• Food-safe certified</li>
                    <li>• Seamless & hygienic</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white border-2 border-gray-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-bold text-xl text-gray-900 mb-3">Quartz System Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <strong>✓ Extreme Durability:</strong> Handles heavy equipment
              </div>
              <div>
                <strong>✓ Chemical Proof:</strong> Resists acids and oils
              </div>
              <div>
                <strong>✓ Easy Maintenance:</strong> Simple to clean & sanitize
              </div>
              <div>
                <strong>✓ Long Lifespan:</strong> 15-20+ years of service
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-10 h-10 text-yellow-600" />
              <h2 className="text-4xl font-bold text-gray-900">Request Free Samples</h2>
            </div>
            <p className="text-xl text-gray-600">
              Want to see and feel the quality for yourself? Request free samples of our Targinol Flake or Quartz systems.
            </p>
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
                      className="border-gray-300 focus:border-yellow-600 focus:ring-yellow-600"
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
                      className="border-gray-300 focus:border-yellow-600 focus:ring-yellow-600"
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
                      className="border-gray-300 focus:border-yellow-600 focus:ring-yellow-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sample Type *</label>
                    <select 
                      name="sampleType"
                      value={formData.sampleType}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                    >
                      <option value="">Select sample type</option>
                      <option value="flake">Targinol Flake System</option>
                      <option value="quartz">Quartz System</option>
                      <option value="both">Both Flake & Quartz</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project: location, square footage, preferred colors, etc."
                    rows={4}
                    className="border-gray-300 focus:border-yellow-600 focus:ring-yellow-600"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white text-lg py-6">
                  Request Free Samples <ChevronRight className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Visit our showroom or schedule a free consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2392761462">
              <Button size="lg" className="bg-white text-yellow-700 hover:bg-gray-100">
                Call (239) 276-1462
              </Button>
            </a>
            <a href="https://wa.me/12392761462" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-yellow-700">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showroom;
