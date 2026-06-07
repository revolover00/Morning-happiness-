import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import SignatureDishes from "./components/SignatureDishes";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-base-dark text-ivory selection:bg-gold selection:text-base-dark min-h-screen">
      {/* Decorative vertical lines running as subtle backdrop grids */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden max-w-7xl mx-auto px-6 md:px-12 opacity-[0.02] flex justify-between h-full">
        <div className="w-[1px] h-full bg-gold" />
        <div className="w-[1px] h-full bg-gold hidden md:block" />
        <div className="w-[1px] h-full bg-gold" />
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <Navbar onBookNowClick={() => scrollToSection("book-now")} />
        
        <main>
          <Hero 
            onBookNowClick={() => scrollToSection("book-now")} 
            onViewDishesClick={() => scrollToSection("dishes")} 
          />
          <Experience />
          <SignatureDishes />
          <About />
          <BookingForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}

