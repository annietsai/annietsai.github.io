import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaSoundcloud,
  FaTiktok,
} from 'react-icons/fa';
import { SiApplemusic, SiLinktree } from 'react-icons/si';
import { Link } from 'react-router-dom';
import logo from './assets/enani-logo-white.png';
import background from './assets/in-the-end-cover-art-no-title.jpeg';

const Home: React.FC = () => {
  return (
    <section
      className="
      relative min-h-[100dvh]
      flex items-center justify-center
      overflow-hidden"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={background}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.4))] z-10" />

      <nav className="absolute top-0 w-full flex justify-center py-14 z-20">
        <img src={logo} alt="Enani logo" className="h-10 w-auto" />
      </nav>

      <div className="relative z-20 text-center">
        <div className="flex gap-7 text-[13px] tracking-[3px]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Link
              to="/music"
              className="opacity-100 hover:opacity-75 transition-opacity"
            >
              MUSIC
            </Link>
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          >
            <Link
              to="/about"
              className="opacity-100 hover:opacity-75 transition-opacity"
            >
              ABOUT
            </Link>
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
          >
            <Link
              to="/epk"
              className="opacity-100 hover:opacity-75 transition-opacity"
            >
              EPK
            </Link>
          </motion.span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="
          absolute bottom-14 w-full
          flex justify-center gap-6
          text-2xl
          z-20
          pb-[env(safe-area-inset-bottom)]"
      >
        <a
          href="https://instagram.com/enanimusic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/people/Enani/61584304784920"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@enanimusic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
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
          className="hover:opacity-100 transition-opacity"
        >
          <FaSoundcloud />
        </a>
        <a
          href="https://linktr.ee/enanimusic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
        >
          <SiLinktree />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
