
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;
        heroElement.style.transform = `translateY(${scrollY * 0.2}px)`;
        heroElement.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-tech-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
      </div>

      {/* Content */}
      <div 
        ref={heroRef}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <div className="inline-block mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-purple-600 rounded-full animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            NATIONAL TECHNICAL SYMPOSIUM
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards', fontFamily: "'Orbitron', sans-serif" }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-tech-300 drop-shadow-[0_5px_10px_rgba(124,58,237,0.5)]">
            Tech Symposium
          </span>
          <span className="block mt-2 text-white drop-shadow-[0_5px_15px_rgba(255,255,255,0.5)]">2025</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards', fontFamily: "'Montserrat', sans-serif" }}>
          PUDUCHERRY TECHNOLOGICAL UNIVERSITY
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Experience the fusion of innovation and technology across nine engineering disciplines in this premier collegiate technical event.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <Link 
            to="/events" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-tech-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 button-glow"
          >
            Explore Events
          </Link>
          <Link 
            to="/register" 
            className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium rounded-full shadow-md hover:shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <div className="w-1 h-8 rounded-full bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-purple-500 animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
