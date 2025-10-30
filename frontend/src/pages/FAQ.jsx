import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does it take to install an epoxy floor?',
      answer: 'Most residential projects are completed within 1 day. Larger commercial projects may take 2-3 days depending on size and complexity.'
    },
    {
      question: 'How long does an epoxy floor last?',
      answer: 'With proper maintenance, our epoxy floors can last 15-20+ years. We use only the highest quality materials to ensure longevity.'
    },
    {
      question: 'Is epoxy resistant to water and chemicals?',
      answer: 'Yes, epoxy is 100% waterproof and highly resistant to chemicals, oils, gasoline, and cleaning products. It is ideal for garages, commercial kitchens, and pool areas.'
    },
    {
      question: 'What is the Flake system and how does it work?',
      answer: 'The Flake system uses decorative colored flakes that are broadcast onto the epoxy base. It provides slip-resistant texture, hides imperfections, and creates a beautiful, durable finish. We use premium Targinol flakes.'
    },
    {
      question: 'What is the difference between metallic epoxy and Flake system?',
      answer: 'Metallic epoxy creates unique 3D effects with metallic pigments, ideal for luxury spaces. The Flake system offers slip-resistant texture with decorative flakes, perfect for garages and pool decks.'
    },
    {
      question: 'Can I install epoxy over my existing floor?',
      answer: 'In most cases yes. We install epoxy over concrete, tiles, and other existing floors. We do a free evaluation to determine if your current floor is suitable.'
    },
    {
      question: 'Is epoxy safe for indoors and pets?',
      answer: 'Absolutely. Once cured (24-48 hours), epoxy is completely safe, non-toxic, and does not emit VOCs. It is safe for children and pets.'
    },
    {
      question: 'What maintenance does an epoxy floor require?',
      answer: 'Very little. Simply sweep and mop regularly with water and mild soap. No sealing or special treatments needed. Epoxy is one of the easiest floors to maintain.'
    },
    {
      question: 'Does epoxy become slippery when wet?',
      answer: 'Our Flake and Quartz systems provide excellent traction even when wet. For pool areas, we add additional anti-slip texture.'
    },
    {
      question: 'Do you offer a warranty?',
      answer: 'Yes, we offer comprehensive warranty on all our work. The specific warranty varies depending on the type of project. Contact us for details.'
    },
    {
      question: 'How much does an epoxy floor cost?',
      answer: 'Cost varies based on size, system type (Flake, Metallic, Quartz), and existing floor condition. We offer free quotes. Call (239) 276-1462 for a no-obligation evaluation.'
    },
    {
      question: 'What areas of SWFL do you serve?',
      answer: 'We serve all of Southwest Florida including Naples, Marco Island, Fort Myers, Cape Coral, Estero, and Bonita Springs.'
    },
    {
      question: 'Can I choose custom colors?',
      answer: 'Yes, we offer a wide range of custom colors and designs. For Flake systems we use Targinol products with hundreds of color combinations available.'
    },
    {
      question: 'What is the Quartz system?',
      answer: 'The Quartz system is our most durable system, perfect for high-traffic commercial and industrial areas. It combines quartz sand with epoxy resin for maximum impact and chemical resistance.'
    },
    {
      question: 'How long should I wait before using the floor?',
      answer: 'You can walk on the floor after 24 hours. For heavy traffic and vehicles, we recommend waiting 48-72 hours for complete curing.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-1.5">
            Preguntas Frecuentes
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            FAQ - Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Respuestas a las preguntas más comunes sobre pisos de epoxy en Southwest Florida.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-gray-200 rounded-lg px-6 hover:border-yellow-600 transition-colors">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-700 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Tienes Más Preguntas?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Contáctanos directamente y con gusto responderemos todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-yellow-700 hover:bg-gray-100">
                Enviar Mensaje
              </Button>
            </Link>
            <a href="tel:2392761462">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-yellow-700">
                Llamar (239) 276-1462
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;