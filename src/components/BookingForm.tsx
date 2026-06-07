import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Clock, MapPin, CheckCircle2, ChevronRight, Mail } from "lucide-react";
import { BookingInquiry } from "../types";

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingInquiry>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "",
    guestsCount: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type";
    if (!formData.guestsCount) newErrors.guestsCount = "Please estimate guests count";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clean form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        serviceType: "",
        guestsCount: "",
        specialRequests: "",
      });
    }, 1500);
  };

  return (
    <section
      id="book-now"
      className="py-24 md:py-32 bg-[#050505] px-6 md:px-12 relative"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(74, 14, 26, 0.08) 0%, transparent 40%),
          #050505
        `,
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-3">
            Bespoke Arrangements
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-ivory tracking-tight">
            Reserve Your Experience
          </h2>
          <div className="h-[1px] bg-gold/50 mx-auto mt-6 w-[60px]" />
        </div>

        {/* 2-Column form + details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0b0b0b] border border-white/[0.04] p-8 md:p-10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden"
          >
            {/* Top gold line indicator */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold/50 via-gold to-gold/50" />
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="booking-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-display italic text-lg text-ivory/80 mb-6">
                    Let Chef Ron design an uncompromising, fine dining landscape for your party.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ronald Sterling"
                        className={`w-full bg-[#121212] border ${
                          errors.name ? "border-red-500" : "border-white/10"
                        } focus:border-gold px-4 py-3 text-sm text-ivory placeholder-ivory/20 rounded-sm outline-none transition-colors duration-300`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                        Type of Service *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full bg-[#121212] border ${
                          errors.serviceType ? "border-red-500" : "border-white/10"
                        } focus:border-gold px-4 py-3 text-sm text-ivory rounded-sm outline-none transition-colors duration-300 appearance-none`}
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23C9A84C\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                      >
                        <option value="">Select Service</option>
                        <option value="private_dinner">Private Dinner Experience</option>
                        <option value="event_catering">Luxury Event Catering</option>
                        <option value="personal_chef">Resident Personal Chef</option>
                      </select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">
                          {errors.serviceType}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="client@luxury.com"
                        className={`w-full bg-[#121212] border ${
                          errors.email ? "border-red-500" : "border-white/10"
                        } focus:border-gold px-4 py-3 text-sm text-ivory placeholder-ivory/20 rounded-sm outline-none transition-colors duration-300`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 702-555-0199"
                        className={`w-full bg-[#121212] border ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        } focus:border-gold px-4 py-3 text-sm text-ivory placeholder-ivory/20 rounded-sm outline-none transition-colors duration-300`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Date */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full bg-[#121212] border ${
                          errors.date ? "border-red-500" : "border-white/10"
                        } focus:border-gold px-4 py-3 text-sm text-ivory rounded-sm outline-none transition-colors duration-300`}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-[#121212] border border-white/10 focus:border-gold px-4 py-3 text-sm text-ivory rounded-sm outline-none transition-colors duration-300"
                      />
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                        No. of Guests *
                      </label>
                      <input
                        type="number"
                        name="guestsCount"
                        min="1"
                        max="200"
                        value={formData.guestsCount}
                        onChange={handleChange}
                        placeholder="6"
                        className={`w-full bg-[#121212] border ${
                          errors.guestsCount ? "border-red-500" : "border-white/10"
                        } focus:border-gold px-4 py-3 text-sm text-ivory placeholder-ivory/20 rounded-sm outline-none transition-colors duration-300`}
                      />
                      {errors.guestsCount && (
                        <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">
                          {errors.guestsCount}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-gold font-bold mb-2">
                      Allergies & Custom Gastronomy Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please note any specific requests (e.g., Wagyu beef preferences, champagne pairings, organic dairy/nut restrictions)..."
                      className="w-full bg-[#121212] border border-white/10 focus:border-gold px-4 py-3 text-sm text-ivory placeholder-ivory/25 rounded-sm outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-sans text-xs md:text-sm tracking-[0.2em] text-base-dark bg-gold disabled:bg-gold/40 hover:bg-gold/90 font-bold uppercase py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(201,168,76,0.15)] hover:shadow-[0_0_25px_rgba(201,168,76,0.3)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <span className="w-4 h-4 border-2 border-base-dark border-t-transparent rounded-full animate-spin" />
                          <span>SECURIING YOUR SPOT...</span>
                        </div>
                      ) : (
                        <>
                          <span>SEND RESERVATION INQUIRY</span>
                          <ChevronRight size={16} />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-ivory/40 text-center uppercase tracking-widest mt-4 font-light">
                      NO DEPOSIT AT THIS STAGE • CHEF RON WILL RESPOND WITHIN 2 HOURS
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12 px-6 space-y-6 flex flex-col items-center"
                >
                  <CheckCircle2 size={64} className="text-gold animate-bounce" />
                  <h3 className="font-display text-4xl text-ivory font-light">
                    Inquiry Confirmed
                  </h3>
                  <p className="font-sans text-sm md:text-base text-ivory/80 leading-relaxed font-light max-w-md">
                    Thank you for inviting us to your table. Your luxury inquiry has been securely sent directly to Chef Ron. He is reviewing your menu requirements and will personally text/email you within two hours.
                  </p>
                  <div className="w-16 h-[1px] bg-gold/50" />
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-sans text-[11px] tracking-widest text-gold hover:text-white uppercase transition-colors"
                  >
                    ← Fill Another Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Address & Google Map Detail */}
          <div className="space-y-8 flex flex-col justify-between h-full">
            
            <div className="space-y-6 bg-[#0f0f0f] border border-white/[0.03] p-8 rounded-sm">
              <h3 className="font-display text-2xl text-ivory font-light border-b border-white/[0.05] pb-4">
                Grand Office Details
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center rounded-sm text-gold mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-wider uppercase text-gold font-bold">Address</h4>
                    <p className="font-sans text-sm text-ivory/80 leading-relaxed mt-1">
                      3900 E Sunset Rd #2037,<br />
                      Las Vegas, NV 89120
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center rounded-sm text-gold mt-1">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-wider uppercase text-gold font-bold">Residency Hours</h4>
                    <p className="font-sans text-sm text-ivory/80 leading-relaxed mt-1">
                      Every day 6:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center rounded-sm text-gold mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-wider uppercase text-gold font-bold">Direct Line</h4>
                    <p className="font-sans text-sm text-ivory/80 leading-relaxed mt-1">
                      <a href="tel:+17027200534" className="hover:text-gold transition-colors duration-300">
                        +1 702-720-0534
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-72 border border-white/[0.05] rounded-sm overflow-hidden shadow-2xl relative group">
              <iframe
                title="Morning Happiness Las Vegas Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224!2d-115.0893711!3d36.0724756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d1983a1b31dd%3A0xe47f5ac097051fe1!2sMorning%20Happiness!5e0!3m2!1sen!2sus"
                className="w-full h-full border-0 grayscale invert opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
