// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-gradient-to-b bg-gradient-white-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
