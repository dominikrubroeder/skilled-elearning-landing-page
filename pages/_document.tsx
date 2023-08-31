import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Skilled elearning landing page | frontendmentor.io</title>
        <meta
          name="description"
          content="Skilled elearning landing page | Frontend challenge by frontendmentor.io | Developed by Dominik Rubröder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="bg-gradient-white-blue bg-gradient-to-b">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
