import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t" style={{backgroundColor: '#2e2e2e', borderColor: '#404040'}}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center gap-1">
              Made with <Heart style={{color: '#8b0000'}} size={16} fill="currentColor" /> by Utkarsh Yadav
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © 2024 All rights reserved
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 overflow-hidden" style={{backgroundColor: '#8b0000'}}
          >
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowUp className="text-white relative z-10 group-hover:animate-bounce" size={20} />
            <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;