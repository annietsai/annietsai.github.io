import { Link } from 'react-router-dom';
import logo from './assets/enani-logo-white.png';

const Nav: React.FC = () => {
  return (
    <nav className="main-nav">
      <div className="nav-left">
        <Link to="/">HOME</Link>
        <Link to="/music">MUSIC</Link>
      </div>

      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="Enani logo" className="nav-logo-image" />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/about">ABOUT</Link>
        <Link to="/epk">EPK</Link>
      </div>
    </nav>
  );
};

export default Nav;
