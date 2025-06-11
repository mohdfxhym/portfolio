"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const greetings = [
  "Hello",
  "Hola", 
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Привет",
  "مرحبا",
  "नमस्ते",
  "你好",
  "Olá",
  "ഹലോ", // Malayalam
  "வணக்கம்", // Tamil
  "నమస్కారం" // Telugu
];

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="w-full min-h-screen flex flex-col justify-center items-start text-left relative overflow-hidden px-4 md:px-8 lg:px-16 max-w-7xl mx-auto pt-24 md:pt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="z-10 flex flex-col items-start w-full">
        {/* Animated Hello in multiple languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 md:mb-8 h-12 flex items-center"
        >
          <motion.h2
            key={currentGreeting}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.1 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="text-xl md:text-2xl font-medium text-black dark:text-white"
          >
            {greetings[currentGreeting]}
          </motion.h2>
        </motion.div>

        {/* Main heading - Your Name with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
            <motion.span
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              Mohammed
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              Faheem
            </motion.span>
          </h1>
        </motion.div>

        {/* Role/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Designer & Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Crafting elegant digital experiences with code, design, and a touch of magic. I transform complex challenges into beautiful, functional solutions that drive results.
          </p>
        </motion.div>

        {/* CTA Buttons with Liquid Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* View My Work Button - Liquid Glass */}
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-block px-8 py-4 font-semibold text-lg rounded-3xl overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
          >
            {/* Liquid effect background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3))",
                borderRadius: "24px",
              }}
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3))",
                  "linear-gradient(225deg, rgba(167,139,250,0.3), rgba(244,114,182,0.3))",
                  "linear-gradient(315deg, rgba(244,114,182,0.3), rgba(96,165,250,0.3))",
                  "linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3))"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <span className="relative z-10 text-black dark:text-white">View My Work</span>
          </motion.a>

          {/* Get In Touch Button - Same Liquid Glass Effect */}
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-block px-8 py-4 font-semibold text-lg rounded-3xl overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
          >
            {/* Liquid effect background - Same as View My Work */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3))",
                borderRadius: "24px",
              }}
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3))",
                  "linear-gradient(225deg, rgba(167,139,250,0.3), rgba(244,114,182,0.3))",
                  "linear-gradient(315deg, rgba(244,114,182,0.3), rgba(96,165,250,0.3))",
                  "linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3))"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating particles - Same as View My Work */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <span className="relative z-10 text-black dark:text-white">Get In Touch</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          variants={ballVariants}
          animate="animate"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full blur-3xl absolute top-20 right-10 md:top-32 md:right-32 opacity-30"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-400 dark:to-purple-400" />
        </motion.div>
        <motion.div
          variants={ballVariants}
          animate="animate"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full blur-2xl absolute bottom-32 left-10 md:bottom-48 md:left-32 opacity-20"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 dark:from-pink-400 dark:to-blue-400" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-black dark:bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}