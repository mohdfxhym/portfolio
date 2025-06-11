"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="w-full max-w-3xl px-4 py-16 mx-auto flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.img
        src="/images/memoji.png"
        alt="Mohammed Faheem Memoji"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-40 h-auto mb-4 md:mb-0"
        whileHover={{ rotateY: 18 }}
        whileTap={{ rotateY: -10 }}
        style={{ perspective: 600 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
          <span className="bg-gradient-to-r from-black via-gray-800 to-white dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">About Me</span>
        </h2>
        <p className="text-lg text-appleBlack/80 mb-2">
          Hi! I'm Mohammed Faheem, a passionate developer and designer who loves building beautiful, functional digital experiences. My work blends code, creativity, and a relentless pursuit of quality.
        </p>
        <p className="text-md text-gray-600">
          I thrive on challenges, enjoy learning new tools, and believe in the power of design to inspire and connect.
        </p>
      </motion.div>
    </motion.section>
  );
} 