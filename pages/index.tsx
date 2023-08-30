import type {NextPage} from 'next';
import React from "react";
import Head from 'next/head';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Logo from "../components/svg/Logo";
import Button from "../components/Button";
import CourseList from "../components/course/CourseList";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Skilled elearning landing page | frontendmentor.io</title>
                <meta
                    name="description"
                    content="Skilled elearning landing page | Frontend challenge by frontendmentor.io | Developed by Dominik Rubröder"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            <main className="grid gap-8">
                <Hero />

                <section className="max-w-contained mx-auto w-full">
                    <CourseList />
                </section>

                <div className="bottom-0 left-0 right-0 bg-app-blue-dark p-4">
                    <div className="flex items-center justify-between gap-2 max-w-screen-lg m-auto">
                        <Logo/>
                        <Button variant="Gradient-Blue-Pink">
                            Get started
                        </Button>
                    </div>
                </div>
            </main>

            <footer className="text-center px-4 text-app-gray text-xs">
                <p className="max-w-[60.375rem] mx-auto">
                    Frontend challenge by
                    <a
                        href="https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q"
                        target="_blank"
                        rel="noreferrer"
                        className="pl-1"
                    >
                        frontendmentor.io
                    </a>
                    , done by Dominik Rubröder
                </p>
            </footer>
        </div>
    );
};

export default Home;
