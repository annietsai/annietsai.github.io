import logo from './assets/enani-logo-white.png';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer
      className="
        flex flex-col sm:flex-row
        justify-between items-center
        px-14 py-10
        border-t border-white/10
        gap-6 sm:gap-2"
    >
      <div className="flex flex-col gap-2 text-xs opacity-60">
        <div className="flex justify-center sm:justify-start">
          <img src={logo} alt="Enani logo" className="h-6 w-auto" />
        </div>
        <span>© {new Date().getFullYear()} Enani. All rights reserved.</span>
      </div>

      <SocialIcons />
    </footer>
  );
};

export default Footer;
