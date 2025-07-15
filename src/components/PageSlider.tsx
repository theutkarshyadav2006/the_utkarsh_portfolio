import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import MoreProjects from './MoreProjects';
import Contact from './Contact';

const PageSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navbarRef, setNavbarRef] = useState<any>(null);

  const pages = [
    { component: <Hero navbarRef={navbarRef} />, name: 'Home', id: 'hero' },
    { component: <About />, name: 'About', id: 'about' },
    { component: <Skills />, name: 'Skills', id: 'skills' },
    { component: <Projects />, name: 'Projects', id: 'projects' },
    { component: <MoreProjects />, name: 'More Projects', id: 'more-projects' },
    { component: <Contact />, name: 'Contact', id: 'contact' }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, isTransitioning]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar - Always visible */}
      <Navbar 
        ref={setNavbarRef}
        currentPage={pages[currentPage].id}
        onNavigate={goToPage}
        pages={pages}
      />
      
      {/* Page Container */}
      <div className="relative w-full h-full">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
              index === currentPage
                ? 'transform translate-x-0 opacity-100 z-10'
                : index < currentPage
                ? 'transform -translate-x-full opacity-0 z-0'
                : 'transform translate-x-full opacity-0 z-0'
            }`}
          >
            <div className="w-full h-full overflow-y-auto pt-16">
              {page.component}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevPage}
        disabled={currentPage === 0 || isTransitioning}
        className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentPage === 0 || isTransitioning
            ? 'opacity-30 cursor-not-allowed bg-gray-600'
            : 'opacity-80 hover:opacity-100 hover:scale-110 bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50'
        }`}
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <button
        onClick={nextPage}
        disabled={currentPage === pages.length - 1 || isTransitioning}
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentPage === pages.length - 1 || isTransitioning
            ? 'opacity-30 cursor-not-allowed bg-gray-600'
            : 'opacity-80 hover:opacity-100 hover:scale-110 bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50'
        }`}
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Page Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`group relative transition-all duration-300 ${
              index === currentPage
                ? 'w-12 h-3'
                : 'w-3 h-3 hover:w-8'
            }`}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'bg-red-600 shadow-lg shadow-red-500/50'
                  : 'bg-gray-500 hover:bg-red-400 group-hover:shadow-md group-hover:shadow-red-400/30'
              }`}
            />
            
            {/* Tooltip */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {page.name}
              </div>
            </div>
          </button>
        ))}
      </div>

    </div>
  );
};

export default PageSlider;