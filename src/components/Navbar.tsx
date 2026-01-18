import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoRassam from "@/assets/logo-rassam.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Galerie", href: "#galerie" },
    { name: "À Propos", href: "#a-propos" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3">
            <img src={logoRassam} alt="Rassam Dialkum Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-wide ${isScrolled ? "text-foreground" : "text-white"}`}>
                Rassam Dialkum
              </span>
              <span className={`text-xs ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                by Youness Moutaouakil
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  isScrolled ? "text-foreground/80 hover:text-amber-500" : "text-white/90 hover:text-amber-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-charcoal/95 backdrop-blur-lg md:hidden z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-cream shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
                <div className="flex items-center gap-3">
                  <img src={logoRassam} alt="Rassam" className="w-10 h-10 object-contain" />
                  <span className="text-charcoal font-serif text-lg">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-charcoal/5 hover:bg-charcoal/10 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 py-8 px-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-4 text-lg font-serif text-charcoal border-b border-charcoal/10 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-charcoal/10">
                <p className="text-xs text-muted-foreground text-center">
                  by Youness Moutaouakil
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
