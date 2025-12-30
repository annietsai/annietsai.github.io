import Nav from './Nav';
import Footer from './Footer';
import { motion } from 'framer-motion';

const PressKit: React.FC = () => {
  return (
    <div className="main-page">
      <Nav />

      <main className="press-kit-content">
        <h1>ELECTRONIC PRESS KIT</h1>
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        >
          COMING SOON
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PressKit;
