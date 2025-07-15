import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Monitor, Code, Terminal, Cpu, HardDrive, Wifi } from 'lucide-react';
const Hero = ({ navbarRef }: { navbarRef?: any }) => {
  const [currentText, setCurrentText] = useState(0);
  const [rotatingElements, setRotatingElements] = useState<{[key: string]: number}>({});
  
  const rotatingTexts = [
    "Full Stack Developer",
    "Problem Solver",
    "Code Enthusiast",
    "Tech Innovator",
    "Digital Creator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleElementClick = (elementId: string) => {
    setRotatingElements(prev => ({
      ...prev,
      [elementId]: (prev[elementId] || 0) + 360
    }));
  };

  return (
    <section className="min-h-screen relative overflow-hidden" style={{background: `linear-gradient(135deg, #2e2e2e 0%, #1a1a1a 50%, #2e2e2e 100%)`}}>
      {/* Enhanced animated background with 3D tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle glass effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 backdrop-blur-sm"></div>
        
        {/* Minimal Tech Elements - Only Monitor and WiFi */}
        <div 
          className="absolute top-20 left-20 cursor-pointer transition-all duration-500 hover:scale-125 animate-float"
          onClick={() => handleElementClick('monitor')}
          style={{transform: `rotate(${rotatingElements.monitor || 0}deg)`}}
        >
          <Monitor size={48} style={{color: '#8b0000'}} className="drop-shadow-2xl hover:drop-shadow-red" />
        </div>
        
        <div 
          className="absolute bottom-20 right-32 cursor-pointer transition-all duration-500 hover:scale-125 animate-float delay-200"
          onClick={() => handleElementClick('wifi')}
          style={{transform: `rotate(${rotatingElements.wifi || 0}deg)`}}
        >
          <Wifi size={38} style={{color: '#8b0000'}} className="drop-shadow-2xl" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in-left">
              {/* Enhanced Name and Title */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider hover:scale-105 transition-transform duration-300 animate-slide-up">
                  <span style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace', textShadow: '0 0 20px rgba(139, 0, 0, 0.8), 0 0 40px rgba(139, 0, 0, 0.6)'}}>
                    Utkarsh <span style={{color: '#8b0000'}} className="hover:text-red-400 transition-colors duration-300 animate-glow">Yadav</span>
                  </span>
                </h1>
                
                {/* Dynamic rotating text */}
                <div className="text-xl md:text-2xl text-gray-300 mb-8 font-bold h-8 flex items-center animate-slide-up delay-200 tracking-wide">
                  <span className="mr-2" style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}>I am a</span>
                  <span 
                    key={currentText}
                    className="font-black animate-pulse transition-all duration-500 hover:scale-110 cursor-default animate-text-glow tracking-wider"
                    style={{color: '#8b0000', fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace', textShadow: '0 0 15px rgba(139, 0, 0, 0.8)'}}
                  >
                    {rotatingTexts[currentText]}
                  </span>
                </div>
                
                <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed hover:text-gray-300 transition-colors duration-300 animate-slide-up delay-300 font-medium tracking-wide" style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}>
                  Passionate 2nd-year B.Tech student from GLA University, Noida, with 1 year of development experience 
                  building modern web applications and solving complex problems through innovative solutions.
                </p>
              </div>

              {/* Enhanced CTA Buttons with shadow effects */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up delay-500">
                <button className="group relative text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden animate-bounce-subtle tracking-wider" style={{backgroundColor: '#8b0000', fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}>
                  {/* Background shadow effect */}
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <Download size={20} className="group-hover:animate-bounce" />
                    Download Resume
                  </div>
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </button>
                
                <button className="group relative border-2 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 overflow-hidden animate-bounce-subtle delay-200 tracking-wider" style={{borderColor: '#8b0000', color: '#8b0000', fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Audiowide", monospace'}}>
                  {/* Background fill effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</div>
                  {/* Shadow effect */}
                  <div className="absolute inset-0 shadow-lg shadow-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Enhanced Social Links with hover effects */}
              <div className="flex gap-6 animate-slide-up delay-700">
                <a href="mailto:utkarshyadav092006@gmail.com" className="group relative p-3 rounded-full text-gray-400 transition-all duration-300 transform hover:scale-125 animate-float">
                  <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <Mail size={24} className="relative z-10 group-hover:text-red-400 transition-colors duration-300" />
                </a>
                <a href="https://github.com" className="group relative p-3 rounded-full text-gray-400 transition-all duration-300 transform hover:scale-125 animate-float delay-100">
                  <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <Github size={24} className="relative z-10 group-hover:text-red-400 transition-colors duration-300" />
                </a>
                <a href="https://linkedin.com" className="group relative p-3 rounded-full text-gray-400 transition-all duration-300 transform hover:scale-125 animate-float delay-200">
                  <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <Linkedin size={24} className="relative z-10 group-hover:text-red-400 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative group">
                {/* Main profile image container */}
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full p-2 shadow-2xl transition-all duration-500 group-hover:shadow-red-500/60 group-hover:scale-110 animate-pulse-slow" style={{background: `linear-gradient(45deg, #8b0000, #a00000, #8b0000)`}}>
                    <div className="w-full h-full rounded-full overflow-hidden transition-all duration-500 group-hover:bg-opacity-90" style={{backgroundColor: '#2e2e2e'}}>
                      <img 
                        src="prof2.jpg" 
                        alt="Utkarsh Yadav" 
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                      />
                    </div>
                  </div>
                  
                  {/* Red shadow effect */}
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse" style={{backgroundColor: '#8b0000', transform: 'scale(1.1)'}}></div>
                  
                  {/* Rotating ring effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-red-500 group-hover:animate-spin transition-all duration-500" style={{animationDuration: '3s'}}></div>
                  
                  {/* Outer glow ring */}
                  <div className="absolute -inset-4 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>

                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce delay-300" style={{backgroundColor: '#8b0000'}}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-ping delay-700" style={{backgroundColor: '#8b0000'}}></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full animate-pulse delay-1000" style={{backgroundColor: '#8b0000'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center transition-all duration-300 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-500/50" style={{borderColor: '#8b0000'}}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse transition-all duration-300 group-hover:bg-red-400" style={{backgroundColor: '#8b0000'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
