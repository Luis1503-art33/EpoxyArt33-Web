import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'All Services', path: '/services' },
    { name: 'Garage Floor Coating', path: '/garage-floor-coating' },
    { name: 'Metallic Epoxy', path: '/metallic-epoxy' },
    { name: 'Flake System', path: '/flake-system' },
    { name: 'Quartz System', path: '/quartz-system' },
    { name: 'Pool Deck Resurfacing', path: '/pool-deck-resurfacing' },
    { name: 'Commercial Epoxy', path: '/commercial-epoxy' },
    { name: 'Industrial Epoxy', path: '/industrial-epoxy' },
    { name: 'Concrete Repair', path: '/concrete-repair' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/98 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="EpoxyArt33" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center font-medium text-gray-700 hover:text-amber-700 transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/gallery"
              className={`font-medium transition-colors ${
                isActive('/gallery') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/showroom"
              className={`font-medium transition-colors ${
                isActive('/showroom') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Showroom
            </Link>

            <Link
              to="/why"
              className={`font-medium transition-colors ${
                isActive('/why') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Why EpoxyArt33
            </Link>

            <Link
              to="/faq"
              className={`font-medium transition-colors ${
                isActive('/faq') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/blog"
              className={`font-medium transition-colors ${
                isActive('/blog') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Contact
            </Link>

            <a href="tel:2392761462" className="flex items-center">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                <Phone className="w-4 h-4 mr-2" />
                (239) 276-1462
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-amber-700 transition-colors font-medium"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-amber-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Gallery
            </Link>

            <Link
              to="/why"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Why EpoxyArt33
            </Link>

            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              FAQ
            </Link>

            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Contact
            </Link>

            <a href="tel:2392761462" className="block">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white w-full">
                <Phone className="w-4 h-4 mr-2" />
                (239) 276-1462
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;