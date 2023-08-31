import type { NextPage } from "next";
import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Logo from "../components/svg/Logo";
import Button from "../components/Button";
import CourseList from "../components/course/CourseList";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <main className="grid gap-8">
        <Hero />

        <section className="mx-auto w-full max-w-contained px-4 xl:px-0">
          <CourseList />
        </section>

        <div className="mt-24 bg-app-blue-dark p-4">
          <div className="mx-auto flex max-w-contained items-center justify-between gap-2">
            <Logo />
            <Button variant="Gradient-Blue-Pink">Get started</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
