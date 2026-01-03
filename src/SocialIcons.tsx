import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaSpotify,
  FaSoundcloud,
} from 'react-icons/fa';
import { SiApplemusic, SiLinktree } from 'react-icons/si';

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <a
        href="https://instagram.com/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/people/Enani/61584304784920"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.tiktok.com/@enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaTiktok />
      </a>
      <span className="social-tooltip">
        <FaSpotify />
        <span className="tooltip-text">Coming soon</span>
      </span>
      <span className="social-tooltip">
        <SiApplemusic />
        <span className="tooltip-text">Coming soon</span>
      </span>
      {/* <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
        <FaSpotify />
      </a>
      <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
        <SiApplemusic />
      </a> */}
      <a
        href="https://soundcloud.com/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaSoundcloud />
      </a>
      <a
        href="https://linktr.ee/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <SiLinktree />
      </a>
    </div>
  );
};

export default SocialIcons;
