import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { galleryItems } from '../mock';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGallery = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Epoxy Flooring Gallery Naples FL | Project Photos SWFL | EpoxyArt33"
        description="Browse stunning epoxy floor installations in Naples, Fort Myers & SWFL. Garage floors, metallic epoxy, pool decks, commercial projects. 500+ completed projects. Get inspired!"
        keywords="epoxy flooring gallery Naples, epoxy floor photos Fort Myers, garage floor pictures SWFL, metallic epoxy gallery, pool deck photos, before after epoxy floors, epoxy project gallery"
        url="/gallery"
      />
      <SchemaMarkup 
        data={{
          "@type": "ImageGallery",
          "name": "EpoxyArt33 Project Gallery",
          "description": "Gallery of epoxy flooring installations in Southwest Florida"
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5">
            Our Work
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            EpoxyArt33 Project Gallery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Browse our stunning epoxy flooring installations across Naples, Marco Island, Fort Myers, and Southwest Florida.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's bring your vision to life with premium epoxy flooring.
          </p>
          <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100" onClick={() => window.location.href='/contact'}>
            Get Free Estimate
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;