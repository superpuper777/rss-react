import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../store/store';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ErrorBoundary';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
