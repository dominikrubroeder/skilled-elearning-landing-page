import React from 'react';
import TheLogo from './svg/TheLogo';

const TheHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between gap-2 p-4 max-w-screen-xl m-auto">
      <TheLogo variant="dark" />
      <button>Get started</button>
    </header>
  );
};

export default TheHeader;
