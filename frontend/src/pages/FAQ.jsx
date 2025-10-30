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
      question: '¿Cuánto tiempo toma instalar un piso de epoxy?',
      answer: 'La mayoría de proyectos residenciales se completan en 1 día. Proyectos comerciales más grandes pueden tomar 2-3 días dependiendo del tamaño y complejidad.'
    },
    {
      question: '¿Cuánto dura un piso de epoxy?',
      answer: 'Con el mantenimiento adecuado, nuestros pisos de epoxy pueden durar 15-20+ años. Usamos solo materiales de la más alta calidad para garantizar longevidad.'
    },
    {
      question: '¿El epoxy es resistente al agua y químicos?',
      answer: 'Sí, el epoxy es 100% impermeable y altamente resistente a químicos, aceites, gasolina y productos de limpieza. Es ideal para garajes, cocinas comerciales y áreas de piscina.'
    },
    {
      question: '¿Qué es el sistema Flake y cómo funciona?',
      answer: 'El sistema Flake utiliza hojuelas decorativas de colores que se esparcen sobre la base de epoxy. Proporciona textura antideslizante, oculta imperfecciones y crea un acabado hermoso y duradero. Usamos flakes premium de Targinol.'
    },
    {
      question: '¿Cuál es la diferencia entre epoxy metálico y sistema Flake?',
      answer: 'El epoxy metálico crea efectos 3D únicos con pigmentos metálicos, ideal para espacios de lujo. El sistema Flake ofrece textura antideslizante con hojuelas decorativas, perfecto para garajes y pool decks.'
    },
    {
      question: '¿Puedo instalar epoxy sobre mi piso existente?',
      answer: 'En la mayoría de casos sí. Instalamos epoxy sobre concreto, baldosas y otros pisos existentes. Hacemos una evaluación gratuita para determinar si su piso actual es adecuado.'
    },
    {
      question: '¿El epoxy es seguro para interiores y mascotas?',
      answer: 'Absolutamente. Una vez curado (24-48 horas), el epoxy es completamente seguro, no tóxico y no emite VOCs. Es seguro para niños y mascotas.'
    },
    {
      question: '¿Qué mantenimiento requiere un piso de epoxy?',
      answer: 'Muy poco. Simplemente barra y trapeé regularmente con agua y jabón suave. No necesita sellado ni tratamientos especiales. El epoxy es uno de los pisos más fáciles de mantener.'
    },
    {
      question: '¿El epoxy se vuelve resbaladizo cuando está mojado?',
      answer: 'Nuestros sistemas Flake y Quartz proporcionan excelente tracción incluso cuando están mojados. Para áreas de piscina, agregamos textura anti-deslizante adicional.'
    },
    {
      question: '¿Ofrecen garantía?',
      answer: 'Sí, ofrecemos garantía integral en todos nuestros trabajos. La garantía específica varía según el tipo de proyecto. Contáctenos para detalles.'
    },
    {
      question: '¿Cuánto cuesta un piso de epoxy?',
      answer: 'El costo varía según el tamaño, tipo de sistema (Flake, Metálico, Quartz) y condición del piso existente. Ofrecemos cotizaciones gratuitas. Llame al (239) 276-1462 para una evaluación sin compromiso.'
    },
    {
      question: '¿En qué áreas de SWFL trabajan?',
      answer: 'Servimos toda el área de Southwest Florida incluyendo Naples, Marco Island, Fort Myers, Cape Coral, Estero y Bonita Springs.'
    },
    {
      question: '¿Puedo elegir colores personalizados?',
      answer: 'Sí, ofrecemos una amplia gama de colores y diseños personalizados. Para sistemas Flake usamos productos Targinol con cientos de combinaciones de colores disponibles.'
    },
    {
      question: '¿Qué es el sistema de Quartz?',
      answer: 'El sistema Quartz es nuestro sistema más duradero, perfecto para áreas de alto tráfico comercial e industrial. Combina arena de cuarzo con resina epoxy para máxima resistencia al impacto y químicos.'
    },
    {
      question: '¿Cuánto tiempo debo esperar antes de usar el piso?',
      answer: 'Puede caminar sobre el piso después de 24 horas. Para tráfico pesado y vehículos, recomendamos esperar 48-72 horas para curado completo.'
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