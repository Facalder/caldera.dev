import Container from '../layout/container/Container'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
