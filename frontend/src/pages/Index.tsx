
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DepartmentButton from '../components/DepartmentButton';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import MapLocation from '../components/MapLocation';
import { Link } from 'react-router-dom';
import { departments, getAllEvents } from '../lib/data';

const Index: React.FC = () => {
  useEffect(() => {
    // Load additional fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(link);
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup
      document.head.removeChild(link);
    };
  }, []);

  // Get featured events (first 3 from each department)
  const featuredEvents = getAllEvents().slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section with Video Background */}
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-gradient-to-r from-tech-100 to-purple-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-purple-600 rounded-full">
                  ABOUT
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-tech-600">
                  Tech Symposium 2025
                </span>
              </h2>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-purple-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                The <span className="font-bold text-purple-700">National Technical Symposium</span> is the flagship event of Puducherry Technological University, bringing together the brightest minds and innovative ideas from across the country. This premier event showcases cutting-edge technologies, research papers, and technical competitions across nine engineering departments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                From robotics and AI to civil engineering and biotechnology, the symposium offers a platform for students to demonstrate their technical prowess, exchange ideas, and network with industry professionals. Join us for an unforgettable experience of learning, innovation, and technological excellence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Departments Section */}
        <section className="py-20 bg-gradient-to-r from-tech-900 to-purple-900 text-white" id="departments">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-purple-500 rounded-full">
                  EXPLORE
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-tech-300 to-purple-300" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Participating Departments
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">
                Discover events from nine engineering departments showcasing the latest innovations and technical challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {departments.map((department, index) => (
                <DepartmentButton
                  key={department.id}
                  id={department.id}
                  name={department.name}
                  shortName={department.shortName}
                  color={department.color}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Events Section */}
        <section className="py-20 bg-gradient-to-r from-purple-100 to-tech-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-purple-600 rounded-full">
                  HIGHLIGHTS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-tech-600">
                  Featured Events
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Check out some of our standout events from this year's symposium. Don't miss your chance to participate!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event}
                  index={index}
                />
              ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <Link 
                to="/events" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-tech-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
              >
                View All Events
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Map Location Section */}
        <MapLocation />
        
        {/* Registration CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-tech-800/90"></div>
            <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Ready to Showcase Your Technical Skills?
              </h2>
              <p className="text-purple-100 text-lg mb-8">
                Registration is now open for all events. Secure your spot today and get ready to compete with the best young minds in the country.
              </p>
              <Link 
                to="/register" 
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-medium rounded-full shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Register Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
