import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import MatrixBackground from '../components/MatrixBackground';
import { links } from '../lib/site';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(
      `%cKnock, knock. Curious how this works? The source is open: ${links.source}`,
      'color: #00ff41; font-family: monospace;'
    );
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MatrixBackground />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
