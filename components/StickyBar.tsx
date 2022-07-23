import React from 'react';
import Button, { ButtonVariants } from './Button';
import TheLogo from './svg/TheLogo';

const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-app-blue-dark p-4">
      <div className="flex items-center justify-between gap-2 max-w-screen-lg m-auto">
        <TheLogo />
        <Button variant={ButtonVariants.containedGradientViolettPink}>
          Get started
        </Button>
      </div>
    </div>
  );
};

export default StickyBar;
