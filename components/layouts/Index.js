import Footer from './Footer';
import Navbar from './Navbar';
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
