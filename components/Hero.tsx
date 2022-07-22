import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section>
      <div className="sm:flex sm:items-center sm:justify-between max-w-screen-xl m-auto">
        <div className="flex-1">
          <div>
            <h1>Maximize skill, minimize budget</h1>
            <p>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
          </div>
          <button>Get started</button>
        </div>

        <div className="flex-1">
          <Image
            src="/images/image-hero-desktop.png"
            alt="Hero image"
            width={1046}
            height={938}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
