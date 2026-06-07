import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Leaf, Compass, Eye, EyeOff } from "lucide-react";
import { Dish } from "../types";

export default function SignatureDishes() {
  const [activeDish, setActiveDish] = useState<string | null>(null);

  const dishes: Dish[] = [
    {
      id: "tomahawk",
      name: "Tomahawk Steak",
      category: "THE SHOWSTOPPER",
      description: "Perfectly seared, impossibly tender. A showcase of premium American Wagyu dry-aged for forty-five days, kissed by real cherrywood smoke.",
      tag: "House Signature",
      prepDetails: "Hand-finished tableside, kissed with melted rosemary butter and flaky Maldon sea salt. Served with charred pearl onions.",
      ingredients: ["American Wagyu Beef", "45-Day Dry Age", "Flaky Maldon Salt", "Smoked Rosemary Butter"]
    },
    {
      id: "seafood",
      name: "Seafood Pasta",
      category: "MEDITERRANEAN SOUL",
      description: "Wild-caught giant diver scallops and colossal prawns nestled in handmade black squid ink bucatini pasta in white wine saffron emulsion.",
      prepDetails: "Sautéed in vintage cold-pressed Tuscan olive oil, laced with garlic confit, fresh fennel pollen, and zesty Meyer lemon oil.",
      ingredients: ["Colossal Prawns", "Diver Scallops", "Hand-Rolled Squid Ink Bucatini", "Saffron Emulsion"]
    },
    {
      id: "tasting",
      name: "Chef's Tasting Menu",
      category: "SURPRISE DIALOGUE",
      description: "A tailored, multi-course surprise journey through Chef Ron's finest seasonal creations, calibrated exclusively to your guests' taste profiles.",
      tag: "Highly Recommended",
      prepDetails: "Customized from weekly micro-farm deliveries in Nevada. Each course paired with exquisite vintage culinary elements.",
      ingredients: ["Seasonal Wild Greens", "Imported Rare Delicacies", "Caviar Accompaniments", "Artisanal Pairings"]
    }
  ];

  return (
    <section
      id="dishes"
      className="py-24 md:py-32 bg-[#050505] px-6 md:px-12 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 80% 20%, rgba(74, 14, 26, 0.08) 0%, transparent 40%),
          #050505
        `,
      }}
    >
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-3"
          >
            Epicurean Selection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-ivory tracking-tight"
          >
            Signature Creations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display italic text-lg md:text-xl text-ivory/60 mt-4 max-w-lg mx-auto"
          >
            "Every plate is crafted with intention."
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] bg-gold/50 mx-auto mt-6"
          />
        </div>

        {/* Dish row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {dishes.map((dish, idx) => {
            const isSelected = activeDish === dish.id;
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-[#0c0c0c] border border-white/[0.04] p-8 md:p-10 rounded-sm hover:border-gold/35 transition-all duration-500 relative flex flex-col justify-between group h-full shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                
                {/* Gold Highlight Ring on Hover */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/15 transition-all duration-500 rounded-sm pointer-events-none" />

                <div>
                  {/* Category & Custom Tags */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase font-bold">
                      {dish.category}
                    </span>
                    {dish.tag && (
                      <span className="bg-burgundy/60 text-ivory text-[10px] tracking-wider uppercase px-2.5 py-0.5 border border-gold/30 rounded-full font-medium">
                        {dish.tag}
                      </span>
                    )}
                  </div>

                  {/* Divider line style */}
                  <div className="w-12 h-[1px] bg-gold/45 mb-6 group-hover:w-20 transition-all duration-500" />

                  {/* Dish Name */}
                  <h3 className="font-display text-3xl md:text-4xl text-ivory font-light tracking-wide mb-4 group-hover:text-gold transition-colors duration-300">
                    {dish.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm md:text-base text-ivory/70 leading-relaxed font-light mb-8">
                    {dish.description}
                  </p>

                  {/* Expanded ingredients toggle & view details */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="pt-4 border-t border-white/[0.05] space-y-4">
                          <div>
                            <span className="font-sans text-[10px] tracking-widest text-gold uppercase block mb-1.5 font-semibold">
                              Chef's Note & Preparation:
                            </span>
                            <p className="font-sans text-xs text-ivory/80 leading-relaxed italic">
                              {dish.prepDetails}
                            </p>
                          </div>
                          <div>
                            <span className="font-sans text-[10px] tracking-widest text-gold uppercase block mb-1.5 font-semibold">
                              Core Ingredients:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {dish.ingredients.map((ing) => (
                                <span
                                  key={ing}
                                  className="text-[10px] uppercase tracking-wider font-sans bg-white/[0.04] border border-white/[0.08] text-ivory/90 px-2.5 py-1 rounded-sm"
                                >
                                  {ing}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center justify-between">
                  <button
                    onClick={() => setActiveDish(isSelected ? null : dish.id)}
                    className="flex items-center gap-2 text-xs font-sans tracking-widest text-gold uppercase hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {isSelected ? (
                      <>
                        <EyeOff size={14} /> Hide Secret Notes
                      </>
                    ) : (
                      <>
                        <Eye size={14} /> Chef's Intimate Details
                      </>
                    )}
                  </button>
                  <span className="font-sans text-xs text-gold/35 group-hover:text-gold/80 transition-colors duration-500">
                    ★ ★ ★ ★ ★
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
