import { Provider } from 'react-redux';
import Navigation from '../components/nav';
import '../styles/globals.css';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return <>
        <Provider store={store}>
        <Navigation></Navigation>
        <Component {...pageProps} />
        </Provider>
    </>
}

export default MyApp
