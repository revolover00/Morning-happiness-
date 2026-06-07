import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";

interface NavbarProps {
  onBookNowClick: () => void;
}

export default function Navbar({ onBookNowClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Signature Dishes", href: "#dishes" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 ${
          isScrolled
            ? "bg-base-dark/95 backdrop-blur-md border-b border-gold/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group relative">
            <span className="font-display italic text-2xl md:text-3xl font-medium tracking-wide text-ivory group-hover:text-gold transition-colors duration-300">
              Morning Happiness
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-gold opacity-80 font-sans mt-0.5">
              Las Vegas • Private Dining
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm tracking-widest text-ivory/80 hover:text-gold uppercase relative py-2 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <button
              onClick={onBookNowClick}
              id="nav-cta"
              className="font-sans text-xs tracking-widest text-gold hover:text-base-dark uppercase border border-gold px-6 py-2.5 hover:bg-gold transition-all duration-500 rounded-sm font-medium hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ivory hover:text-gold transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[76px] bg-base-dark/98 backdrop-blur-lg z-40 md:hidden flex flex-col px-6 py-12 border-t border-gold/10"
          >
            <div className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-lg tracking-widest text-ivory hover:text-gold uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <hr className="w-16 border-gold/20" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="font-sans text-sm tracking-widest text-base-dark bg-gold uppercase px-12 py-3 hover:bg-gold-light transition-all duration-300 font-semibold rounded-sm w-full max-w-xs text-center shadow-[0_0_15px_rgba(201,168,76,0.2)]"
              >
                Book Experience
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
