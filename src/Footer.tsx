import logo from './assets/enani-logo-white.png';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-left">
        <div>
          <img src={logo} alt="Enani logo" className="footer-logo" />
        </div>
        <span>© 2026 Enani. All rights reserved.</span>
      </div>

      <SocialIcons />
    </footer>
  );
};

export default Footer;
