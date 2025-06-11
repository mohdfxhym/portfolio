"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Tools", href: "#tools" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const siriAudioRef = useRef<HTMLAudioElement>(null);
  const [siriActive, setSiriActive] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-3xl bg-black/20 dark:bg-white/10 backdrop-blur-xl rounded-full shadow-glass flex items-center justify-between px-4 md:px-6 py-2 border border-black/40 dark:border-white/20"
    >
      {/* Siri-style orb for mobile menu */}
      <button
        className="md:hidden flex items-center justify-center p-2 focus:outline-none"
        onClick={async () => {
          if (!menuOpen) {
            setSiriActive(true);
            siriAudioRef.current?.play();
            setTimeout(() => {
              setMenuOpen(true);
              setSiriActive(false);
            }, 600); // Duration of the pulse and sound
          } else {
            setMenuOpen(false);
          }
        }}
        aria-label="Toggle navigation menu"
      >
        <motion.div
          animate={siriActive ? { scale: [1, 1.15, 1], boxShadow: [
            '0 0 0 0 rgba(56,189,248,0.5)',
            '0 0 16px 8px rgba(168,85,247,0.2)',
            '0 0 0 0 rgba(56,189,248,0.0)'] } : { scale: 1, boxShadow: '0 0 0 0 rgba(56,189,248,0.0)' }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-transparent"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M8 22 Q14 10, 22 22 T36 22"
              stroke="url(#siriGradient1)"
              strokeWidth="3.5"
              fill="none"
              initial={false}
              animate={siriActive ? { d: [
                'M8 22 Q14 10, 22 22 T36 22',
                'M8 22 Q14 34, 22 22 T36 22',
                'M8 22 Q14 10, 22 22 T36 22',
              ] } : { d: 'M8 22 Q14 10, 22 22 T36 22' }}
              transition={{ duration: 0.6, repeat: siriActive ? Infinity : 0, repeatType: 'reverse' }}
            />
            <motion.path
              d="M12 22 Q18 16, 22 22 T32 22"
              stroke="url(#siriGradient2)"
              strokeWidth="2.5"
              fill="none"
              initial={false}
              animate={siriActive ? { d: [
                'M12 22 Q18 16, 22 22 T32 22',
                'M12 22 Q18 28, 22 22 T32 22',
                'M12 22 Q18 16, 22 22 T32 22',
              ] } : { d: 'M12 22 Q18 16, 22 22 T32 22' }}
              transition={{ duration: 0.7, repeat: siriActive ? Infinity : 0, repeatType: 'reverse' }}
            />
            <motion.path
              d="M16 22 Q19 19, 22 22 T28 22"
              stroke="url(#siriGradient3)"
              strokeWidth="1.5"
              fill="none"
              initial={false}
              animate={siriActive ? { d: [
                'M16 22 Q19 19, 22 22 T28 22',
                'M16 22 Q19 25, 22 22 T28 22',
                'M16 22 Q19 19, 22 22 T28 22',
              ] } : { d: 'M16 22 Q19 19, 22 22 T28 22' }}
              transition={{ duration: 0.8, repeat: siriActive ? Infinity : 0, repeatType: 'reverse' }}
            />
            <defs>
              <linearGradient id="siriGradient1" x1="8" y1="10" x2="36" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="0.5" stopColor="#A78BFA" />
                <stop offset="1" stopColor="#F472B6" />
              </linearGradient>
              <linearGradient id="siriGradient2" x1="12" y1="16" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34D399" />
                <stop offset="1" stopColor="#818CF8" />
              </linearGradient>
              <linearGradient id="siriGradient3" x1="16" y1="19" x2="28" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6" />
                <stop offset="1" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute w-12 h-12 rounded-full blur-2xl bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30" />
        </motion.div>
        <audio ref={siriAudioRef} src="/siri-activate.mp3" preload="auto" />
      </button>
      {/* Nav links */}
      <ul className="hidden md:flex gap-2 sm:gap-4 md:gap-8 mx-auto">
        {navLinks.map(link => (
          <li key={link.name}>
            <motion.a
              href={link.href}
              className="text-appleBlack/80 hover:text-appleBlue font-medium transition-colors px-2 py-1"
              whileHover={{ scale: 1.15, y: -10 }}
              whileTap={{ scale: 0.92, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          </li>
        ))}
      </ul>
      {/* Mobile menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-14 left-1/2 -translate-x-1/2 w-[90vw] bg-black/90 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-glass flex flex-col items-center gap-4 py-6 z-50 md:hidden border border-black/40 dark:border-white/20"
        >
          {navLinks.map(link => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                className="text-white dark:text-white font-medium transition-colors px-4 py-2 text-lg"
                whileHover={{ scale: 1.15, y: -6 }}
                whileTap={{ scale: 0.92, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </motion.ul>
      )}
      <DarkModeToggle />
    </motion.nav>
  );
} 