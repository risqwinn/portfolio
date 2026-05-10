import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Projects", id: "#projects" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F8FAFC]/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <h1 className="text-2xl font-extrabold text-[#0F172A]">
          Riski<span className="text-[#3B82F6]">.</span>
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 z-[100] flex items-center justify-center"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-7 h-[3px] bg-[#0F172A] rounded-full"
          />

          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute w-7 h-[3px] bg-[#0F172A] rounded-full"
          />

          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="absolute w-7 h-[3px] bg-[#0F172A] rounded-full"
          />
        </button>
      </div>

      {/* Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 w-screen h-screen bg-[#F8FAFC] z-[999] flex items-center justify-center"
          >
            {/* Navigation */}
            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                >
                  <Link
                    smooth
                    to={item.id}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-bold text-[#0F172A] hover:text-[#3B82F6] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Background Text */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute text-[120px] md:text-[220px] font-black text-[#0F172A] pointer-events-none"
            >
              MENU
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
