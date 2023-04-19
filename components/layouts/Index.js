import Footer from './navigation/Footer';
import Navbar from './navigation/Navbar';
import SectionContainer from './SectionContainer';

const Layout = ({ children }) => {
  return (
    <SectionContainer>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SectionContainer>
  );
};

export default Layout;
