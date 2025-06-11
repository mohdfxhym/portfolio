"use client";
import { useState, useEffect } from "react";

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
    <button
      onClick={toggleTheme}
      className="ml-2 p-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/20 shadow-glass text-appleBlack dark:text-white hover:bg-white/50 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle dark mode"
    >
      <span className="text-lg">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}