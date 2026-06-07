import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onBookNowClick: () => void;
  onViewDishesClick: () => void;
}

export default function Hero({ onBookNowClick, onViewDishesClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{
        background: `
          radial-gradient(circle at 10% 20%, rgba(201, 168, 76, 0.07) 0%, transparent 45%),
          radial-gradient(circle at 90% 80%, rgba(74, 14, 26, 0.12) 0%, transparent 55%),
          radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.02) 0%, transparent 35%),
          #0A0A0A
        `,
      }}
    >
      {/* Editorial aesthetic gold guidelines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 md:px-12 opacity-5">
        <div className="w-[1px] h-full bg-gold" />
        <div className="w-[1px] h-full bg-gold hidden md:block" />
        <div className="w-[1px] h-full bg-gold" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Superior gold tagline */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs md:text-sm tracking-[0.3em] text-gold uppercase mb-5 font-semibold"
        >
          Las Vegas, Nevada • Culinary Excellence
        </motion.p>

        {/* Headline split across 2 lines */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-normal text-ivory tracking-tight leading-tight mb-6"
        >
          A Private Dining
          <span className="block italic text-gold font-light mt-2">
            Experience Like No Other
          </span>
        </motion.h1>

        {/* Subtext in light italic */}
        <motion.p
          variants={itemVariants}
          className="font-display italic text-lg sm:text-xl md:text-2xl text-ivory/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          "Chef Ron brings luxury to your table — wherever you are."
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <button
            onClick={onBookNowClick}
            className="w-full sm:w-auto font-sans text-xs md:text-sm tracking-[0.15em] text-base-dark bg-gold uppercase px-8 py-4 hover:bg-gold/90 transition-all duration-500 rounded-sm font-semibold hover:shadow-[0_0_20px_rgba(201,168,76,0.35)] cursor-pointer"
          >
            Book Your Experience
          </button>
          
          <button
            onClick={onViewDishesClick}
            className="w-full sm:w-auto font-sans text-xs md:text-sm tracking-[0.15em] text-ivory uppercase border border-ivory/30 px-8 py-4 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-500 rounded-sm font-medium cursor-pointer"
          >
            View Signature Dishes
          </button>
        </motion.div>
      </motion.div>

      {/* Small scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1px flex flex-col items-center gap-2 text-ivory/60 cursor-pointer pointer-events-none"
      >
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/80">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
