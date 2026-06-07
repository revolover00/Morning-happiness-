import { motion } from "motion/react";
import { Utensils, Award, ChefHat } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: <Utensils className="text-gold w-8 h-8 stroke-[1.2]" />,
      title: "Private Dining",
      subtitle: "Bespoke Gastronomy",
      description: "Chef Ron comes to you. Your home, your venue, your rules. Enjoy a multi-course culinary event customized entirely to your palate with full premium tableside service.",
    },
    {
      icon: <Award className="text-gold w-8 h-8 stroke-[1.2]" />,
      title: "Event Catering",
      subtitle: "Exquisite Celebrations",
      description: "From intimate dinners to curated celebrations — every detail is gracefully handled. We create sophisticated menus tailored to elevate any momentous occasion in Las Vegas.",
    },
    {
      icon: <ChefHat className="text-gold w-8 h-8 stroke-[1.2]" />,
      title: "Personal Chef Service",
      subtitle: "Daily Luxury Living",
      description: "Regular in-home exquisite cooking tailored precisely to your lifestyle, dietary requirements, and tastes. Savor luxury multi-course dining as part of your day-to-day rhythm.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-base-dark px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative vector badge background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-3"
          >
            Exclusive Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-ivory tracking-tight"
          >
            What We Offer
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-gold/50 mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#111111] border-t-2 border-gold/70 px-8 py-12 flex flex-col justify-between rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-x border-b border-white/[0.02]/50 hover:bg-[#151515] transition-all duration-300 relative group"
            >
              {/* Card light reflection edge styling */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/10 transition-colors duration-500 pointer-events-none" />
              
              <div>
                <div className="mb-8 w-12 h-12 flex items-center justify-center border border-gold/15 rounded-sm bg-base-dark">
                  {exp.icon}
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl text-ivory font-light mb-2">
                  {exp.title}
                </h3>
                
                <p className="font-sans text-[11px] uppercase tracking-widest text-gold/70 font-medium mb-6">
                  {exp.subtitle}
                </p>
                
                <p className="font-sans text-sm md:text-base text-ivory/70 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center gap-2 group-hover:text-gold transition-colors duration-300">
                <span className="font-sans text-xs tracking-widest uppercase font-medium">Inquire Dynamic Details</span>
                <span className="text-gold transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
