import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-3xl space-y-8 px-4 py-8 md:space-y-12 md:px-3 md:py-16'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
