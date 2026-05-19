import { motion } from "framer-motion";

import sertif1 from "../assets/sertif1.png";
import sertif2 from "../assets/sertif2.png";
import sertif3 from "../assets/sertif3.png";
import sertif4 from "../assets/sertif4.png";
import sertif5 from "../assets/sertif5.png";
export default function InfiniteScroll() {
  // DATA LOGO
  const logos = [
    sertif1,
    sertif2,
    sertif3,
    sertif4,
    sertif5,
  ];

  return (
    <section className="w-full py-16 bg-[#F8FAFC] overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Certificates
        </h2>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-12 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black/40"></div>
        </div>
      </div>

      {/* INFINITE SCROLL */}
      <div className="relative w-full overflow-hidden">
        
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"></div>

        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"></div>

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-8 w-max"
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              className="flex items-center justify-center min-w-[140px] h-[140px] bg-white rounded-3xl shadow-md border border-gray-100"
            >
              <img
                src={logo}
                alt="sertificate"
                className="w-16 h-16 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}