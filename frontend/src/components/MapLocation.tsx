
import React, { useEffect, useRef } from 'react';

const MapLocation: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create iframe for Google Maps
    if (mapContainerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.009689533983!2d79.8554023!3d11.9562271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04c!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1686766623351!5m2!1sen!2sin";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      
      mapContainerRef.current.appendChild(iframe);
    }
    
    return () => {
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <section className="py-16 bg-gradient-to-r from-tech-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-purple-600 rounded-full">
              LOCATION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-tech-300 to-purple-300" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            GET DIRECTIONS TO EVENT
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Puducherry Technological University, East Coast Road, Pillaichavady, Puducherry - 605014
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20 h-[400px]" ref={mapContainerRef}>
          {/* Map will be loaded here */}
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
