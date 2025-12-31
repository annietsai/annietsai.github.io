import Nav from './Nav';
import Footer from './Footer';
import { motion } from 'framer-motion';
import epk from '../public/enani-epk.pdf';

const EPK: React.FC = () => {
  return (
    <div className="main-page">
      <Nav />

      <main className="epk-content">
        <h1>ELECTRONIC PRESS KIT</h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="epk-pdf-wrapper"
        >
          <object data={epk} type="application/pdf" className="epk-pdf">
            <p>
              Your browser does not support PDF embeds. You can
              <a href={epk}>download the PDF document</a> instead.
            </p>
          </object>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default EPK;
