import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import Layout from '@/components/layouts/Index';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
