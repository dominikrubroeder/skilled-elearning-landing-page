// pages/_document.js
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-gradient-white-blue overflow-x-hidden bg-gradient-to-b">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
