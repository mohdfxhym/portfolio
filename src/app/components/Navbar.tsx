"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
  const [isMounted, setIsMounted] = useState(false);
  const siriAudioRef = useRef<HTMLAudioElement>(null);
  const [siriActive, setSiriActive] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-3xl bg-black/20 dark:bg-white/10 backdrop-blur-xl rounded-full shadow-glass flex items-center justify-between px-4 md:px-6 py-2 border border-black/40 dark:border-white/20"
    >
      {/* Enhanced Siri-style orb for mobile menu */}
      <div className="md:hidden flex items-center">
        <button
          className="flex items-center justify-center p-2 focus:outline-none"
          onClick={async () => {
            if (!menuOpen) {
              setSiriActive(true);
              siriAudioRef.current?.play();
              setTimeout(() => {
                setMenuOpen(true);
                setSiriActive(false);
              }, 1500);
            } else {
              setMenuOpen(false);
            }
          }}
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={siriActive ? { 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            } : { 
              scale: 1,
              rotate: 0,
            }}
            transition={{ 
              duration: siriActive ? 1.5 : 0.3,
              ease: "easeInOut"
            }}
            className="relative w-12 h-12 rounded-full flex items-center justify-center"
          >
            {/* Subtle circle border */}
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: siriActive 
                  ? 'rgba(96,165,250,0.8)' 
                  : 'rgba(96,165,250,0.3)',
              }}
              animate={siriActive ? {
                borderColor: [
                  'rgba(96,165,250,0.8)',
                  'rgba(167,139,250,0.8)',
                  'rgba(244,114,182,0.8)',
                  'rgba(52,211,153,0.8)',
                  'rgba(96,165,250,0.8)'
                ],
                scale: [1, 1.1, 1],
              } : {
                borderColor: 'rgba(96,165,250,0.3)',
                scale: 1,
              }}
              transition={{
                duration: siriActive ? 1.5 : 0.3,
                repeat: siriActive ? Infinity : 0,
                ease: "easeInOut"
              }}
            />

            {/* Animated particles */}
            {isMounted && siriActive && Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: `hsl(${i * 60}, 70%, 60%)`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 20],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 20],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Central Siri waves */}
            <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M8 22 Q14 10, 22 22 T36 22"
                stroke="url(#siriGradient1)"
                strokeWidth="3"
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
                strokeWidth="2"
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

            {/* Outer ripple rings - only when active */}
            {siriActive && Array.from({ length: 2 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-blue-400/30"
                style={{
                  width: `${(i + 3) * 16}px`,
                  height: `${(i + 3) * 16}px`,
                }}
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
          <audio ref={siriAudioRef} src="/siri-activate.mp3" preload="auto" />
        </button>
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex gap-2 sm:gap-4 md:gap-8 mx-auto">
        {navLinks.map(link => (
          <li key={link.name}>
            <motion.a
              href={link.href}
              className="text-appleBlack/80 dark:text-white/80 hover:text-appleBlue dark:hover:text-appleBlue font-medium transition-colors px-2 py-1"
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

      {/* Enhanced Mobile menu with original rectangular design */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              y: -20,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              y: -20,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4
            }}
            className="absolute top-14 left-1/2 -translate-x-1/2 w-[90vw] bg-black/90 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-glass flex flex-col items-center gap-4 py-6 z-50 md:hidden border border-black/40 dark:border-white/20"
          >
            <ul className="flex flex-col items-center justify-center gap-2 w-full">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="w-full px-4"
                >
                  <motion.a
                    href={link.href}
                    className="block w-full text-center text-white dark:text-white font-medium transition-all px-6 py-3 text-lg rounded-full relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(96,165,250,0.2)',
                      boxShadow: '0 0 20px rgba(96,165,250,0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark mode toggle - only visible on desktop */}
      <div className="hidden md:block">
        <DarkModeToggle />
      </div>
      
      {/* Spacer for mobile to balance the layout */}
      <div className="md:hidden w-14"></div>
    </motion.nav>
  );
}