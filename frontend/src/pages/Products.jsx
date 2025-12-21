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
      description: 'Torginol es el fabricante líder en materiales decorativos para pisos. Con más de 40 años de experiencia, sus productos son reconocidos mundialmente por su calidad superior y durabilidad excepcional.',
      logo: '/images/logos/torginol-logo.svg',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      products: [
        {
          name: 'Flakes Decorativos',
          description: 'Hojuelas de polímero de alta calidad disponibles en cientos de colores y mezclas personalizadas.',
          benefits: [
            'Más de 200 colores disponibles',
            'Mezclas personalizadas únicas',
            'Resistencia a químicos y abrasión',
            'Superficie antideslizante',
            'Fácil mantenimiento'
          ],
          icon: Palette
        },
        {
          name: 'Quartz Broadcast',
          description: 'Agregados de cuarzo-resina para máxima durabilidad y resistencia al deslizamiento.',
          benefits: [
            'Más de 40 colores',
            'Grados para broadcast (40-S) y llana (25-A)',
            'Extremadamente duradero',
            'Ideal para alto tráfico',
            'Resistente a productos químicos'
          ],
          icon: Shield
        },
        {
          name: 'Pigmentos Metálicos',
          description: 'Pigmentos especiales para crear efectos metálicos 3D únicos y espectaculares.',
          benefits: [
            'Efectos 3D brillantes',
            'Patrones únicos irrepetibles',
            'Acabado tipo mármol',
            'Alta reflectividad',
            'Durabilidad superior'
          ],
          icon: Sparkles
        }
      ]
    },
    {
      id: 'chemtec',
      name: 'Chemtec',
      tagline: 'Epoxy 100% Sólidos de Calidad Premium',
      website: 'https://epoxychemtec.com',
      description: 'Chemtec es un fabricante canadiense especializado en recubrimientos epóxicos de alta calidad. Su línea CHEM 100 representa lo mejor en tecnología de epoxy 100% sólidos sin VOCs.',
      logo: '/images/logos/chemtec-logo.svg',
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      products: [
        {
          name: 'CHEM 100 Fast Cure',
          description: 'Epoxy 100% sólidos de curado rápido para proyectos con tiempo limitado.',
          benefits: [
            '100% sólidos - sin VOCs',
            'Curado rápido en 24 horas',
            'Cobertura: 200 ft²/galón',
            'Certificado para contacto con alimentos',
            'Adhiere al concreto perfectamente'
          ],
          icon: Zap
        },
        {
          name: 'CHEM 100 Slow Cure',
          description: 'Epoxy 100% sólidos con tiempo de trabajo extendido para proyectos grandes.',
          benefits: [
            '100% sólidos - cero diluyentes',
            'Mayor tiempo de trabajo',
            'Ideal para áreas grandes',
            'Nivelación superior',
            'Acabado profesional'
          ],
          icon: Clock
        },
        {
          name: 'Crack Filler',
          description: 'Relleno de grietas de alta resistencia para preparación perfecta del concreto.',
          benefits: [
            'Rellena grietas profundas',
            'Alta resistencia a compresión',
            'Curado rápido',
            'Compatible con epoxy',
            'Acabado liso'
          ],
          icon: Shield
        }
      ]
    },
    {
      id: 'florida-paint',
      name: 'Florida Paints',
      tagline: 'Polyaspartic 98% Sólidos - Tecnología de Florida',
      website: 'https://floridapaints.com',
      description: 'Florida Paints es un fabricante estadounidense que produce el Flo-Spartic, un polyaspartic de 98.5% sólidos diseñado específicamente para resistir el clima de Florida y áreas con alta exposición UV.',
      logo: '/images/logos/florida-paint-logo.svg',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      products: [
        {
          name: 'Flo-Spartic 98% Sólidos',
          description: 'Recubrimiento polyaspartic de ultra alto contenido sólido para máxima protección UV.',
          benefits: [
            '98.5% sólidos - casi cero VOCs',
            'NO amarillea con el sol',
            'Resistencia UV superior',
            'Curado en 6 horas',
            'Ideal para pool decks y exteriores'
          ],
          icon: Sun
        },
        {
          name: 'Color Pods',
          description: 'Sistema de tintado para crear acabados opacos o translúcidos personalizados.',
          benefits: [
            'Colores personalizados',
            'Fácil mezcla',
            'Acabados únicos',
            'Compatible con Flo-Spartic',
            'Consistencia garantizada'
          ],
          icon: Palette
        },
        {
          name: 'Speed-Fill',
          description: 'Relleno de poliurea de curado ultra rápido para reparaciones de concreto.',
          benefits: [
            'Curado en minutos',
            'Alta flexibilidad',
            'Resistente a impactos',
            'Fácil aplicación',
            'Compatible con todos los sistemas'
          ],
          icon: Zap
        }
      ]
    }
  ];

  const whyPremiumProducts = [
    {
      icon: Shield,
      title: 'Durabilidad Garantizada',
      description: 'Nuestros productos premium duran 3x más que las alternativas económicas del mercado.'
    },
    {
      icon: Award,
      title: 'Certificaciones',
      description: 'Todos nuestros productos cumplen con las normas más estrictas de calidad y seguridad.'
    },
    {
      icon: Factory,
      title: 'Fabricantes Reconocidos',
      description: 'Trabajamos exclusivamente con marcas líderes de la industria con décadas de experiencia.'
    },
    {
      icon: Droplets,
      title: 'Resistencia Superior',
      description: 'Resistencia a químicos, agua, aceites y abrasión para cualquier ambiente.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Premium Epoxy Products Naples FL | Torginol, Chemtec, Florida Paints | EpoxyArt33"
        description="We use only premium epoxy products: Torginol flakes & quartz, Chemtec 100% solids epoxy, Florida Paints 98% polyaspartic. Professional-grade materials for lasting results in SWFL."
        keywords="Torginol flakes Naples, Chemtec epoxy Fort Myers, Florida Paints polyaspartic, 100% solids epoxy, premium epoxy products SWFL, professional floor coating materials"
        url="/products"
      />
      <SchemaMarkup 
        data={{
          "@type": "Product",
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
                  Materiales Premium
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Productos de <span className="text-yellow-500">Calidad Superior</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                En EpoxyArt33 utilizamos exclusivamente productos premium de los fabricantes más reconocidos de la industria. 
                La calidad de nuestros materiales es la base de resultados excepcionales.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Badge variant="outline" className="border-blue-400 text-blue-400 px-4 py-2">
                  Torginol Partner
                </Badge>
                <Badge variant="outline" className="border-green-400 text-green-400 px-4 py-2">
                  Chemtec Certified
                </Badge>
                <Badge variant="outline" className="border-orange-400 text-orange-400 px-4 py-2">
                  Florida Paints Pro
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
                ¿Por Qué Usamos Solo Productos Premium?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                La diferencia entre un piso epóxico que dura 5 años y uno que dura 20+ años está en la calidad de los materiales.
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
                  {/* Logo Placeholder - SVG Brand Icon */}
                  <motion.div 
                    className={`w-32 h-32 rounded-xl bg-gradient-to-br ${supplier.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-3xl font-bold">{supplier.name.charAt(0)}</span>
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
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Beneficios:</h4>
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

      {/* MVB Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-white text-amber-800 hover:bg-gray-100">
                  <Shield className="w-4 h-4 mr-2 inline" />
                  Tecnología Especializada
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  MVB: Barrera de Vapor de Humedad
                </h2>
                <p className="text-amber-100 text-lg mb-6">
                  En Florida, la humedad del concreto es uno de los mayores enemigos de los pisos epóxicos. 
                  Por eso utilizamos sistemas MVB (Moisture Vapor Barrier) de 100% sólidos que bloquean 
                  completamente la migración de humedad desde el substrato.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Bloquea hasta 25 lbs de presión de vapor',
                    'Previene delaminación y burbujas',
                    'Extiende la vida útil 3x',
                    'Obligatorio en sótanos y losas sobre tierra',
                    'Garantía extendida incluida'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-amber-700" />
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
                  <h3 className="text-2xl font-bold mb-4">¿Por Qué es Crítico el MVB?</h3>
                  <p className="text-amber-100 mb-6">
                    El 80% de las fallas en pisos epóxicos en Florida se deben a problemas de humedad. 
                    Nuestro sistema MVB elimina este riesgo por completo.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">100%</div>
                      <div className="text-sm text-amber-200">Sólidos</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">0</div>
                      <div className="text-sm text-amber-200">VOCs</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">25+</div>
                      <div className="text-sm text-amber-200">Años de Vida</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">24h</div>
                      <div className="text-sm text-amber-200">Curado</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Listo Para Un Piso de Calidad Premium?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contáctenos hoy para una consulta gratuita y descubra cómo nuestros productos premium 
              pueden transformar su espacio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full sm:w-auto">
                    Solicitar Cotización Gratis
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/gallery">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto">
                    Ver Nuestros Proyectos
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
