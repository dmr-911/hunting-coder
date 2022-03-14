import { Provider } from 'react-redux';
import Navigation from '../components/nav';
import '../styles/globals.css';
import { store } from '../redux/store';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  console.log(store.getState());
  return <>
      <Head>
        <title>Hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Provider store={store}>
        <Navigation></Navigation>
        <Component {...pageProps} />
        </Provider>
    </>
}

export default MyApp
