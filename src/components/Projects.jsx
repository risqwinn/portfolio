import { motion } from "framer-motion";
import portfolio from "../assets/portfolio.png";

export default function About() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#F8FAFC] flex items-center px-6 md:px-16 py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileOutOfView={{ opacity: 0, x: 120 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-black">
            My Projects
          </h2>

          {/* Underline */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-12 h-[2px] bg-black"></div>
            <div className="w-5 h-[2px] bg-black/40"></div>
          </div>

          <p className="mt-8 text-gray-500 leading-relaxed max-w-md">
            Here are some of my completed and in-progress projects.
          </p>

          <button className="mt-8 px-6 py-3 bg-[#1E293B] text-white rounded-full text-sm font-semibold hover:bg-[#3B82F6] transition">
            Show Projects
          </button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileOutOfView={{ opacity: 0, x: -120 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
        >
          <div className="w-[280px] md:w-[350px] h-[380px] overflow-hidden rounded-t-full bg-gray-200 shadow-xl">
            <img
              src={portfolio}
              alt="Projects"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}