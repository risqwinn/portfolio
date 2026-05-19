import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Project() {
  const projects = [
    {
      title: "Web Intensity Carbon Uk",
      image: project1,
      description:
        "Web Memantau Intensity Carbon di UK yang menggunakan Intensity Carbon Uk API.",
      tags: [
        {
          name: "PHP",
          color:
            "bg-purple-500/10 text-purple-500 border border-purple-500/20",
        },
        {
          name: "Laravel",
          color: "bg-red-500/10 text-red-500 border border-red-500/20",
        },
        {
          name: "Bootstrap",
          color:
            "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20",
        },
        {
          name: "MySQL",
          color: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
        },
      ],
    },

    {
      title: "Platzi Fake Store",
      image: project2,
      description:
        "Web e-commerce yang menggunakan Platzi Fake Store API dengan React dan Tailwind CSS.",
      tags: [
        {
          name: "JavaScript",
          color:
            "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
        },
        {
          name: "React",
          color: "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20",
        },
        {
          name: "Tailwind",
          color: "bg-green-500/10 text-green-500 border border-green-500/20",
        },
        {
          name: "REST API",
          color:
            "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
        },
      ],
    },

    {
      title: "Website Non-Governmental Organization",
      image: project3,
      description:
        "Web Non-Governmental Organization, berfungsi sebagai pusat informasi, wadah transparansi, dan sarana advokasi publik.",
      tags: [
        {
          name: "Laravel",
          color:
            "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
        },
        {
          name: "PHP",
          color: "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20",
        },
        {
          name: "Tailwind",
          color: "bg-green-500/10 text-green-500 border border-green-500/20",
        },
        {
          name: "MySQL",
          color:
            "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#F8FAFC] px-6 md:px-16 py-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          My Projects
        </h2>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-12 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black/40"></div>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
            }}
            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[210px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed text-[15px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold ${tag.color}`}
                  >
                    {tag.name}
                  </motion.span>
                ))}
              </div>

              {/* BUTTONS
              <div className="flex items-center gap-5 mt-7"> */}
                {/* LIVE */}
                {/* <motion.a
                  whileHover={{
                    x: 4,
                  }}
                  href="#"
                  className="flex items-center gap-2 text-emerald-500 font-semibold text-sm"
                >
                  View Project
                  <FaExternalLinkAlt className="text-xs" />
                </motion.a> */}

                {/* GITHUB */}
                {/* <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  href="#"
                  className="flex items-center gap-2 text-gray-500 hover:text-black transition"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}