import React, { useState, useEffect, forwardRef } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageIndex: number) => void;
  pages: Array<{ name: string; id: string }>;
}

const Navbar = forwardRef<any, NavbarProps>(({ currentPage, onNavigate, pages }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Pages where glass effect should be applied
  const glassEffectPages = ['hero', 'about', 'skills'];
  const shouldHaveGlassEffect = glassEffectPages.includes(currentPage);

  const handleNavClick = (pageId: string) => {
    setIsOpen(false);
    const pageIndex = pages.findIndex(page => page.id === pageId);
    if (pageIndex !== -1) {
      onNavigate(pageIndex);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 shadow-2xl border-b border-gray-600/20 ${
        shouldHaveGlassEffect ? 'backdrop-blur-xl' : ''
      }`} 
      style={{background: 'linear-gradient(135deg, #2e2e2e 0%, #1a1a1a 50%, #2e2e2e 100%)'}}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
            <button 
              onClick={() => handleNavClick('hero')}
              className={`transition-all duration-300 font-bold text-xl tracking-wider ${
                currentPage === 'hero' 
                  ? 'text-red-600 font-bold' 
                  : 'text-white/80 hover:text-red-600'
              }`}
              style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-all duration-300 font-bold text-xl tracking-wider ${
                currentPage === 'about' 
                  ? 'text-red-600 font-bold' 
                  : 'text-white/80 hover:text-red-600'
              }`}
              style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('skills')}
              className={`transition-all duration-300 font-bold text-xl tracking-wider ${
                currentPage === 'skills' 
                  ? 'text-red-600 font-bold' 
                  : 'text-white/80 hover:text-red-600'
              }`}
              style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className={`transition-all duration-300 font-bold text-xl tracking-wider ${
                currentPage === 'projects' 
                  ? 'text-red-600 font-bold' 
                  : 'text-white/80 hover:text-red-600'
              }`}
              style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`transition-all duration-300 font-bold text-xl tracking-wider ${
                currentPage === 'contact' 
                  ? 'text-red-600 font-bold' 
                  : 'text-white/80 hover:text-red-600'
              }`}
              style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
            >
              Contact
            </button>
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:flex items-center">
            <button className="group relative text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden shadow-lg shadow-red-500/30 tracking-wider" style={{backgroundColor: '#8b0000', fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}>
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-2">
                <Download size={16} className="group-hover:animate-bounce" />
                Hire Me
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div 
              className={`px-4 pt-4 pb-6 space-y-2 rounded-2xl mt-4 border border-gray-600/30 shadow-2xl ${
                shouldHaveGlassEffect ? 'backdrop-blur-xl' : ''
              }`} 
              style={{background: 'linear-gradient(135deg, #2e2e2e 0%, #1a1a1a 50%, #2e2e2e 100%)'}}
            >
              <button 
                onClick={() => handleNavClick('hero')}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-bold tracking-wider ${
                  currentPage === 'hero'
                    ? 'text-red-400 bg-red-500/20 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-red-500/20'
                }`}
                style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-bold tracking-wider ${
                  currentPage === 'about'
                    ? 'text-red-400 bg-red-500/20 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-red-500/20'
                }`}
                style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('skills')}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-bold tracking-wider ${
                  currentPage === 'skills'
                    ? 'text-red-400 bg-red-500/20 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-red-500/20'
                }`}
                style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-bold tracking-wider ${
                  currentPage === 'projects'
                    ? 'text-red-400 bg-red-500/20 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-red-500/20'
                }`}
                style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-bold tracking-wider ${
                  currentPage === 'contact'
                    ? 'text-red-400 bg-red-500/20 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-red-500/20'
                }`}
                style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}
              >
                Contact
              </button>
              <div className="px-4 py-3">
                <button className="w-full text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 hover:bg-red-700 tracking-wider" style={{backgroundColor: '#8b0000', fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}>
                  <Download size={16} />
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
