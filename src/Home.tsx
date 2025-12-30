import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaSoundcloud,
  FaTiktok,
} from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { Link } from 'react-router-dom';
import logo from './assets/enani-logo-white.png';
import background from './assets/in-the-end-cover-art.jpeg';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="overlay" />

      <img className="background" src={background} />
      <div className="overlay" />

      <nav className="nav">
        <img src={logo} alt="Enani logo" className="logo-image" />
      </nav>

      <div className="home-content">
        <div className="links">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Link to="/about">ABOUT</Link>
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          >
            <Link to="/music">MUSIC</Link>
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
          >
            <Link to="/press-kit">PRESS KIT</Link>
          </motion.span>
        </div>
      </div>

      <motion.div
        className="home-social-links"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <a
          href="https://instagram.com/enanimusic"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/people/Enani/61584304784920"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@enanimusic"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-icon"
        >
          <FaTiktok />
        </a>
        <span className="home-social-tooltip">
          <FaSpotify />
          <span className="home-tooltip-text">Coming soon</span>
        </span>
        <span className="home-social-tooltip">
          <SiApplemusic />
          <span className="home-tooltip-text">Coming soon</span>
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
          className="home-social-icon"
        >
          <FaSoundcloud />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
