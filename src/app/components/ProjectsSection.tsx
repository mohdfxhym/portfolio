"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Brokrex – Zerodha-Inspired Trading Platform",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    description: `A fully responsive web-based trading platform that replicates the Zerodha UI and trading functionality.\n\n• Built with modular React components and managed application state efficiently.\n• Focused on performance optimization, smooth UI transitions, and a clean user interface.\n• Prioritized mobile responsiveness and user-centric design principles.`,
    image: "/images/brokerex.png",
  },
  {
    title: "LodgeIn – Property Rental Web App",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    description: `A dynamic property rental application with a clean interface and functional user experience.\n\n• Integrated listing filters, property cards, and search functionality.\n• Designed with mobile-first responsiveness to ensure usability across devices.\n• Used React Router for dynamic routing and seamless navigation.`,
    image: "/images/lodgein.png",
  },
  {
    title: "Confera – Real-Time Video Conferencing App",
    tech: ["React.js", "WebRTC", "Socket.io", "Node.js", "CSS3"],
    description: `A real-time video conferencing application, similar to Zoom, built for direct peer-to-peer communication.\n\n• Integrated WebRTC for high-quality video/audio streaming.\n• Used Socket.io for real-time messaging and room-based communication.\n• Enabled features like room creation, joining, and responsive layout design.`,
    image: "/images/confera.png",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="w-full max-w-6xl px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black dark:text-white">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.15)" }}
            className="group bg-white/70 dark:bg-white/10 backdrop-blur-xs rounded-2xl shadow-glass p-6 flex flex-col items-start transition-all duration-200 border border-white/40 dark:border-white/20 hover:border-appleBlue"
          >
            <Image
              src={project.image}
              alt={project.title + ' icon'}
              width={80}
              height={80}
              className="w-20 h-20 object-contain mb-3 rounded-xl shadow"
            />
            <h3 className="text-lg font-semibold mb-2 group-hover:text-appleBlue transition-colors">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-appleGray text-appleBlack/80 rounded-full text-xs font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}