import type { AppProps } from 'next/app';

import Header from '../components/Header';
import '../styles/globals.scss';

if (process.browser) {
  const FloatingFocus = require('@q42/floating-focus-a11y').default;
  new FloatingFocus();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page-container">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
