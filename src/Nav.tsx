import { Link } from 'react-router-dom';
import logo from './assets/enani-logo-white.png';

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center px-14 py-6 bg-[#070709]">
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
    </nav>
  );
};

export default Nav;
