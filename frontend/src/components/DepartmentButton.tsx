
import React from 'react';
import { Link } from 'react-router-dom';

interface DepartmentButtonProps {
  id: string;
  name: string;
  shortName: string;
  color: string;
  index: number;
}

const DepartmentButton: React.FC<DepartmentButtonProps> = ({
  id,
  name,
  shortName,
  color,
  index
}) => {
  return (
    <Link
      to={`/department/${id}`}
      className="group relative overflow-hidden rounded-xl tech-card transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'forwards' 
      }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color}`}></div>
      
      <div className="relative z-10 p-6">
        <div className="mb-3">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full ${color} text-white font-bold text-lg shadow-md transform transition-transform duration-500 group-hover:scale-110`}>
            {shortName.charAt(0)}
          </div>
        </div>
        <h3 className="text-lg font-semibold tracking-tight mb-1 group-hover:text-tech-600 transition-colors duration-300">
          {shortName}
        </h3>
        <p className="text-sm text-gray-600 font-medium">
          {name}
        </p>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 p-[1px] rounded-xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
          <div className={`absolute inset-0 ${color} opacity-20 blur-sm`}></div>
          <div className={`absolute -inset-[2px] ${color} opacity-20`}></div>
        </div>
      </div>
    </Link>
  );
};

export default DepartmentButton;
