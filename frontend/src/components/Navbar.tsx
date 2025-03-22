
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useUser();

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold smooth-transition"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-600 to-tech-500 font-playfair">Tech Symposium</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`smooth-transition font-medium ${
                location.pathname === '/' 
                  ? 'text-tech-600 after:content-[""] after:block after:w-full after:h-0.5 after:bg-tech-500 after:transform after:scale-x-100 after:transition-transform' 
                  : 'text-gray-600 hover:text-tech-600 after:content-[""] after:block after:w-full after:h-0.5 after:bg-tech-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`smooth-transition font-medium ${
                location.pathname.includes('/events') 
                  ? 'text-tech-600 after:content-[""] after:block after:w-full after:h-0.5 after:bg-tech-500 after:transform after:scale-x-100 after:transition-transform' 
                  : 'text-gray-600 hover:text-tech-600 after:content-[""] after:block after:w-full after:h-0.5 after:bg-tech-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className={`smooth-transition font-medium ${
                location.pathname === '/about' 
                  ? 'text-tech-600 after:content-[""] after:block after:w-full after:h-0.5 after:bg-tech-500 after:transform after:scale-x-100 after:transition-transform' 
                  : 'text-gray-600 hover:text-tech-600 after:content-[""] after:block after:w-full after:h-0.5 after:bg-tech-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform'
              }`}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-tech-600 bg-tech-50 px-4 py-2 rounded-full hover:bg-tech-100 transition-colors">
                  <span className="font-medium">Welcome, {user?.name}</span>
                  <User className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <button 
                    onClick={logout}
                    className="flex w-full items-center px-4 py-3 text-sm text-gray-800 hover:bg-tech-50 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login"
                className="bg-tech-500 hover:bg-tech-600 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-tech-600 focus:outline-none focus:text-tech-600 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 z-50 bg-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden pt-24`}
        >
          <div className="container mx-auto px-6 flex flex-col space-y-6 py-8">
            <Link 
              to="/" 
              className="text-xl font-medium text-gray-800 hover:text-tech-600 smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className="text-xl font-medium text-gray-800 hover:text-tech-600 smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="text-xl font-medium text-gray-800 hover:text-tech-600 smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-lg font-medium text-tech-600">
                    Welcome, {user?.name}
                  </div>
                </div>
                <button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="flex items-center text-lg font-medium text-red-600 hover:text-red-700 smooth-transition"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="text-xl font-medium text-tech-600 hover:text-tech-700 smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
