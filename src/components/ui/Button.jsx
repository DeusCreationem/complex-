import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary hover:bg-indigo-700 text-white focus:ring-primary',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-500',
    danger: 'bg-danger hover:bg-red-700 text-white focus:ring-red-500',
  };
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;