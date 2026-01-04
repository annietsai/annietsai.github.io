import { motion } from 'framer-motion';
import aboutPhoto from './assets/about-photo.jpg';
import Footer from './Footer';
import Nav from './Nav';

const About: React.FC = () => {
  return (
    <div className="main-page">
      <Nav />

      <main className="about-content">
        <div className="about-image">
          <motion.div
            className="cta"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          >
            <img src={aboutPhoto} alt="Enani portrait" />
          </motion.div>
        </div>

        <div className="about-right">
          <h1>ABOUT ENANI</h1>
          <div className="about-bio">
            <p>
              <strong>Enani</strong> is a music producer, DJ, singer, and
              songwriter. Classically trained in piano and viola and later
              self-taught on guitar, Enani began producing electronic music in
              2020, blending cinematic sound design with euphoric melodies and
              emotional storytelling.
            </p>
            <p>
              Since then, Enani has amassed over 60,000 streams on SoundCloud
              and in 2024 was awarded the SLANDER x ICON Collective scholarship.
              Although the program closed shortly after her start in April 2025,
              she has continued to steadily refine a sound that lives between
              cinematic bass, melodic electronic, and high-energy club
              influences. Her work is defined by immersive atmospheres, powerful
              builds, and a strong emotional core.
            </p>
            <p>
              Enani brings this world to life through dynamic performances that
              weave original productions with remixes and high-impact electronic
              selections, creating a genre-fluid experience that balances
              introspection with intensity.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
