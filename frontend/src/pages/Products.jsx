import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import ScrollReveal from '../components/ScrollReveal';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Check, 
  Shield, 
  Sparkles, 
  Droplets, 
  Sun, 
  Clock, 
  Award,
  Zap,
  Palette,
  Factory,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Products = () => {
  const suppliers = [
    {
      id: 'torginol',
      name: 'Torginol',
      tagline: 'Industry Leader in Decorative Flooring',
      website: 'https://torginol.com',
      description: 'Torginol is the leading manufacturer of decorative flooring materials. With over 40 years of experience, their products are recognized worldwide for superior quality and exceptional durability.',
      logo: '/images/logos/torginol-logo.jpg',
      hasRealLogo: true,
      color: 'from-red-600 to-red-800',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      products: [
        {
          name: 'Decorative Flakes',
          description: 'High-quality polymer flakes available in hundreds of colors and custom blends.',
          benefits: [
            'Over 200 colors available',
            'Unique custom blends',
            'Chemical & abrasion resistant',
            'Slip-resistant surface',
            'Easy maintenance'
          ],
          icon: Palette
        },
        {
          name: 'Quartz Broadcast',
          description: 'Resin-quartz aggregates for maximum durability and slip resistance.',
          benefits: [
            'Over 40 colors',
            'Broadcast (40-S) and trowel (25-A) grades',
            'Extremely durable',
            'Ideal for high traffic',
            'Chemical resistant'
          ],
          icon: Shield
        },
        {
          name: 'Metallic Pigments',
          description: 'Special pigments to create unique and spectacular 3D metallic effects.',
          benefits: [
            'Brilliant 3D effects',
            'Unique unrepeatable patterns',
            'Marble-like finish',
            'High reflectivity',
            'Superior durability'
          ],
          icon: Sparkles
        }
      ]
    },
    {
      id: 'chemtec',
      name: 'Chemtec',
      tagline: 'Premium Quality 100% Solids Epoxy with MVB',
      website: 'https://epoxychemtec.com',
      description: 'Chemtec is a Canadian manufacturer specializing in high-quality epoxy coatings. Their CHEM 100 line represents the best in 100% solids epoxy technology with built-in Moisture Vapor Barrier (MVB) protection.',
      logo: '/images/logos/chemtec-products.jpg',
      hasRealLogo: true,
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      products: [
        {
          name: 'CHEM 100 Fast Cure',
          description: '100% solids epoxy with fast cure for projects with limited time. Includes MVB technology.',
          benefits: [
            '100% solids - zero VOCs',
            'Built-in MVB protection',
            'Fast cure in 24 hours',
            'Coverage: 200 ft²/gallon',
            'Food contact certified'
          ],
          icon: Zap
        },
        {
          name: 'CHEM 100 Slow Cure',
          description: '100% solids epoxy with extended working time for large projects. Includes MVB technology.',
          benefits: [
            '100% solids - zero solvents',
            'Built-in MVB protection',
            'Extended working time',
            'Ideal for large areas',
            'Professional finish'
          ],
          icon: Clock
        },
        {
          name: 'Crack Filler',
          description: 'High-strength crack filler for perfect concrete preparation.',
          benefits: [
            'Fills deep cracks',
            'High compressive strength',
            'Fast cure',
            'Epoxy compatible',
            'Smooth finish'
          ],
          icon: Shield
        }
      ]
    },
    {
      id: 'florida-paint',
      name: 'Florida Paints',
      tagline: '98% Solids Polyaspartic - Florida Technology',
      website: 'https://floridapaints.com',
      description: 'Florida Paints is an American manufacturer that produces Flo-Spartic, a 98.5% solids polyaspartic specifically designed to withstand Florida climate and areas with high UV exposure.',
      logo: '/images/logos/florida-paints-logo.png',
      hasRealLogo: true,
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      products: [
        {
          name: 'Flo-Spartic 98% Solids',
          description: 'Ultra-high solids polyaspartic coating for maximum UV protection.',
          benefits: [
            '98.5% solids - near zero VOCs',
            'Will NOT yellow in sun',
            'Superior UV resistance',
            'Cures in 6 hours',
            'Perfect for pool decks & exteriors'
          ],
          icon: Sun
        },
        {
          name: 'Color Pods',
          description: 'Tinting system to create custom opaque or translucent finishes.',
          benefits: [
            'Custom colors',
            'Easy mixing',
            'Unique finishes',
            'Flo-Spartic compatible',
            'Guaranteed consistency'
          ],
          icon: Palette
        },
        {
          name: 'Speed-Fill',
          description: 'Ultra-fast curing polyurea filler for concrete repairs.',
          benefits: [
            'Cures in minutes',
            'High flexibility',
            'Impact resistant',
            'Easy application',
            'Compatible with all systems'
          ],
          icon: Zap
        }
      ]
    },
    {
      id: 'premera',
      name: 'Premera',
      tagline: 'Professional Polyaspartic & Polyurea Systems',
      website: 'https://premeracoatings.com',
      description: 'Premera specializes in advanced polyaspartic and polyurea coating systems designed for professional contractors. Their T2 MCM system delivers exceptional performance with fast cure times and superior durability.',
      logo: '/images/logos/premera-t2-mcm.jpg',
      hasRealLogo: true,
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      products: [
        {
          name: 'T2 MCM Polyaspartic',
          description: 'High-performance polyaspartic coating with excellent UV stability and chemical resistance.',
          benefits: [
            'Superior UV stability',
            'Fast 4-6 hour cure',
            'Excellent chemical resistance',
            'High gloss finish',
            'Professional grade'
          ],
          icon: Sun
        },
        {
          name: 'Polyurea Base Coat',
          description: 'Fast-curing polyurea base coat for quick turnaround projects.',
          benefits: [
            'Ultra-fast cure time',
            '100% solids formula',
            'Excellent adhesion',
            'Moisture tolerant',
            'Wide application window'
          ],
          icon: Zap
        },
        {
          name: 'Clear Top Coat',
          description: 'Crystal clear polyaspartic topcoat for maximum protection and shine.',
          benefits: [
            'Crystal clear finish',
            'UV stable - no yellowing',
            'Scratch resistant',
            'Easy to clean',
            'Long-lasting gloss'
          ],
          icon: Sparkles
        }
      ]
    },
    {
      id: 'tremco',
      name: 'TREMCO',
      tagline: 'Vulkem 350/351 Waterproofing System',
      website: 'https://tremcosealants.com',
      description: 'TREMCO is a global leader in sealants and waterproofing solutions. Their Vulkem 350/351 system provides premium moisture vapor barrier protection for concrete decks, balconies, pool decks, and outdoor areas in Southwest Florida.',
      logo: null,
      hasRealLogo: false,
      color: 'from-blue-700 to-blue-900',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      products: [
        {
          name: 'Vulkem 350 Base Coat',
          description: 'Two-component urethane base coat for seamless waterproofing membrane systems.',
          benefits: [
            '100% solids urethane',
            'Seamless waterproof membrane',
            'Crack-bridging capability',
            'UV resistant',
            'Ideal for pool decks Naples FL'
          ],
          icon: Droplets
        },
        {
          name: 'Vulkem 351 Top Coat',
          description: 'Durable wear surface topcoat with aggregate for slip resistance and UV protection.',
          benefits: [
            'Slip-resistant finish',
            'UV stable top coat',
            'Abrasion resistant',
            'Chemical resistant',
            'Perfect for SWFL climate'
          ],
          icon: Shield
        },
        {
          name: 'TREMprime EP Primer',
          description: '100% solids epoxy primer and moisture vapor barrier for high-moisture concrete.',
          benefits: [
            '100% solids epoxy',
            'Blocks moisture vapor',
            'High-moisture tolerance',
            'Excellent adhesion',
            'Essential for Florida concrete'
          ],
          icon: Zap
        }
      ]
    },
    {
      id: 'wolfpack',
      name: 'Wolfpack Equipment',
      tagline: 'Professional Concrete Grinders & Surface Prep',
      website: 'https://wolfpackequipment.com',
      description: 'Wolfpack Equipment manufactures industrial-grade concrete grinders used by professionals across Southwest Florida. We use their equipment to deliver superior surface preparation for flawless epoxy installations.',
      logo: null,
      hasRealLogo: false,
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-100',
      borderColor: 'border-gray-300',
      isEquipment: true,
      products: [
        {
          name: '25" Delta Grinder',
          description: 'Professional 25-inch grinder with 3 heads for efficient large-area preparation.',
          benefits: [
            '25" grinding width',
            '10 HP motor - 300-1800 RPM',
            'Dustless operation',
            'Ergonomic design',
            'Perfect for garages Naples FL'
          ],
          icon: Factory
        },
        {
          name: '27" Beta Grinder',
          description: 'Heavy-duty 27-inch grinder for commercial and industrial projects.',
          benefits: [
            '27" working width',
            '720 lbs grinding pressure',
            '3-phase power option',
            '7-gallon water tank',
            'Commercial grade'
          ],
          icon: Factory
        },
        {
          name: '20" Warrior Grinder',
          description: 'Versatile 20-inch grinder ideal for residential garages and tight spaces.',
          benefits: [
            '20" grinding width',
            'Variable speed control',
            'Adjustable head pressure',
            'Edge grinding capable',
            'Residential specialist'
          ],
          icon: Factory
        }
      ]
    },
    {
      id: 'ez-concrete',
      name: 'EZ Concrete Supply',
      tagline: 'Professional Tools & Application Equipment',
      website: 'https://ez-concretesupply.com',
      description: 'EZ Concrete Supply provides professional-grade tools and equipment for epoxy flooring contractors. From mixers to rollers, their products ensure consistent, high-quality installations throughout Naples, Fort Myers, and SWFL.',
      logo: null,
      hasRealLogo: false,
      color: 'from-orange-600 to-orange-800',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      isEquipment: true,
      products: [
        {
          name: 'Portamix Mixers',
          description: 'Professional epoxy mixers for consistent, bubble-free mixing every time.',
          benefits: [
            'Variable speed control',
            'Dust control options',
            'Perfect epoxy consistency',
            'Reduces air bubbles',
            'Professional results'
          ],
          icon: Factory
        },
        {
          name: 'EZ Epoxy Rollers',
          description: 'Premium lint-free rollers designed specifically for epoxy and polyaspartic coatings.',
          benefits: [
            '3/8" nap - lint free',
            'Dripless application',
            'Even coat distribution',
            'Works with all coatings',
            'Professional finish'
          ],
          icon: Palette
        },
        {
          name: 'Speed Squeegees',
          description: '18-inch speed squeegees for fast, even epoxy application.',
          benefits: [
            '18" working width',
            'Precise mil thickness',
            'One-piece frame',
            'Fast application',
            'Consistent coverage'
          ],
          icon: Zap
        }
      ]
    }
  ];

  const whyPremiumProducts = [
    {
      icon: Shield,
      title: 'Guaranteed Durability',
      description: 'Our premium products last 3x longer than cheap market alternatives.'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'All our products meet the strictest quality and safety standards.'
    },
    {
      icon: Factory,
      title: 'Recognized Manufacturers',
      description: 'We work exclusively with industry-leading brands with decades of experience.'
    },
    {
      icon: Droplets,
      title: 'MVB Protection',
      description: 'All our epoxies include Moisture Vapor Barrier technology to prevent delamination.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Premium Epoxy Products Naples FL | Torginol, Chemtec, Florida Paints | EpoxyArt33"
        description="We use only premium epoxy products: Torginol flakes & quartz, Chemtec 100% solids epoxy with MVB, Florida Paints 98% polyaspartic. Professional-grade materials for lasting results in SWFL."
        keywords="Torginol flakes Naples, Chemtec epoxy Fort Myers, Florida Paints polyaspartic, 100% solids epoxy, MVB moisture vapor barrier, premium epoxy products SWFL, professional floor coating materials"
        url="/products"
      />
      <SchemaMarkup 
        data={{
          "@type": "Product",
          "@id": "https://epoxyart33.com/products#products",
          "name": "Premium Epoxy Flooring Products",
          "description": "Professional-grade epoxy flooring products from Torginol, Chemtec, and Florida Paints",
          "brand": ["Torginol", "Chemtec", "Florida Paints"]
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-2 text-sm font-bold">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Premium Materials
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Superior <span className="text-yellow-500">Quality Products</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                At EpoxyArt33, we exclusively use premium products from the most recognized manufacturers in the industry. 
                The quality of our materials is the foundation of exceptional results.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Badge variant="outline" className="border-red-400 text-red-400 px-3 py-1.5 text-sm">
                  Torginol
                </Badge>
                <Badge variant="outline" className="border-green-400 text-green-400 px-3 py-1.5 text-sm">
                  Chemtec
                </Badge>
                <Badge variant="outline" className="border-teal-400 text-teal-400 px-3 py-1.5 text-sm">
                  Florida Paints
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-400 px-3 py-1.5 text-sm">
                  Premera
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-400 px-3 py-1.5 text-sm">
                  TREMCO
                </Badge>
                <Badge variant="outline" className="border-gray-400 text-gray-400 px-3 py-1.5 text-sm">
                  Wolfpack
                </Badge>
                <Badge variant="outline" className="border-orange-400 text-orange-400 px-3 py-1.5 text-sm">
                  EZ Concrete
                </Badge>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Premium Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why We Only Use Premium Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The difference between an epoxy floor that lasts 5 years and one that lasts 20+ years is in the quality of materials.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPremiumProducts.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full border-2 border-gray-200 hover:border-yellow-500 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-7 h-7 text-yellow-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MVB Feature Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Droplets className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">All Our Epoxies Include MVB Technology</h3>
                <p className="text-amber-100">Moisture Vapor Barrier protection prevents 80% of common floor failures in Florida</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-amber-100">Solids</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-xs text-amber-100">VOCs</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-xs text-amber-100">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers Sections */}
      {suppliers.map((supplier, supplierIndex) => (
        <section 
          key={supplier.id} 
          className={`py-20 px-4 sm:px-6 lg:px-8 ${supplierIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              {/* Supplier Header */}
              <div className={`rounded-2xl ${supplier.bgColor} ${supplier.borderColor} border-2 p-8 mb-12`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logo - Real image or gradient fallback */}
                  <motion.div 
                    className={`w-40 h-32 rounded-xl overflow-hidden shadow-lg flex items-center justify-center ${supplier.hasRealLogo ? 'bg-white p-2' : `bg-gradient-to-br ${supplier.color}`}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {supplier.hasRealLogo ? (
                      <img 
                        src={supplier.logo} 
                        alt={`${supplier.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-white text-3xl font-bold">{supplier.name.charAt(0)}</span>
                    )}
                  </motion.div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{supplier.name}</h2>
                      <a 
                        href={supplier.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-3">{supplier.tagline}</p>
                    <p className="text-gray-600">{supplier.description}</p>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {supplier.products.map((product, productIndex) => (
                  <ScrollReveal key={productIndex} delay={productIndex * 0.15} direction="up">
                    <motion.div
                      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className={`h-full border-2 ${supplier.borderColor} hover:border-yellow-500 transition-all duration-300`}>
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${supplier.color} flex items-center justify-center mb-4`}>
                            <product.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{product.name}</CardTitle>
                          <CardDescription className="text-gray-600">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Benefits:</h4>
                          <ul className="space-y-2">
                            {product.benefits.map((benefit, benefitIndex) => (
                              <motion.li 
                                key={benefitIndex} 
                                className="flex items-start gap-2 text-sm text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: benefitIndex * 0.1 }}
                              >
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* What is MVB Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-yellow-500 text-black hover:bg-yellow-400">
                  <Shield className="w-4 h-4 mr-2 inline" />
                  Critical Technology
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  What is MVB? <span className="text-yellow-500">Moisture Vapor Barrier</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  In Florida, concrete moisture is one of the biggest enemies of epoxy floors. 
                  That's why ALL our epoxy systems include MVB (Moisture Vapor Barrier) technology 
                  that completely blocks moisture migration from the substrate.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Blocks up to 25 lbs of vapor pressure',
                    'Prevents delamination and bubbles',
                    'Extends lifespan 3x',
                    'Mandatory for basements and slabs on grade',
                    'Extended warranty included'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <Droplets className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-bold mb-4">Why is MVB Critical?</h3>
                  <p className="text-gray-300 mb-6">
                    80% of epoxy floor failures in Florida are due to moisture problems. 
                    Our MVB system eliminates this risk completely.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">80%</div>
                      <div className="text-sm text-gray-400">Failures Prevented</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">25 lbs</div>
                      <div className="text-sm text-gray-400">Vapor Blocked</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">3x</div>
                      <div className="text-sm text-gray-400">Longer Life</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">100%</div>
                      <div className="text-sm text-gray-400">Our Projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready For A Premium Quality Floor?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Contact us today for a free consultation and discover how our premium products 
              can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 font-bold w-full sm:w-auto">
                    Get Free Quote
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/gallery">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-700 w-full sm:w-auto">
                    View Our Projects
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
