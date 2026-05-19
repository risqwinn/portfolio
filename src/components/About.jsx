import { motion } from "framer-motion";
import profile3 from "../assets/profile3.jpeg";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";

// ICONS
import {
  FaLaravel,
  FaPhp,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiTailwindcss, SiJavascript, SiDart, SiExpress } from "react-icons/si";

export default function About() {
  // Variasi animasi container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variasi animasi gambar
  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  // STACK WITH ICON
  const stacks = [
    {
      name: "Laravel",
      icon: <FaLaravel className="text-red-500 text-xl" />,
    },
    {
      name: "Dart",
      icon: <SiDart className="text-sky-500 text-xl" />,
    },
    {
      name: "PHP",
      icon: <FaPhp className="text-indigo-500 text-xl" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400 text-xl" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-sky-400 text-xl" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-xl" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500 text-xl" />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-xl" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-xl" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-black text-xl" />,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 md:px-16 py-16 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-black">
          Skills Overview
        </h2>

        <div className="flex items-center gap-3 mt-4">
          <div className="w-12 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black/40"></div>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE STACK */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover="hover"
          className="relative flex items-center justify-center h-[450px] group cursor-pointer"
        >
          <motion.div
            variants={imageVariants}
            initial={{
              rotate: -10,
              x: -20,
              y: 20,
            }}
            whileHover={{
              x: -170,
              y: -40,
              rotate: -12,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
            }}
            className="absolute w-[240px] h-[320px] rounded-3xl overflow-hidden shadow-xl z-10 border-4 border-white"
          >
            <img
              src={profile6}
              alt="profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial={{
              rotate: 0,
              x: 0,
              y: 0,
            }}
            whileHover={{
              scale: 1.12,
              y: -20,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
            }}
            className="absolute w-[250px] h-[340px] rounded-3xl overflow-hidden shadow-2xl z-30 border-4 border-white"
          >
            <img
              src={profile3}
              alt="profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial={{
              rotate: 10,
              x: 20,
              y: 20,
            }}
            whileHover={{
              x: 170,
              y: -40,
              rotate: 12,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
            }}
            className="absolute w-[240px] h-[320px] rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white"
          >
            <img
              src={profile5}
              alt="profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            {/* TEXT */}
            {/* <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left font-light">
              {/* I am a passionate frontend & backend developer who loves building
              clean, modern, and interactive web experiences. I enjoy learning
              new technologies and creating responsive applications with smooth
              user interfaces. */}

            {/* </p> */}

            {/* STACK */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-800">
                Soft Skills
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left font-light">
                Saya dapat bekerja secara efektif baik secara individu maupun
                dalam tim. Saya mampu berkomunikasi dengan baik, cepat
                beradaptasi dengan lingkungan baru, dan memiliki kemampuan
                problem solving dalam menghadapi tantangan saat mengembangkan
                aplikasi. Selain itu, saya juga terbiasa bekerja sama dalam tim,
                mengatur waktu dengan baik, berpikir kreatif, serta terus
                belajar untuk meningkatkan kemampuan diri.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-4 mt-2">
                Hard Skills
              </h3>

              <div className="flex flex-wrap gap-4">
                {stacks.map((stack, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* ICON */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100">
                      {stack.icon}
                    </div>

                    {/* TEXT */}
                    <span className="text-sm font-medium text-gray-700">
                      {stack.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
