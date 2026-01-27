import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Check, 
  Shield, 
  Landmark, 
  FileCheck, 
  HardHat, 
  Building2, 
  GraduationCap, 
  Plane,
  BadgeCheck,
  FileText,
  Scale,
  Users,
  Clock,
  Award,
  Phone,
  Mail
} from 'lucide-react';

const GovernmentContracts = () => {
  const governmentFacilities = [
    {
      icon: Building2,
      title: 'Federal Buildings',
      description: 'GSA facilities, federal courthouses, post offices, and administrative buildings.',
      examples: ['GSA Buildings', 'Federal Courthouses', 'Post Offices', 'IRS Facilities']
    },
    {
      icon: Plane,
      title: 'Military Installations',
      description: 'Hangars, barracks, maintenance facilities, and base infrastructure.',
      examples: ['Aircraft Hangars', 'Maintenance Bays', 'Barracks', 'Supply Warehouses']
    },
    {
      icon: GraduationCap,
      title: 'Educational Facilities',
      description: 'Public schools, state universities, vocational centers, and libraries.',
      examples: ['School Cafeterias', 'University Labs', 'Gymnasiums', 'Libraries']
    },
    {
      icon: Landmark,
      title: 'Municipal Buildings',
      description: 'City halls, fire stations, police departments, and public works facilities.',
      examples: ['Fire Stations', 'Police Departments', 'City Halls', 'Public Works']
    },
    {
      icon: Shield,
      title: 'Healthcare Facilities',
      description: 'VA hospitals, county health departments, and public medical facilities.',
      examples: ['VA Hospitals', 'Health Departments', 'Public Clinics', 'Medical Labs']
    },
    {
      icon: Users,
      title: 'Community Facilities',
      description: 'Recreation centers, community centers, public pools, and parks facilities.',
      examples: ['Recreation Centers', 'Community Centers', 'Pool Facilities', 'Parks Buildings']
    }
  ];

  const credentials = [
    {
      icon: Landmark,
      title: 'SAM.GOV Registered',
      description: 'Active registration in the System for Award Management',
      color: 'bg-blue-500'
    },
    {
      icon: HardHat,
      title: 'OSHA 30 Certified',
      description: '30-hour construction safety certification',
      color: 'bg-yellow-500'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'General liability & workers compensation',
      color: 'bg-green-500'
    },
    {
      icon: Scale,
      title: 'Bonded',
      description: 'Financial guarantee of performance',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'W-9 on File',
      description: 'Tax documentation ready',
      color: 'bg-red-500'
    },
    {
      icon: BadgeCheck,
      title: 'LLC Registered',
      description: 'Florida registered business entity',
      color: 'bg-teal-500'
    }
  ];

  const flooringSystems = [
    {
      name: 'High-Traffic Flake Systems',
      description: 'Durable, slip-resistant floors for corridors, common areas, and high-traffic zones.',
      ideal: 'Hallways, lobbies, break rooms'
    },
    {
      name: 'Urethane Cement',
      description: 'FDA/USDA compliant flooring for food service areas and commercial kitchens.',
      ideal: 'Cafeterias, kitchens, food prep'
    },
    {
      name: 'Chemical-Resistant Epoxy',
      description: 'Industrial-grade protection for maintenance facilities and laboratories.',
      ideal: 'Labs, maintenance bays, workshops'
    },
    {
      name: 'Waterproofing Systems',
      description: 'TREMCO 350/351 for exterior walkways, balconies, and covered areas.',
      ideal: 'Walkways, covered areas, terraces'
    },
    {
      name: 'Solid Color Epoxy',
      description: 'Clean, professional appearance for administrative and office spaces.',
      ideal: 'Offices, storage, utility rooms'
    },
    {
      name: 'Quartz Broadcast',
      description: 'Maximum durability for warehouses, garages, and heavy equipment areas.',
      ideal: 'Warehouses, vehicle bays, storage'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Government Epoxy Flooring Contractor Naples FL | SAM.GOV Registered | Federal State Municipal | EpoxyArt33"
        description="SAM.GOV registered epoxy flooring contractor for federal, state & municipal projects in SWFL. OSHA 30 certified, fully insured, bonded. Government facilities, military, schools. (239) 276-1462"
        keywords="government epoxy contractor Naples, SAM.GOV registered flooring, federal building flooring Florida, municipal flooring contractor SWFL, military base flooring, school flooring contractor, government contract epoxy, public facility flooring Naples FL"
        url="/government-contracts"
      />
      <SchemaMarkup 
        data={{
          "@type": "Service",
          "@id": "https://epoxyart33.com/government-contracts#service",
          "name": "Government Contract Flooring Services",
          "description": "SAM.GOV registered epoxy flooring contractor for federal, state, and municipal government facilities",
          "areaServed": "Southwest Florida",
          "serviceType": "Government Contract Flooring"
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold mb-6">
              <Landmark className="w-5 h-5" />
              SAM.GOV REGISTERED CONTRACTOR
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Government <span className="text-yellow-400">Flooring Contractor</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Qualified for federal, state, and municipal contracts. OSHA 30 certified, fully insured, and bonded. Serving government facilities throughout Southwest Florida.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                  Request Quote
                </Button>
              </Link>
              <a href="tel:239-276-1462">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  (239) 276-1462
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SAM.GOV Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">SAM.GOV Registered</h2>
              <p className="text-xl text-gray-600">
                EpoxyArt33 is officially registered in the System for Award Management (SAM), 
                the federal government's primary database for contractor registration.
              </p>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">What This Means For You</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Verified and vetted business entity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Eligible for federal contract awards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Compliant with federal acquisition regulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tax identification verified</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">No federal exclusions or debarments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Contract Types We Accept</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Federal government contracts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">State of Florida contracts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">County and municipal contracts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">School district contracts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Public-private partnership projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Government-Ready Credentials</h2>
            <p className="text-xl text-gray-300">Every certification and credential needed for public sector work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {credentials.map((cred, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
                <div className={`w-14 h-14 ${cred.color} rounded-full flex items-center justify-center mb-4`}>
                  <cred.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cred.title}</h3>
                <p className="text-gray-300">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Facilities We Serve</h2>
            <p className="text-xl text-gray-600">Experience across all types of government and public facilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {governmentFacilities.map((facility, index) => (
              <Card key={index} className="border-2 hover:shadow-xl hover:border-blue-300 transition-all">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <facility.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.examples.map((example, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flooring Systems for Government */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Government-Grade Flooring Systems</h2>
            <p className="text-xl text-gray-600">Solutions designed for durability, safety, and compliance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {flooringSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{system.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{system.description}</p>
                <div className="text-xs text-blue-600 font-semibold">
                  Ideal for: {system.ideal}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services.html">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Government Agencies Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Government Agencies Choose EpoxyArt33</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compliance Ready</h3>
              <p className="text-gray-600">
                All documentation, insurance certificates, and credentials ready for procurement requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of project timelines and budget constraints in public sector work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Premium materials and professional installation that meets government quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-600">
                OSHA 30 certified team ensures safe operations on government facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process for Government Clients */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process for Government Projects</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">1</div>
              <h4 className="font-bold mb-1">Initial Contact</h4>
              <p className="text-sm text-gray-600">Submit RFQ or contact us directly for quote</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">2</div>
              <h4 className="font-bold mb-1">Site Assessment</h4>
              <p className="text-sm text-gray-600">Free on-site evaluation and measurements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">3</div>
              <h4 className="font-bold mb-1">Proposal & Docs</h4>
              <p className="text-sm text-gray-600">Detailed quote with all required documentation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">4</div>
              <h4 className="font-bold mb-1">Installation</h4>
              <p className="text-sm text-gray-600">Professional installation with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">5</div>
              <h4 className="font-bold mb-1">Final Inspection</h4>
              <p className="text-sm text-gray-600">Walkthrough and documentation for closeout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Discuss Your Government Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. All required documentation available upon request.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                Request Quote
              </Button>
            </Link>
            <a href="tel:239-276-1462">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                (239) 276-1462
              </Button>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" />
              <a href="mailto:epoxyfloorsolutions33@gmail.com" className="hover:text-yellow-400">
                epoxyfloorsolutions33@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GovernmentContracts;
