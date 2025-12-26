import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import ScrollReveal from '../components/ScrollReveal';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { galleryItems } from '../mock';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

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
          "@id": "https://epoxyart33.com/gallery#gallery",
          "name": "EpoxyArt33 Project Gallery",
          "description": "Gallery of epoxy flooring installations in Southwest Florida"
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5">
                Our Work
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              EpoxyArt33 Project Gallery
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Browse our stunning epoxy flooring installations across Naples, Marco Island, Fort Myers, and Southwest Florida.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          {/* Animated Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {['All', 'Residential', 'Commercial', 'Industrial'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                <Button
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`transition-all duration-300 ${selectedCategory === category ? 'bg-amber-700 hover:bg-amber-800 scale-105' : 'hover:border-amber-700 hover:text-amber-700'}`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Gallery Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedImage(item)}
                >
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-72 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge className="w-fit mb-2 bg-amber-700">{item.category}</Badge>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <Badge className="mb-2 bg-amber-700">{selectedImage.category}</Badge>
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              </div>
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Your Own Masterpiece?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Let's bring your vision to life with premium epoxy flooring.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 shadow-lg" onClick={() => window.location.href='/contact'}>
                Get Free Estimate
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;