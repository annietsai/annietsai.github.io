import { Link } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import logo from './assets/enani-logo-white.png';
import { useMobileMenuStore } from './stores/mobileMenuStore';

const NavMobile: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenuStore();

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <button
        className="text-white text-2xl md:hidden cursor-pointer"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
      <Link to="/" className="mx-auto md:mx-0" onClick={closeMobileMenu}>
        <img src={logo} alt="Enani logo" className="h-8 w-auto" />
      </Link>
      <div className="invisible text-2xl md:hidden">
        <RxCross1 />
      </div>
    </div>
  );
};

const NavDesktop: React.FC = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center px-14 py-6">
      <div className="flex justify-end items-center gap-8">
        <Link
          to="/"
          className="text-white text-sm tracking-[2px] opacity-80 hover:opacity-100 transition-opacity"
        >
          HOME
        </Link>
        <Link
          to="/music"
          className="text-white text-sm tracking-[2px] opacity-80 hover:opacity-100 transition-opacity"
        >
          MUSIC
        </Link>
      </div>

      <div className="flex justify-center px-8">
        <img src={logo} alt="Enani logo" className="h-8 w-auto" />
      </div>

      <div className="flex justify-start items-center gap-8">
        <Link
          to="/about"
          className="text-white text-sm tracking-[2px] opacity-80 hover:opacity-100 transition-opacity"
        >
          ABOUT
        </Link>
        <Link
          to="/epk"
          className="text-white text-sm tracking-[2px] opacity-80 hover:opacity-100 transition-opacity"
        >
          EPK
        </Link>
      </div>
    </div>
  );
};

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#070709]">
      <div className="md:hidden">
        <NavMobile />
      </div>
      <div className="hidden md:block">
        <NavDesktop />
      </div>
    </nav>
  );
};

export default Nav;
