import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const FAQ = () => {
  const faqs = [
    // General Questions
    {
      category: 'General',
      question: 'How long does it take to install an epoxy floor?',
      answer: 'Most residential projects are completed within 1 day. Larger commercial projects may take 2-3 days depending on size and complexity.'
    },
    {
      category: 'General',
      question: 'How long does an epoxy floor last?',
      answer: 'With proper maintenance, our epoxy floors can last 15-20+ years. We use only the highest quality materials to ensure longevity.'
    },
    {
      category: 'General',
      question: 'Is epoxy resistant to water and chemicals?',
      answer: 'Yes, epoxy is 100% waterproof and highly resistant to chemicals, oils, gasoline, and cleaning products. It is ideal for garages, commercial kitchens, and pool areas.'
    },
    {
      category: 'General',
      question: 'Can I install epoxy over my existing floor?',
      answer: 'In most cases yes. We install epoxy over concrete, tiles, and other existing floors. We do a free evaluation to determine if your current floor is suitable.'
    },
    {
      category: 'General',
      question: 'Is epoxy safe for indoors and pets?',
      answer: 'Absolutely. Once cured (24-48 hours), epoxy is completely safe, non-toxic, and does not emit VOCs. It is safe for children and pets.'
    },
    {
      category: 'General',
      question: 'How long should I wait before using the floor?',
      answer: 'You can walk on the floor after 24 hours. For heavy traffic and vehicles, we recommend waiting 48-72 hours for complete curing.'
    },
    // Systems & Products
    {
      category: 'Systems',
      question: 'What is the Flake system and how does it work?',
      answer: 'The Flake system uses decorative colored flakes that are broadcast onto the epoxy base. It provides slip-resistant texture, hides imperfections, and creates a beautiful, durable finish. We use premium Torginol flakes.'
    },
    {
      category: 'Systems',
      question: 'What is the difference between metallic epoxy and Flake system?',
      answer: 'Metallic epoxy creates unique 3D effects with metallic pigments, ideal for luxury spaces. The Flake system offers slip-resistant texture with decorative flakes, perfect for garages and pool decks.'
    },
    {
      category: 'Systems',
      question: 'What is the Quartz system?',
      answer: 'The Quartz system is our most durable system, perfect for high-traffic commercial and industrial areas. It combines quartz sand with epoxy resin for maximum impact and chemical resistance.'
    },
    {
      category: 'Systems',
      question: 'What is Polyaspartic coating and why do you use it for pool decks?',
      answer: 'Polyaspartic is a UV-resistant coating that won\'t yellow under Florida\'s intense sun. Unlike traditional epoxy, it maintains its color and finish even with constant UV exposure, making it perfect for outdoor applications like pool decks and patios.'
    },
    {
      category: 'Systems',
      question: 'What is Urethane Cement flooring?',
      answer: 'Urethane Cement (like Duraflex) is an extremely durable flooring system designed for commercial kitchens, food processing, and industrial environments. It can withstand thermal shock, heavy impacts, and aggressive chemical cleaning.'
    },
    {
      category: 'Systems',
      question: 'Can I choose custom colors?',
      answer: 'Yes, we offer a wide range of custom colors and designs. For Flake systems we use Torginol products with hundreds of color combinations available.'
    },
    // Maintenance
    {
      category: 'Maintenance',
      question: 'What maintenance does an epoxy floor require?',
      answer: 'Very little. Simply sweep and mop regularly with water and mild soap. No sealing or special treatments needed. Epoxy is one of the easiest floors to maintain.'
    },
    {
      category: 'Maintenance',
      question: 'Does epoxy become slippery when wet?',
      answer: 'Our Flake and Quartz systems provide excellent traction even when wet. For pool areas, we add additional anti-slip texture.'
    },
    {
      category: 'Maintenance',
      question: 'How do I clean oil stains from my epoxy garage floor?',
      answer: 'For fresh oil spills, blot with paper towels and clean with a degreaser or dish soap. For dried stains, apply degreaser, let sit for 5 minutes, then scrub with a soft brush. Our epoxy resists most stains when cleaned promptly.'
    },
    {
      category: 'Maintenance',
      question: 'Will my epoxy floor fade in the Florida sun?',
      answer: 'For outdoor applications, we use UV-resistant Polyaspartic topcoats specifically designed for Florida\'s intense sun. Indoor epoxy is protected from direct UV and won\'t fade. Our pool deck systems are guaranteed not to yellow.'
    },
    // Cost & Warranty
    {
      category: 'Cost',
      question: 'How much does an epoxy floor cost?',
      answer: 'Cost varies based on size, system type (Flake, Metallic, Quartz), and existing floor condition. For Naples and SWFL, typical garage floors range from $4-15 per square foot depending on the system. We offer free quotes. Call (239) 276-1462 for a no-obligation evaluation.'
    },
    {
      category: 'Cost',
      question: 'Do you offer a warranty?',
      answer: 'Yes, we offer comprehensive warranty on all our work. The specific warranty varies depending on the type of project. Contact us for details.'
    },
    {
      category: 'Cost',
      question: 'Do you offer financing options?',
      answer: 'We accept cash, check, and credit cards. For larger commercial projects, we can discuss payment plans. Contact us to discuss your specific needs.'
    },
    // Location Specific (Naples/SWFL)
    {
      category: 'Location',
      question: 'What areas of SWFL do you serve?',
      answer: 'We serve all of Southwest Florida including Naples, Marco Island, Fort Myers, Cape Coral, Estero, Bonita Springs, Golden Gate, and Lehigh Acres. Our address is 160 15th St SW, Naples, FL 34117.'
    },
    {
      category: 'Location',
      question: 'Do you serve Marco Island?',
      answer: 'Yes! We specialize in pool deck resurfacing and garage floor coating on Marco Island. Our UV-resistant Polyaspartic systems are perfect for the island\'s coastal environment and salt air exposure.'
    },
    {
      category: 'Location',
      question: 'Are you licensed and insured in Florida?',
      answer: 'Yes, EpoxyArt33 LLC is fully licensed and insured in Florida. We carry General Liability insurance and Workers\' Compensation. We are also OSHA 30 certified and registered with SAM.GOV for government contracts.'
    },
    {
      category: 'Location',
      question: 'How does Florida\'s humidity affect epoxy installation?',
      answer: 'Florida\'s high humidity requires special preparation. We use Moisture Vapor Barrier (MVB) primers to prevent delamination and ensure proper adhesion. Our team is experienced in installing epoxy in Southwest Florida\'s unique climate conditions.'
    },
    // Pool Deck Specific
    {
      category: 'Pool Deck',
      question: 'Is epoxy safe around pools and with chlorine?',
      answer: 'Absolutely. Our pool deck systems are specifically designed to resist chlorine, salt water, and pool chemicals. The slip-resistant texture also provides safety around wet areas.'
    },
    {
      category: 'Pool Deck',
      question: 'Will the pool deck coating get too hot in the Florida summer?',
      answer: 'Our light-colored Flake systems reflect heat and stay significantly cooler than bare concrete or dark surfaces. Many clients report their coated decks are comfortable to walk on barefoot even in summer.'
    },
    // Commercial
    {
      category: 'Commercial',
      question: 'Do you work on commercial projects?',
      answer: 'Yes, we specialize in commercial epoxy flooring for restaurants, retail stores, warehouses, medical facilities, and more. We can work around your business hours to minimize disruption.'
    },
    {
      category: 'Commercial',
      question: 'Can you install epoxy in a restaurant kitchen?',
      answer: 'Yes, we install food-safe epoxy and urethane cement systems that meet health code requirements. Our Quartz and Urethane Cement systems are chemical-resistant, easy to clean, and can withstand the demands of commercial kitchens.'
    },
    {
      category: 'Commercial',
      question: 'Do you work with government contracts?',
      answer: 'Yes, EpoxyArt33 is registered with SAM.GOV and can work on federal, state, and municipal projects. We are OSHA 30 certified, licensed, insured, and bonded for government contract work.'
    }
  ];

  // Group FAQs by category
  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Epoxy Flooring FAQ Naples FL | Common Questions SWFL | EpoxyArt33"
        description="Answers to frequently asked questions about epoxy flooring in Naples & SWFL. Installation time, durability, maintenance, costs, warranty & more. Expert answers from EpoxyArt33."
        keywords="epoxy flooring FAQ Naples, epoxy floor questions Fort Myers, garage floor FAQ SWFL, epoxy maintenance questions, epoxy cost questions, flooring FAQ Naples"
        url="/faq"
      />
      <SchemaMarkup 
        data={{
          "@type": "FAQPage",
          "@id": "https://epoxyart33.com/faq#faqpage",
          "name": "EpoxyArt33 FAQ",
          "description": "Frequently asked questions about epoxy flooring"
        }}
      />
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-4 py-1.5">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            FAQ - Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Answers to the most common questions about epoxy floors in Southwest Florida.
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
            Have More Questions?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Contact us directly and we'll gladly answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-yellow-700 hover:bg-gray-100">
                Send Message
              </Button>
            </Link>
            <a href="tel:2392761462">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-yellow-700">
                Call (239) 276-1462
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