import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-rbc-dark-blue">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;