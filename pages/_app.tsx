import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../components/Header';
import '../styles/globals.scss';
import React from 'react';

if (process.browser) {
  const FloatingFocus = require('@q42/floating-focus-a11y').default;
  new FloatingFocus();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Djovanni Tehubijuluw - Web Developer</title>
        <meta
          name="description"
          content="Passion for building and creating to bring idea’s and dreams to life. Bridging the gap between humans
                and the web through intuitive interaction."
        />
      </Head>
      <div className="page-container">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
