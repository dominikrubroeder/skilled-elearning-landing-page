import React from 'react';
import Button from './Button';
import Logo from './svg/Logo';

const Header: React.FC = () => {
  return (
    <header className="relative flex items-center justify-between gap-2 max-w-contained mx-auto px-4 py-6 z-10 xl:px-0">
      <Logo variant="dark" />
      <Button variant="Contained">Get started</Button>
    </header>
  );
};

export default Header;
