import { FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 border-t border-white/10 pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Riski
            </h2>
            <p className="mt-2 text-white/60 max-w-xs">
              Membangun solusi backend yang efisien dan skalabel dengan teknologi modern.
            </p>    
          </div>

          <nav className="flex gap-6 text-sm font-medium text-white/70">
            <Link smooth to="#home" className="hover:text-green-500 transition-colors">Home</Link>
            <Link smooth to="#about" className="hover:text-green-500 transition-colors">Tentang Saya</Link>
            <Link smooth to="#projects" className="hover:text-green-500 transition-colors">Projects</Link>
            <Link smooth to="#contact" className="hover:text-green-500 transition-colors">Contact</Link>
          </nav>

          <div className="flex gap-5 text-2xl">
            <a 
              href="https://github.com/Riski588" 
              target="_blank" 
              className="text-white/50 hover:text-green-500 hover:scale-110 transition-all"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/riski-9147ab387/" 
              target="_blank" 
              className="text-white/50 hover:text-green-500 hover:scale-110 transition-all"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://www.instagram.com/risski777/" 
              target="_blank" 
              className="text-white/50 hover:text-green-500 hover:scale-110 transition-all"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Riski
          </p>
        </div>
      </div>
    </footer>
  );
}