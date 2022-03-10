import Navigation from '../components/nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
        <Navigation></Navigation>
        <Component {...pageProps} />
    </>
}

export default MyApp
