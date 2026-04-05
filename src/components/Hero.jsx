import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import ShinyText from "./Animations/ShinyText";
import SplitText from "./Animations/SplitText";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-blue-950 text-white px-5 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <SplitText text="Halo 👋, saya Riski" speed={150} />
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-light tracking-wide">
            Sedang belajar membangun backend dari nol — dari API, database, sampai
            server menggunakan Express.js.
          </p>

          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl font-light tracking-wide">
            Backend Developer |{" "}
            <span className="font-semibold text-green-500">
              Node.js, Express, & MongoDB
            </span>
          </p>

          <div className="mt-10 flex flex-col items-center md:items-start gap-6">
            <a
              href="/my_cv.pdf"
              download="CV_Riski.pdf"
              className="px-8 py-3 border-2 border-green-500 rounded-full font-semibold bg-green-500/10 hover:bg-green-500 transition-all flex items-center justify-center overflow-hidden"
            >
              <ShinyText text="Download CV" speed={3} className="font-bold" />
            </a>

            <div className="flex gap-5 text-3xl">
              <a 
                href="https://github.com/Riski588" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-green-500 hover:scale-110 transition-all"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/riski-9147ab387/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-green-500 hover:scale-110 transition-all"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.instagram.com/risski777/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-green-500 hover:scale-110 transition-all"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end items-center relative">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex justify-center items-center">
            
            <div className="absolute inset-0 z-0 flex justify-center items-center">
              <svg 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full scale-110 opacity-20"
              >
                <path
                  fill="#22c55e" 
                  d="M64.5,-23.8C72.3,2.8,59.3,33.4,36.8,49.5C14.2,65.6,-18,67.3,-38,52.7C-58,38,-65.8,7.1,-57.4,-20.5C-49.1,-48,-24.5,-72.1,1.9,-72.7C28.4,-73.4,56.8,-50.5,64.5,-23.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <div className="relative z-10 w-full h-full">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-contain drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}