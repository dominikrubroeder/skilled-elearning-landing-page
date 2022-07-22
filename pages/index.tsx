import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Skilled elearning landing page | frontendmentor.io</title>
        <meta
          name="description"
          content="Skilled elearning landing page | frontendmentor.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello, World!</h1>
      </main>

      <footer className="mt-8 text-center px-4">
        Frontend challenge by{' '}
        <a
          href="https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q"
          target="_blank"
          rel="noreferrer"
        >
          frontendmentor.io
        </a>
        , done by Dominik Rubröder
      </footer>
    </div>
  );
};

export default Home;
