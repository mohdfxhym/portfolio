"use client";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;
    if (savedTheme === "dark") {
      setIsDark(true);
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    setIsDark(!isDark);
    if (!isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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