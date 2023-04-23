import '@/public/css/globals.css';

import { useEffect } from 'react';

import Layout from '@/pages/layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
