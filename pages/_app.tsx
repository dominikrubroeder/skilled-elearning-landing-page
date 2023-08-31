import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Skilled elearning landing page | frontendmentor.io</title>
        <meta
          name="description"
          content="Skilled elearning landing page | Frontend challenge by frontendmentor.io | Developed by Dominik Rubröder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
