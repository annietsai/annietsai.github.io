import { motion } from 'framer-motion';
import epk from './assets/enani-epk.pdf';
import PageWrapper from './PageWrapper';

const EPK: React.FC = () => {
  return (
    <PageWrapper>
      <main
        className="
          flex flex-col flex-1 items-center text-center
          gap-10
          px-8 sm:px-12 md:px-16 xl:px-32
          py-20 md:py-10"
      >
        <h1 className="text-4xl tracking-[0.2em] font-medium">PRESS KIT</h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="w-full h-full flex justify-center"
        >
          <object
            data={epk}
            type="application/pdf"
            className="
              hidden md:block
              w-[40vw] h-[57vw]
              max-w-[720px]
              min-h-[500px]"
          >
            <p className="text-sm opacity-70">
              Your browser does not support PDF embeds. You can{' '}
              <a href={epk} className="underline hover:opacity-100 opacity-80">
                download the PDF document
              </a>{' '}
              instead.
            </p>
          </object>
          <a
            href={epk}
            className="
              md:hidden border-2 border-white
              text-md sm:text-xl tracking-[3px]
              transition-all duration-500 ease-out
              hover:bg-white hover:text-black
              px-8 py-4 text-base
              lg:px-13 lg:py-6"
          >
            DOWNLOAD EPK
          </a>
        </motion.div>
      </main>
    </PageWrapper>
  );
};

export default EPK;
