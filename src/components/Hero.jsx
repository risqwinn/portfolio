import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import profile4 from "../assets/profile4.png";
import ShinyText from "./Animations/ShinyText";
import SplitText from "./Animations/SplitText";
import cv from "../assets/my_cv.pdf";

export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-36 min-h-screen flex items-center bg-[#F8FAFC] text-[#0F172A] px-5 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0F172A]">
            <SplitText text="Halo 👋, saya Riski" speed={150} />
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#475569] max-w-2xl font-light tracking-wide">
            Seorang siswa jurusan Pengembangan Perangkat Lunak & Gim yang
            berfokus dalam mengembangkan aplikasi web modern dan efisien.
          </p>

          <p className="mt-4 text-lg md:text-xl text-[#475569] max-w-2xl font-light tracking-wide">
            Programmer | <span className="font-semibold text-[#3B82F6]">Web Developer</span>
          </p>

          <div className="mt-10 flex flex-col items-center md:items-start gap-6">
            <a
              href={cv}
              download="CV_Riski.pdf"
              className="px-8 py-3 border-2 border-[#3B82F6] rounded-full font-semibold bg-[#3B82F6]/10 text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#FFFFFF] transition-all flex items-center justify-center overflow-hidden"
            >
              <ShinyText text="Download CV" speed={3} className="font-bold" />
            </a>

            <div className="flex gap-5 text-3xl">
              <a href="https://github.com/Riski588" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#3B82F6] hover:scale-110 transition-all">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/riski-9147ab387/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#3B82F6] hover:scale-110 transition-all">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/risski777/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#3B82F6] hover:scale-110 transition-all">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <clipPath id="blobClip">
                  <path d="M64.5,-23.8C72.3,2.8,59.3,33.4,36.8,49.5C14.2,65.6,-18,67.3,-38,52.7C-58,38,-65.8,7.1,-57.4,-20.5C-49.1,-48,-24.5,-72.1,1.9,-72.7C28.4,-73.4,56.8,-50.5,64.5,-23.8Z" transform="translate(100 100)" />
                </clipPath>
              </defs>
              <image href={profile4} width="100%" height="100%" clipPath="url(#blobClip)" preserveAspectRatio="xMidYMid meet" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}