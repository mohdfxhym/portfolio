"use client";
import { motion } from "framer-motion";

const ballVariants = {
  animate: {
    x: [0, 60, 0, -40, 0],
    y: [0, 40, 80, 20, 0],
    transition: {
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text select-text">
          <motion.span
            className="bg-gradient-to-r from-black via-gray-800 to-white dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text inline-block relative"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            animate={{
              textShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(59, 130, 246, 0.2)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 0px rgba(0,0,0,0)"
              ]
            }}
            style={{
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.1))"
            }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-300/30 dark:via-purple-300/30 dark:to-pink-300/30 rounded-lg blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.8, 0.6, 0.3],
                scale: [1, 1.05, 1.1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            Mohammed Faheem
          </motion.span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-2 bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
          Designer & Developer
        </h2>
        <p className="text-lg md:text-xl text-appleBlack/70 dark:text-white/70 mb-8 max-w-xl mx-auto">
          Crafting elegant digital experiences with code, design, and a touch of magic.
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 rounded-full bg-black/20 dark:bg-white/10 backdrop-blur-xl border border-black/40 dark:border-white/20 shadow-glass text-appleBlack dark:text-white font-semibold text-lg transition-all duration-200 hover:bg-black/30 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-appleBlue/60"
        >
          View My Work
        </motion.a>
      </div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          variants={ballVariants}
          animate="animate"
          whileHover={{ y: 80 }}
          className="w-48 h-48 md:w-96 md:h-96 rounded-full blur-3xl absolute -top-16 -left-8 md:-top-32 md:-left-32 cursor-pointer"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-white dark:to-blue-200 opacity-80" />
        </motion.div>
        <motion.div
          variants={ballVariants}
          animate="animate"
          whileHover={{ y: 80 }}
          className="w-48 h-48 md:w-96 md:h-96 rounded-full blur-3xl absolute -top-16 -right-8 md:-top-32 md:-right-32 cursor-pointer"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 dark:from-white dark:to-blue-200 opacity-80" />
        </motion.div>
        <div className="w-80 h-80 bg-appleBlue/20 rounded-full blur-2xl absolute bottom-0 right-0" />
      </div>
    </motion.section>
  );
}