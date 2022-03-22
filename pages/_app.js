import { Provider } from 'react-redux';
import Navigation from '@/layout/nav';
import 'styles/globals.css';
import { store } from 'redux/store';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>Hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Provider store={store}>
          <SessionProvider>
        <Navigation></Navigation>
        <Component {...pageProps} />
        </SessionProvider>
        </Provider>
    </>
}

export default MyApp
