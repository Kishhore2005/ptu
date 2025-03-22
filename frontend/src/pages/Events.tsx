
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { getAllEvents, departments } from '../lib/data';

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [events, setEvents] = useState(getAllEvents());
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Filter events based on department selection
    if (filter === 'all') {
      setEvents(getAllEvents());
    } else {
      setEvents(getAllEvents().filter(event => event.department === filter));
    }
  }, [filter]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Events Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-700/90 to-tech-600/90"></div>
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1950&q=80" 
              alt="Technical event" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-white/20 backdrop-blur-sm rounded-full">
                  EXPLORE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Events
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Discover the full range of technical events across all nine engineering departments.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === 'all'
                      ? 'bg-white text-tech-600 shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  All Events
                </button>
                
                {departments.map(department => (
                  <button
                    key={department.id}
                    onClick={() => setFilter(department.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === department.id
                        ? 'bg-white text-tech-600 shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {department.shortName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event}
                  index={index}
                />
              ))}
            </div>
            
            {/* Empty State */}
            {events.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600 mb-6">There are no events currently available for this selection.</p>
                <button
                  onClick={() => setFilter('all')}
                  className="px-6 py-2 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-colors"
                >
                  View all events
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
