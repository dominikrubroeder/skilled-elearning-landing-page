import Image from 'next/image';
import React from 'react';
import Button, { ButtonVariants } from './Button';

const Hero: React.FC = () => {
  return (
    <section>
      <div className="sm:flex sm:items-center sm:justify-between max-w-screen-lg m-auto">
        <div className="flex-1 grid gap-8 max-w-sm">
          <div className="grid gap-4">
            <h1 className="text-5xl font-bold">
              Maximize skill,
              <br />
              minimize budget
            </h1>
            <p className="text-app-gray">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
          </div>

          <Button variant={ButtonVariants.containedGradientOrangePink}>
            Get started
          </Button>
        </div>

        <div className="flex-1">
          <div className="hidden sm:block">
            <Image
              src="/images/image-hero-desktop.png"
              alt="Hero image"
              width={1046}
              height={938}
              layout="responsive"
              priority
            />
          </div>

          <div className="sm:hidden">
            <Image
              src="/images/image-hero-mobile.png"
              alt="Hero image"
              width={435}
              height={409}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
