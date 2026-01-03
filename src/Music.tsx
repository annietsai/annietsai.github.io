import Nav from './Nav';
import Footer from './Footer';
import inTheEndCoverArtPhoto from './assets/in-the-end-cover-art.jpeg';
import { motion } from 'framer-motion';

const CTA_LINK = 'https://too.fm/evodzrd';
const CTA_TEXT = 'PRE-SAVE “IN THE END”';
const IMAGE_ALT = 'In The End cover art';

const Music: React.FC = () => {
  return (
    <div className="main-page">
      <Nav />

      <main className="music-content">
        <h1>MUSIC</h1>
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        >
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            {CTA_TEXT}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
        >
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
            <img
              src={inTheEndCoverArtPhoto}
              alt={IMAGE_ALT}
              className="music-cover-art"
            />
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Music;
