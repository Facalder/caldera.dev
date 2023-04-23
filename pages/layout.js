import SectionContainer from '../components/layout/container/Container';
import Footer from '../components/layout/footer/Footer';
import Navbar from '../components/layout/header/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionContainer>{children}</SectionContainer>
      <Footer />
    </>
  );
};

export default Layout;
