import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

/* Elegant letter-by-letter writing animation */
function TypewriterText({ text, className = "", delay = 0, once = true }: TypewriterTextProps) {
  const letters = Array.from(text);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.15, ease: "easeOut" }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {letters.map((letter, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block whitespace-pre">
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function About() {
  const stats = [
    {
      value: "5.0 ★",
      label: "Perfect Rating",
      desc: "Impeccable local Las Vegas reputation"
    },
    {
      value: "Daily",
      label: "Availability",
      desc: "From golden sunrise to velvet twilight"
    },
    {
      value: "Premium",
      label: "Selected Ingredients",
      desc: "Only the finest global & local suppliers"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#0A0A0A] px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative luxury gradient ambient glow */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top visual helper */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-1.5 border border-gold/15 bg-white/[0.02]/50 backdrop-blur-md rounded-full"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-bold">MEET CHEF RON</span>
          </motion.div>
        </div>

        {/* 2-Column editorial bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#111111] p-10 md:p-14 border-l-4 border-gold flex flex-col justify-between rounded-r-sm shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative"
          >
            {/* Background quote water mark */}
            <div className="absolute right-6 top-6 text-gold/5">
              <Quote size={120} className="stroke-[0.5]" />
            </div>

            <div className="relative z-10">
              <Quote className="text-gold mb-6 stroke-[1.2]" size={36} />
              <blockquote className="font-display italic text-3xl md:text-4xl text-ivory/95 leading-normal mb-8 font-light">
                "Food is not just fuel. It's an experience, a memory, a feeling."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/[0.05] relative z-10">
              <p className="font-display text-xl text-gold tracking-wide italic">
                — Chef Ron
              </p>
              <p className="font-sans text-[10px] tracking-widest text-ivory/50 uppercase mt-1">
                Founder, Morning Happiness
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio Prose */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl md:text-4xl text-ivory font-light mb-6">
              Vegas Luxury Crafted For Your Living Room
            </h3>
            
            <div className="space-y-6 font-sans text-base text-ivory/70 leading-relaxed font-light">
              <p>
                Chef Ron is a professional private culinary designer based in Las Vegas, NV, widely acclaimed for his uncompromising attention to absolute detail, pairing rare global ingredients with organic regional produce.
              </p>
              <p>
                Having cooked for high-profile entertainers, athletes, and boutique corporate retreats in the Valley, Chef Ron understands that dining is a form of celebration. He doesn't just deliver exquisite dishes; he designs an intimate culinary theater and leaves your space state-of-the-art pristine.
              </p>
              <p>
                Morning Happiness is dedicated to bringing fine dining out of noisy commercial restaurants and directly onto your private tables. Available for elite private experiences, catering, and long-term personal residency contracts.
              </p>
            </div>

            {/* Hand-signed styling with premium typing/drawing animation */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold/45" />
              <div className="flex items-center">
                <TypewriterText
                  text="Ron"
                  className="font-display italic text-2xl text-gold font-medium tracking-widest"
                  delay={0.5}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-Column Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 md:mt-28">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: idx * 0.25,
                    when: "beforeChildren"
                  }
                }
              }}
              className="bg-[#111111]/40 border border-white/[0.04] px-8 py-10 rounded-sm text-center relative group hover:border-gold/20 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-display text-gold mb-2 font-normal flex justify-center">
                <TypewriterText text={stat.value} delay={idx * 0.1} />
              </div>
              <div className="font-sans text-xs uppercase tracking-widest text-ivory font-medium mb-1 min-h-[16px] flex justify-center">
                <TypewriterText text={stat.label} delay={idx * 0.1 + 0.3} />
              </div>
              <div className="font-sans text-xs text-ivory/50 min-h-[32px] flex justify-center">
                <TypewriterText text={stat.desc} delay={idx * 0.1 + 0.6} />
              </div>
              {/* Subtle line background layout */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold/40 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
