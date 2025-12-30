import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaSpotify,
  FaSoundcloud,
} from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <a
        href="https://instagram.com/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/people/Enani/61584304784920"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.tiktok.com/@enanimusic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok />
      </a>
      <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
        <FaSpotify />
      </a>
      <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
        <SiApplemusic />
      </a>
      <a
        href="https://soundcloud.com/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSoundcloud />
      </a>
    </div>
  );
};

export default SocialIcons;
