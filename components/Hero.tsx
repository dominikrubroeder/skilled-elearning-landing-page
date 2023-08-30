import React from 'react';
import Button from './Button';
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative max-w-contained px-4 xl:px-0 mx-auto w-full -mb-10 md:mb-0 md:flex md:items-center lg:h-[65vh]">
      <div className="grid gap-8 max-w-sm mt-8 md:mb-40 lg:mt-0">
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

        <Button variant="Gradient-Orange-Pink">
          Get started
        </Button>
      </div>

      <div className="hidden absolute right-0 top-0 md:block md:w-[40rem] md:h-[40rem] md:translate-x-[38%] md:-translate-y-[30%] lg:w-[58rem] lg:h-[58rem] lg:translate-x-[40%] lg:-translate-y-[26%] xl:translate-x-[48%]">
        <Image
               src="/images/image-hero-desktop@2x.png"
               sizes="(min-width: 768px) 50vw"
               alt="Hero desktop"
               layout="fill" className="object-contain" />
      </div>

      <div className="relative h-[20rem] w-[20rem] mx-auto mt-2 md:hidden">
          <Image
                 src="/images/image-hero-mobile@2x.png"
                 sizes="(min-width: 768px) 0vw, (min-width: 1200px) 0vw, 100vw"
                 alt="Hero mobile"
                 layout="fill" className="object-contain" />
      </div>
    </section>
  );
};

export default Hero;
