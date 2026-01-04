import Footer from './Footer';
import MobileMenu from './MobileMenu';
import Nav from './Nav';
import { useMobileMenuStore } from './stores/mobileMenuStore';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { isMobileMenuOpen } = useMobileMenuStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-white">
      <Nav />
      <MobileMenu />
      {!isMobileMenuOpen && (
        <>
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default PageWrapper;
