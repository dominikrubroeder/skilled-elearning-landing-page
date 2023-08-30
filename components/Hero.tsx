import React from 'react';
import Button from './Button';
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative max-w-contained px-4 xl:px-0 mx-auto w-full -mb-8 md:mb-0 md:flex md:items-center lg:h-[65vh]">
      <div className="grid gap-8 max-w-sm md:mb-40">
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

      <div className="hidden absolute right-0 top-0 md:block md:w-[40rem] md:h-[40rem] md:translate-x-[38%] md:-translate-y-[30%] lg:w-[58rem] lg:h-[58rem] lg:translate-x-[48%] lg:-translate-y-[26%]">
        <Image width="2092"
               height="1876"
               src="/images/image-hero-desktop@2x.png"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               alt="Hero"
               fill />
      </div>

      <div className="relative h-[20rem] w-[20rem] mx-auto mt-8 md:hidden">
        <Image width={870} height={818} src="/images/image-hero-mobile@2x.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Hero mobile" fill />
      </div>
    </section>
  );
};

export default Hero;
