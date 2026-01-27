import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/images/logo.png" alt="EpoxyArt33" className="h-16 w-auto mb-4 brightness-200" />
            <p className="text-gray-400 text-sm mb-4">
              Art Beneath Your Feet - Premium epoxy flooring solutions in Southwest Florida.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61559227113329" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/epoxy_art33" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.google.com/maps/place/EpoxyArt33.llc/@26.5890753,-82.5104911,9z/data=!3m1!4b1!4m6!3m5!1s0xa1b7e7669350223d:0x430bcad060a86d2f!8m2!3d26.590594!4d-81.851101!16s%2Fg%2F11xkzl1tvp?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors" aria-label="Google Business">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/garage-floor-coating.html" className="hover:text-amber-500 transition-colors">Garage Floor Coating</Link></li>
              <li><Link to="/metallic-epoxy.html" className="hover:text-amber-500 transition-colors">Metallic Epoxy</Link></li>
              <li><Link to="/flake-system.html" className="hover:text-amber-500 transition-colors">Flake System</Link></li>
              <li><Link to="/quartz-system.html" className="hover:text-amber-500 transition-colors">Quartz System</Link></li>
              <li><Link to="/pool-deck-resurfacing.html" className="hover:text-amber-500 transition-colors">Pool Deck Resurfacing</Link></li>
              <li><Link to="/commercial-epoxy.html" className="hover:text-amber-500 transition-colors">Commercial Epoxy</Link></li>
              <li><Link to="/industrial-epoxy.html" className="hover:text-amber-500 transition-colors">Industrial Epoxy</Link></li>
              <li><Link to="/driveway-resurfacing.html" className="hover:text-amber-500 transition-colors">Driveway Resurfacing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/services.html" className="hover:text-amber-500 transition-colors">All Services</Link></li>
              <li><Link to="/gallery.html" className="hover:text-amber-500 transition-colors">Gallery</Link></li>
              <li><Link to="/why-epoxyart33.html" className="hover:text-amber-500 transition-colors">Why EpoxyArt33</Link></li>
              <li><Link to="/faq.html" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
              <li><Link to="/blog.html" className="hover:text-amber-500 transition-colors">Blog</Link></li>
              <li><Link to="/showroom.html" className="hover:text-amber-500 transition-colors">Showroom</Link></li>
              <li><Link to="/privacy.html" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-amber-500" />
                <a href="tel:2392761462" className="hover:text-amber-500 transition-colors">(239) 276-1462</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-amber-500" />
                <a href="mailto:epoxyfloorsolutions33@gmail.com" className="hover:text-amber-500 transition-colors break-all">
                  epoxyfloorsolutions33@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-amber-500" />
                <span>Serving Southwest Florida</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Service Areas:</p>
              <p className="text-xs text-gray-400">Naples • Marco Island • Estero • Bonita Beach • Fort Myers • Cape Coral • SWFL</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} EpoxyArt33. All rights reserved. | Art Beneath Your Feet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
