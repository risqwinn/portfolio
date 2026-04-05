import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-blue-950/90 backdrop-blur-lg border-green-500/20 py-3 shadow-lg text-white"
          : "bg-white border-white py-5 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5">
        <h1 className="text-xl font-extrabold tracking-tight">
          Riski<span className="text-green-500">.</span>
        </h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none relative w-8 h-8 flex items-center justify-center"
          >
            <span
              className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-current transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`}
            ></span>
          </button>
        </div>

        <ul
          className={`hidden md:flex gap-8 font-semibold ${isScrolled ? "text-white/80" : "text-black/70"}`}
        >
          <Link
            smooth
            to="#home"
            className="hover:text-green-500 transition-all"
          >
            Beranda
          </Link>
          <Link
            smooth
            to="#about"
            className="hover:text-green-500 transition-all"
          >
            Tentang Saya
          </Link>
          <Link
            smooth
            to="#projects"
            className="hover:text-green-500 transition-all"
          >
            Portfolio
          </Link>
          <Link
            smooth
            to="#contact"
            className="hover:text-green-500 transition-all"
          >
            Contact
          </Link>
        </ul>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        } ${isScrolled ? "bg-blue-950/95" : "bg-white"} border-t border-green-500/10`}
      >
        <ul className="flex flex-col items-center gap-6 font-semibold">
          {[
            { name: "Beranda", id: "#home" },
            { name: "Tentang Saya", id: "#about" },
            { name: "Portfolio", id: "#projects" },
            { name: "Contact", id: "#contact" },
          ].map((item, index) => (
            <Link
              key={item.name}
              smooth
              to={item.id}
              className={`transition-all duration-300 transform w-full text-center ${
                isOpen ? "translate-y-0" : "-translate-y-4"
              } hover:text-green-500`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 100);
              }}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
