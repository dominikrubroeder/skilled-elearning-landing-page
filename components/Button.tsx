import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  variant: string;
}

export enum ButtonVariants {
  text = 'LINK',
  contained = 'CONTAINED',
  containedGradientOrangePink = 'CONTAINED_GRADIENT_ORANGE_PINK',
  containedGradientViolettPink = 'CONTAINED_GRADIENT_VIOLETT_PINK',
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  if (variant === ButtonVariants.text) {
    return (
      <button className="text-app-pink-saturated font-semibold justify-self-start">
        {children}
      </button>
    );
  }

  if (variant === ButtonVariants.containedGradientOrangePink) {
    return (
      <button className="p-3 px-6 rounded-full bg-gradient-to-b bg-gradient-orange-pink text-white justify-self-start">
        {children}
      </button>
    );
  }

  if (variant === ButtonVariants.containedGradientViolettPink) {
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
