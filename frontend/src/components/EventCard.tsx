
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../lib/data';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <div 
      className="animate-fade-in opacity-0 h-full"
      style={{ 
        animationDelay: `${0.1 + index * 0.05}s`,
        animationFillMode: 'forwards' 
      }}
    >
      <Link
        to={`/event/${event.id}`}
        className="group h-full block overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative"
      >
        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-5">
          <div className="inline-block mb-2">
            <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider text-tech-700 bg-tech-100 rounded-full">
              {event.department.toUpperCase()}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 group-hover:text-tech-600 transition-colors duration-300">
            {event.title}
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {event.shortDescription}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              {event.rules.length} Rules
            </span>
            <span className="text-tech-600 text-sm font-medium group-hover:underline">
              Learn more
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
