import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import logoItec from "@/assets/logo-itec.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Projets", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img 
                  src={logoItec} 
                  alt="ITEC Logo" 
                  className={`transition-all duration-300 object-contain drop-shadow-md ${
                    isScrolled ? "h-12 md:h-14" : "h-14 md:h-16 lg:h-20"
                  }`}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.path}
                  href={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`nav-link px-5 py-2 text-sm font-semibold rounded-xl transition-all relative group ${
                    isScrolled ? "text-foreground/80" : "text-white/90"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
                </motion.a>
              ))}
              <ThemeToggle className={isScrolled ? "" : "text-white hover:bg-white/10"} />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/demande-devis">
                  <Button className="ml-2 bg-orange hover:bg-orange-light text-white font-semibold shadow-elegant hover:shadow-xl transition-all rounded-xl px-6 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Demander un devis
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors relative ${
                isScrolled ? "hover:bg-secondary" : "hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative h-full flex flex-col items-center justify-center px-6"
            >
              {/* Logo in mobile menu */}
              <motion.img
                src={logoItec}
                alt="ITEC"
                className="h-20 md:h-24 mb-8 object-contain drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              />
              
              <div className="space-y-6 w-full max-w-sm">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.path}
                    href={link.path}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="block glass-strong px-8 py-4 text-lg font-bold text-white hover:bg-white/20 rounded-2xl transition-all text-center backdrop-blur-xl"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4 flex flex-col gap-4"
                >
                  <ThemeToggle className="self-center bg-white/10 hover:bg-white/20" />
                  <Link to="/demande-devis" className="w-full">
                    <Button className="w-full bg-orange hover:bg-orange-light text-white font-semibold py-6 text-lg rounded-2xl shadow-xl">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Demander un devis
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
