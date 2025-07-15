import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const greetings = [
    { text: "HELLO", lang: "EN" },
    { text: "नमस्ते", lang: "HI" },
    { text: "BONJOUR", lang: "FR" },
    { text: "HOLA", lang: "ES" },
    { text: "こんにちは", lang: "JP" },
    { text: "안녕하세요", lang: "KR" },
    { text: "GUTEN TAG", lang: "DE" },
    { text: "CIAO", lang: "IT" },
    { text: "OLÁ", lang: "PT" },
    { text: "ПРИВЕТ", lang: "RU" }
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Greeting rotation with slide animation
    const greetingInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentGreeting(prev => (prev + 1) % greetings.length);
        setIsTransitioning(false);
      }, 300);
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(greetingInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #2e2e2e 0%, #1a1a1a 50%, #2e2e2e 100%)'}}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-600 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        {/* Greeting Container with horizontal slide */}
        <div className="mb-16 h-32 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-2xl">
            {/* Current greeting */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                isTransitioning ? 'transform translate-x-full opacity-0' : 'transform translate-x-0 opacity-100'
              }`}
            >
              <h1 
                className="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider"
                style={{
                  fontFamily: '"Migha", "Georgia", "Times New Roman", serif',
                  textShadow: `
                    2px 2px 0px #8b0000,
                    4px 4px 0px #660000,
                    6px 6px 15px rgba(0,0,0,0.7)
                  `,
                  WebkitTextStroke: '0.5px #8b0000',
                  letterSpacing: '0.1em'
                }}
              >
                {greetings[currentGreeting].text}
              </h1>
              <p 
                className="text-red-300 text-lg font-bold tracking-widest opacity-80"
                style={{
                  fontFamily: '"Migha", "Georgia", "Times New Roman", serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  letterSpacing: '0.3em'
                }}
              >
                {greetings[currentGreeting].lang}
              </p>
            </div>

            {/* Next greeting (sliding in from left) */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                isTransitioning ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
              }`}
            >
              <h1 
                className="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider"
                style={{
                  fontFamily: '"Migha", "Georgia", "Times New Roman", serif',
                  textShadow: `
                    2px 2px 0px #8b0000,
                    4px 4px 0px #660000,
                    6px 6px 15px rgba(0,0,0,0.7)
                  `,
                  WebkitTextStroke: '0.5px #8b0000',
                  letterSpacing: '0.1em'
                }}
              >
                {greetings[(currentGreeting + 1) % greetings.length].text}
              </h1>
              <p 
                className="text-red-300 text-lg font-bold tracking-widest opacity-80"
                style={{
                  fontFamily: '"Migha", "Georgia", "Times New Roman", serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  letterSpacing: '0.3em'
                }}
              >
                {greetings[(currentGreeting + 1) % greetings.length].lang}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-96 mx-auto">
          <div className="relative">
            {/* Background bar */}
            <div 
              className="w-full bg-gray-800 rounded-full h-2 mb-6 border-2 border-gray-600"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              {/* Progress fill */}
              <div 
                className="h-full rounded-full transition-all duration-100 ease-out relative overflow-hidden"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, #8b0000, #ff0000, #8b0000)`,
                  boxShadow: `
                    0 0 10px rgba(139, 0, 0, 0.8),
                    0 0 20px rgba(139, 0, 0, 0.6),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `
                }}
              >
                {/* Animated shine effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"
                  style={{
                    transform: 'skewX(-20deg)',
                    animation: 'shine 2s infinite'
                  }}
                />
              </div>
            </div>
            
            {/* Progress text */}
            <div className="flex justify-between items-center">
              <p 
                className="text-gray-300 text-base font-bold"
                style={{
                  fontFamily: '"Migha", "Georgia", "Times New Roman", serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  letterSpacing: '0.15em'
                }}
              >
                Loading
              </p>
              <p 
                className="text-red-400 text-lg font-black"
                style={{
                  fontFamily: '"Migha", "Georgia", "Times New Roman", serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  letterSpacing: '0.1em'
                }}
              >
                {progress}%
              </p>
            </div>
          </div>
        </div>

        {/* GTA-style decorative elements */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 h-8 bg-red-600 animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s',
                  clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)',
                  boxShadow: '0 0 10px rgba(139, 0, 0, 0.8)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;