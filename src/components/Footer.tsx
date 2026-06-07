import { Star } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030303] text-ivory border-t border-white/[0.03] py-16 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute inset-x-0 bottom-0 top-0 max-w-7xl mx-auto px-6 pointer-events-none flex justify-between opacity-[0.02]">
        <div className="w-[1px] h-full bg-gold" />
        <div className="w-[1px] h-full bg-gold" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 relative z-10">
        
        {/* Brand name */}
        <div className="text-center group cursor-pointer" onClick={handleScrollTop}>
          <span className="font-display italic text-3xl text-gold-light group-hover:text-gold transition-colors duration-300">
            Morning Happiness
          </span>
          <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40 mt-2 font-medium">
            FINE DINING OPERATIVES
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="font-display italic text-lg text-ivory/60 font-light">
            "Every meal is an occasion."
          </p>
        </div>

        {/* Small gold line */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-[1px] bg-gold/30" />
          <Star size={10} className="text-gold fill-gold" />
          <div className="w-8 h-[1px] bg-gold/30" />
        </div>

        {/* Copywrite details */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-white/[0.04] pt-8 mt-4 text-[11px] font-sans text-ivory/40 tracking-wider text-center md:text-left gap-4">
          <div>
            &copy; 1999 - {new Date().getFullYear()} Morning Happiness &middot; Private Chef Services &middot; Las Vegas, NV
          </div>
          <div className="flex items-center gap-6">
            <span className="uppercase text-[9px] tracking-[0.2em] text-gold font-bold">5.0 ⭐ Rating</span>
            <span className="text-white/20">|</span>
            <span className="hover:text-gold transition-colors duration-300 cursor-pointer" onClick={handleScrollTop}>
              Return To Ascent ↑
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
