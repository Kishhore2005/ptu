
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { getDepartmentById } from '../lib/data';

const Department: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const department = id ? getDepartmentById(id) : undefined;
  
  useEffect(() => {
    // Redirect to 404 if department is not found
    if (!department) {
      navigate('/not-found');
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [department, navigate]);
  
  if (!department) {
    return null; // Will redirect to 404
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Department Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
            <img 
              src={department.image} 
              alt={department.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="inline-block mb-4">
                <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white ${department.color} rounded-full`}>
                  DEPARTMENT
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {department.name}
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                {department.description}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">
                  {department.events.length} Events
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Events by {department.shortName}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                Explore all the events organized by the {department.name} department for this year's symposium.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {department.events.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Department;
