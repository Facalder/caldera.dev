import '@/styles/globals.css';

import { useEffect } from 'react';

import Layout from '@/components/layouts/Index';

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
