import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  variant: 'Link' | 'Contained' | 'Gradient-Orange-Pink' | 'Gradient-Blue-Pink';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  if (variant === 'Link') {
    return (
      <button className="text-app-pink-saturated font-semibold justify-self-start">
        {children}
      </button>
    );
  }

  if (variant === 'Gradient-Orange-Pink') {
    return (
      <button className="p-3 px-6 rounded-full bg-gradient-to-b bg-gradient-orange-pink text-white justify-self-start">
        {children}
      </button>
    );
  }

  if (variant === 'Gradient-Blue-Pink') {
    return (
      <button className="p-3 px-6 rounded-full bg-gradient-to-b bg-gradient-blue-pink text-white justify-self-start">
        {children}
      </button>
    );
  }

  return (
    <button className="p-3 px-6 rounded-full text-white justify-self-start bg-app-blue-dark">
      {children}
    </button>
  );
};

export default Button;
