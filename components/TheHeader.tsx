import React from 'react';
import Button from './Button';
import TheLogo from './svg/TheLogo';

const TheHeader: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between gap-2 p-4 max-w-screen-lg m-auto z-10">
      <TheLogo variant="dark" />

      <Button variant="contained">Get started</Button>
    </header>
  );
};

export default TheHeader;
