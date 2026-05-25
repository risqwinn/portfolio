import { motion } from "framer-motion";

import sertif1 from "../assets/sertif1.png";
import sertif2 from "../assets/sertif2.png";
import sertif3 from "../assets/sertif3.png";
import sertif4 from "../assets/sertif4.png";

export default function InfiniteScroll() {
  // DATA CERTIFICATE
  const logos = [
    sertif1,
    sertif2,
    sertif3,
    sertif4,
  ];

  return (
    <section className="w-full py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Certificates
        </h2>

        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="w-16 h-[3px] bg-black"></div>
          <div className="w-6 h-[3px] bg-black/40"></div>
        </div>
      </div>

      {/* INFINITE SCROLL */}
      <div className="relative w-full overflow-hidden py-6">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"></div>

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-12 w-max"
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="flex items-center justify-center 
              min-w-[500px] h-[350px] 
              bg-white rounded-3xl shadow-2xl 
              border border-gray-200 p-4"
            >
              <img
                src={logo}
                alt="certificate"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}