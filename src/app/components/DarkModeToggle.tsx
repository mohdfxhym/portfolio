"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="ml-2 p-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/20 shadow-glass text-appleBlack dark:text-white hover:bg-white/50 dark:hover:bg-white/20 transition-colors"
        aria-label="Toggle dark mode"
        disabled
      >
        <span className="text-lg">🌙</span>
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.95 }}
      className="group ml-2 p-2 rounded-2xl overflow-hidden relative transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)"
      }}
      aria-label="Toggle dark mode"
    >
      {/* Liquid glass hover effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(167,139,250,0.2))",
          borderRadius: "12px",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(167,139,250,0.2))",
            "linear-gradient(225deg, rgba(167,139,250,0.2), rgba(244,114,182,0.2))",
            "linear-gradient(315deg, rgba(244,114,182,0.2), rgba(96,165,250,0.2))",
            "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(167,139,250,0.2))"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating micro-particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
            style={{
              left: `${25 + i * 25}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-2, -6, -2],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 1.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <motion.span 
        className="relative z-10 text-lg text-appleBlack dark:text-white"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? "☀️" : "🌙"}
      </motion.span>
    </motion.button>
  );
}