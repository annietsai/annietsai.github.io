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
    <div className="flex justify-center sm:justify-end gap-5">
      <a
        href="https://instagram.com/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 opacity-70 transition-opacity"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/people/Enani/61584304784920"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 opacity-70 transition-opacity"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.tiktok.com/@enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 opacity-70 transition-opacity"
      >
        <FaTiktok />
      </a>
      <a
        href="https://open.spotify.com/artist/740DEDhoQPOsYALbCezzAQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify />
      </a>
      <span className="relative flex items-center opacity-40 cursor-default group">
        <SiApplemusic />
        <span
          className="
            absolute bottom-[140%] left-1/2
            -translate-x-1/2 translate-y-1
            bg-black/80 text-white
            text-[10px] tracking-[1px] uppercase
            px-2.5 py-1.5 rounded
            whitespace-nowrap
            opacity-0 pointer-events-none
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0"
        >
          Coming soon
        </span>
      </span>
      {/* <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
        <SiApplemusic />
      </a> */}
      <a
        href="https://soundcloud.com/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 opacity-70 transition-opacity"
      >
        <FaSoundcloud />
      </a>
      <a
        href="https://linktr.ee/enanimusic"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-100 opacity-70 transition-opacity"
      >
        <SiLinktree />
      </a>
    </div>
  );
};

export default SocialIcons;
