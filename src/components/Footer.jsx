import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className="bg-[#E2E8F0] border-t border-[#0F172A]/5 pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#0F172A]">Quotes</h2>
            <p className="mt-2 text-[#475569] max-w-xs">Membangun solusi web modern yang efisien dan skalabel.</p>
          </div>

          <nav className="flex gap-6 text-sm font-medium text-[#475569]">
            <Link smooth to="#home" className="hover:text-[#3B82F6] transition-colors">Home</Link>
            <Link smooth to="#about" className="hover:text-[#3B82F6] transition-colors">About</Link>
            <Link smooth to="#projects" className="hover:text-[#3B82F6] transition-colors">Projects</Link>
            <Link smooth to="#contact" className="hover:text-[#3B82F6] transition-colors">Contact</Link>
          </nav>

          <div className="flex gap-5 text-2xl">
            <a href="https://github.com/Riski588" target="_blank" className="text-[#475569] hover:text-[#3B82F6] transition-all"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/riski-9147ab387/" target="_blank" className="text-[#475569] hover:text-[#3B82F6] transition-all"><FaLinkedin /></a>
            <a href="https://www.instagram.com/risski777/" target="_blank" className="text-[#475569] hover:text-[#3B82F6] transition-all"><FaInstagramSquare /></a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#0F172A]/5 text-center">
          <p className="text-[#475569]/60 text-sm">© {new Date().getFullYear()} Riski.</p>
        </div>
      </div>
    </footer>
  );
}