
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEventById, getDepartmentById } from '../lib/data';

const Event: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const event = id ? getEventById(id) : undefined;
  const department = event ? getDepartmentById(event.department) : undefined;
  
  useEffect(() => {
    // Redirect to 404 if event is not found
    if (!event || !department) {
      navigate('/not-found');
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [event, department, navigate]);
  
  if (!event || !department) {
    return null; // Will redirect to 404
  }

  // QR code placeholder
  const qrCode = event.qrCode || 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(event.formLink);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Event Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/90"></div>
            <div 
              className={`absolute inset-0 bg-black transition-opacity duration-700 ${isImageLoaded ? 'opacity-0' : 'opacity-100'}`}
            ></div>
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover object-center"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="inline-block mb-4">
                <Link 
                  to={`/department/${department.id}`}
                  className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white ${department.color} rounded-full hover:opacity-90 transition-opacity`}
                >
                  {department.shortName}
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {event.title}
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                {event.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to={`/register?event=${event.id}`}
                  className="px-6 py-3 bg-tech-500 text-white font-medium rounded-full shadow-lg hover:bg-tech-600 transition-all duration-300 transform hover:scale-105 button-glow"
                >
                  Register Now
                </Link>
                <a 
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-tech-600 font-medium rounded-full border border-tech-200 shadow-md hover:shadow-lg hover:border-tech-300 transition-all duration-300 transform hover:scale-105"
                >
                  Google Form
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Event Rules Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Event Rules
                  </h2>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <ul className="space-y-4">
                      {event.rules.map((rule, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-tech-100 text-tech-600 font-semibold mt-0.5">
                            {index + 1}
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-700">{rule}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-1 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm tech-card h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Quick Registration
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Scan the QR code with your mobile device or click the button below to register for this event.
                    </p>
                    <div className="flex justify-center mb-6">
                      <img 
                        src={qrCode} 
                        alt="Registration QR Code" 
                        className="w-48 h-48 bg-white p-2 rounded-lg shadow-sm border border-gray-200"
                      />
                    </div>
                    <div className="text-center">
                      <Link 
                        to={`/register?event=${event.id}`}
                        className="w-full block px-6 py-3 bg-tech-500 text-white font-medium rounded-full shadow-lg hover:bg-tech-600 transition-all duration-300 transform hover:scale-105 button-glow"
                      >
                        Register for {event.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Events */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Events from {department.shortName}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Check out other events organized by the {department.name} department.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {department.events
                .filter(deptEvent => deptEvent.id !== event.id)
                .slice(0, 4)
                .map((relatedEvent, index) => (
                  <div 
                    key={relatedEvent.id}
                    className="animate-fade-in opacity-0" 
                    style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <Link
                      to={`/event/${relatedEvent.id}`}
                      className="group block overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full"
                    >
                      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                        <img
                          src={relatedEvent.image}
                          alt={relatedEvent.title}
                          className="h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-semibold mb-1 group-hover:text-tech-600 transition-colors duration-300">
                          {relatedEvent.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {relatedEvent.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <Link 
                to={`/department/${department.id}`}
                className="inline-flex items-center px-6 py-3 bg-white text-tech-600 font-medium rounded-full border border-tech-200 shadow-sm hover:shadow-md hover:border-tech-300 transition-all duration-300 transform hover:scale-105"
              >
                View All {department.shortName} Events
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

export default Event;
