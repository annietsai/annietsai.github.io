import inTheEndCoverArtPhoto from './assets/in-the-end-cover-art.jpeg';
import { motion } from 'framer-motion';
import PageWrapper from './PageWrapper';

const CTA_LINK = 'https://too.fm/evodzrd';
const CTA_TEXT = 'PRE-SAVE “IN THE END”';
const IMAGE_ALT = 'In The End cover art';

const Music: React.FC = () => {
  return (
    <PageWrapper>
      <main
        className="flex flex-col flex-1 items-center
          gap-10
          px-8 sm:px-12 md:px-16 xl:px-32
          py-20 md:py-10"
      >
        <h1 className="text-4xl tracking-[0.2em] font-medium">MUSIC</h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="flex justify-center gap-5"
        >
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border-2 border-white
              text-xl tracking-[3px]
              transition-all duration-500 ease-out
              hover:bg-white hover:text-black
              px-8 py-4 text-base
              lg:px-13 lg:py-6"
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
              className="
                w-full h-full max-w-[720px]
                object-cover object-center"
            />
          </a>
        </motion.div>
      </main>
    </PageWrapper>
  );
};

export default Music;
