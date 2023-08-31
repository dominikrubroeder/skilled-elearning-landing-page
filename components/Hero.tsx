import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative mx-auto -mb-10 w-full max-w-contained px-4 md:mb-0 md:flex md:items-center lg:h-[65vh] xl:px-0">
      <div className="mt-8 grid max-w-sm gap-8 md:mb-40 lg:mt-0">
        <div className="grid gap-4">
          <h1 className="text-5xl font-bold">
            Maximize skill,
            <br />
            minimize budget
          </h1>
          <p className="text-app-gray">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
        </div>

        <Button variant="Gradient-Orange-Pink">Get started</Button>
      </div>

      <div className="absolute right-0 top-0 hidden md:block md:h-[40rem] md:w-[40rem] md:translate-x-[38%] md:-translate-y-[30%] lg:h-[58rem] lg:w-[58rem] lg:translate-x-[40%] lg:-translate-y-[26%] xl:translate-x-[48%]">
        <Image
          src="/images/image-hero-desktop@2x.png"
          sizes="(min-width: 768px) 50vw"
          alt="Hero desktop"
          layout="fill"
          className="object-contain"
          priority
        />
      </div>

      <div className="relative mx-auto mt-2 h-[20rem] w-[20rem] md:hidden">
        <Image
          src="/images/image-hero-mobile@2x.png"
          sizes="(min-width: 768px) 0vw, (min-width: 1200px) 0vw, 100vw"
          alt="Hero mobile"
          layout="fill"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
