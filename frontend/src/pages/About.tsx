
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* About Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-700/90 to-tech-900/90"></div>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1950&q=80" 
              alt="College campus" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-white/20 backdrop-blur-sm rounded-full">
                  ABOUT US
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                National Technical Symposium
              </h1>
              <p className="text-lg text-gray-200">
                A premier collegiate technical event showcasing innovation and excellence across nine engineering disciplines.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    About the Symposium
                  </h2>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      The National Technical Symposium is an annual event that brings together students, academics, and industry professionals to showcase the latest advancements in engineering and technology. This prestigious event provides a platform for young engineers to demonstrate their technical prowess, innovative thinking, and problem-solving abilities.
                    </p>
                    <p>
                      Our symposium spans across nine engineering departments: Computer Science, Information Technology, Electronics & Instrumentation, Electronics & Communication, Chemical Engineering, Mechanical Engineering, Civil Engineering, Electrical & Electronics Engineering, and Mechatronics. Each department organizes specialized events that challenge participants to push the boundaries of their knowledge and skills.
                    </p>
                    <p>
                      From coding challenges and hackathons to robotics competitions and design contests, the symposium offers diverse opportunities for technical exploration and growth. Participants can engage in hands-on activities, attend workshops, and network with peers and professionals in their field.
                    </p>
                    <p>
                      Beyond competition, the symposium aims to foster collaboration, innovation, and the exchange of ideas among the next generation of engineers. It serves as a bridge between academic learning and practical application, preparing students for the challenges of the professional world.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-2 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  <div className="sticky top-24 space-y-8">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Event Details
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-tech-100 text-tech-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-semibold text-gray-900">Dates</h4>
                            <p className="text-sm text-gray-600">October 15-17, 2023</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-tech-100 text-tech-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-semibold text-gray-900">Venue</h4>
                            <p className="text-sm text-gray-600">College Main Campus, Engineering Block</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-tech-100 text-tech-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-semibold text-gray-900">Registration Deadline</h4>
                            <p className="text-sm text-gray-600">October 10, 2023</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-tech-100 text-tech-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
                            <p className="text-sm text-gray-600">symposium@college.edu</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-tech-50 rounded-2xl p-6 border border-tech-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Organizing Committee
                      </h3>
                      <ul className="space-y-3">
                        <li className="text-sm">
                          <span className="font-medium text-gray-900">Dr. Sarah Johnson</span> - Symposium Chair
                        </li>
                        <li className="text-sm">
                          <span className="font-medium text-gray-900">Prof. Michael Chen</span> - Technical Coordinator
                        </li>
                        <li className="text-sm">
                          <span className="font-medium text-gray-900">Dr. Emily Rodriguez</span> - Events Coordinator
                        </li>
                        <li className="text-sm">
                          <span className="font-medium text-gray-900">Prof. David Kim</span> - Student Activities
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sponsors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="inline-block mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-tech-700 bg-tech-100 rounded-full">
                  SUPPORTERS
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Sponsors
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                We're grateful to the organizations that make this symposium possible through their generous support.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
                  Sponsor 1
                </div>
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
                  Sponsor 2
                </div>
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
                  Sponsor 3
                </div>
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-medium">
                  Sponsor 4
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
