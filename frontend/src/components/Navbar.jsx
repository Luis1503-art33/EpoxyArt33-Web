import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'All Services', path: '/services.html' },
    { name: 'Garage Floor Coating', path: '/garage-floor-coating.html' },
    { name: 'Metallic Epoxy', path: '/metallic-epoxy.html' },
    { name: 'Flake System', path: '/flake-system.html' },
    { name: 'Quartz System', path: '/quartz-system.html' },
    { name: 'Pool Deck Resurfacing', path: '/pool-deck-resurfacing.html' },
    { name: 'Commercial Epoxy', path: '/commercial-epoxy.html' },
    { name: 'Industrial Epoxy', path: '/industrial-epoxy.html' },
    { name: 'Concrete Repair', path: '/concrete-repair.html' },
    { name: 'Driveway Resurfacing', path: '/driveway-resurfacing.html' },
    { name: 'Waterproofing (TREMCO)', path: '/waterproofing.html' },
    { name: 'Urethane Cement', path: '/urethane-cement.html' },
  ];

  const isActive = (path) => location.pathname === path || location.pathname === path.replace('.html', '');

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
              to="/gallery.html"
              className={`font-medium transition-colors ${
                isActive('/gallery.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/showroom.html"
              className={`font-medium transition-colors ${
                isActive('/showroom.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Showroom
            </Link>

            <Link
              to="/why-epoxyart33.html"
              className={`font-medium transition-colors ${
                isActive('/why-epoxyart33.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Why EpoxyArt33
            </Link>

            <Link
              to="/government-contracts.html"
              className={`font-medium transition-colors ${
                isActive('/government-contracts.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Government
            </Link>

            <Link
              to="/products.html"
              className={`font-medium transition-colors ${
                isActive('/products.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Products
            </Link>

            <Link
              to="/visualizer.html"
              className={`font-medium transition-colors ${
                isActive('/visualizer.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              3D Visualizer
            </Link>

            <Link
              to="/faq.html"
              className={`font-medium transition-colors ${
                isActive('/faq.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/blog.html"
              className={`font-medium transition-colors ${
                isActive('/blog.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact.html"
              className={`font-medium transition-colors ${
                isActive('/contact.html') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
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
              to="/gallery.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Gallery
            </Link>

            <Link
              to="/showroom.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Showroom
            </Link>

            <Link
              to="/why-epoxyart33.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Why EpoxyArt33
            </Link>

            <Link
              to="/government-contracts.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Government Contracts
            </Link>

            <Link
              to="/products.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Products
            </Link>

            <Link
              to="/visualizer.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              3D Visualizer
            </Link>

            <Link
              to="/faq.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              FAQ
            </Link>

            <Link
              to="/blog.html"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Blog
            </Link>

            <Link
              to="/contact.html"
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
