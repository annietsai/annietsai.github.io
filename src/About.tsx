import { motion } from 'framer-motion';
import aboutPhoto from './assets/about-photo.jpg';
import PageWrapper from './PageWrapper';

const About: React.FC = () => {
  return (
    <PageWrapper>
      <main
        className="flex-1
          grid grid-cols-1 md:grid-cols-2
          items-center
          gap-8 md:gap-12 xl:gap-20
          px-8 sm:px-12 md:px-16 xl:px-32
          py-10 sm:py-12 xl:py-20"
      >
        <div>
          <img
            src={aboutPhoto}
            alt="Enani portrait"
            className="w-full h-auto rounded-sm object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          >
            <h1 className="text-xl tracking-[0.3em] font-medium">
              ABOUT ENANI
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
          >
            <div className="flex flex-col gap-4 text-base leading-relaxed opacity-85 max-w-[600px]">
              <p>
                <strong>Enani</strong> is a music producer, DJ, singer, and
                songwriter. Classically trained in piano and viola and later
                self-taught on guitar, Enani began producing electronic music in
                2020, blending cinematic sound design with euphoric melodies and
                emotional storytelling.
              </p>
              <p>
                Since then, Enani has amassed over 60,000 streams on SoundCloud
                and in 2024 was awarded the SLANDER x ICON Collective
                scholarship. Although the program closed shortly after her start
                in April 2025, she has continued to steadily refine a sound that
                lives between cinematic bass, melodic electronic, and
                high-energy club influences. Her work is defined by immersive
                atmospheres, powerful builds, and a strong emotional core.
              </p>
              <p>
                Enani brings this world to life through dynamic performances
                that weave original productions with remixes and high-impact
                electronic selections, creating a genre-fluid experience that
                balances introspection with intensity.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default About;
