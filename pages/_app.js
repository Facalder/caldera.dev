import '@/public/css/globals.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/600.css'
import '@fontsource/be-vietnam-pro/700.css'
import '@fontsource/be-vietnam-pro/800.css'

import { useEffect } from 'react'

import Layout from '@/pages/layout'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
