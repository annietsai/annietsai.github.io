import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMobileMenuStore } from './stores/mobileMenuStore';

const NAV_LINKS = [
  { name: 'HOME', href: '/' },
  { name: 'MUSIC', href: '/music' },
  { name: 'ABOUT', href: '/about' },
  { name: 'EPK', href: '/epk' },
];

const MobileMenu: React.FC = () => {
  const navigate = useNavigate();
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenuStore();

  const handleNavClick = async (href: string) => {
    await navigate(href);
    closeMobileMenu();
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="flex flex-col items-center justify-center grow pb-16"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="
                text-white text-lg tracking-[2px]
                opacity-80 hover:opacity-100 transition-opacity
                cursor-pointer"
            >
              <h1 className="text-xl tracking-[0.3em] font-medium py-4">
                {link.name}
              </h1>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
