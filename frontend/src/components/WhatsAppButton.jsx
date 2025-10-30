import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '12392761462'; // Format: country code + number
  const message = encodeURIComponent('Hola, estoy interesado en sus servicios de epoxy flooring. ¿Pueden darme más información?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div className="hidden md:flex items-center bg-white px-4 py-3 rounded-lg shadow-xl border-2 border-yellow-600 animate-pulse">
            <span className="text-gray-900 font-semibold whitespace-nowrap">
              💬 Chatea con nosotros
            </span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          {/* Pulse animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping"></span>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="relative w-8 h-8 text-white" fill="white" />
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
            1
          </span>
        </a>
      </div>

      {/* Mobile Tooltip */}
      {showTooltip && (
        <div className="md:hidden fixed bottom-24 right-6 z-40 bg-white px-4 py-2 rounded-lg shadow-xl border-2 border-yellow-600 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-semibold text-sm">
              💬 Chatea con nosotros
            </span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-gray-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
