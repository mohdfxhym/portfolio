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
          className="flex items-center justify-center p-1 focus:outline-none"
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
              scale: [1, 1.3, 1.1, 1.2, 1],
              rotate: [0, 180, 360],
            } : { 
              scale: 1,
              rotate: 0,
            }}
            transition={{ 
              duration: siriActive ? 1.5 : 0.3,
              ease: "easeInOut"
            }}
            className="relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: siriActive 
                ? 'conic-gradient(from 0deg, #60A5FA, #A78BFA, #F472B6, #34D399, #FBBF24, #60A5FA)' 
                : 'linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3), rgba(244,114,182,0.2))',
              boxShadow: siriActive 
                ? '0 0 30px 15px rgba(96,165,250,0.3), 0 0 60px 30px rgba(167,139,250,0.2)' 
                : '0 0 20px 8px rgba(96,165,250,0.2)'
            }}
          >
            {/* Animated particles */}
            {isMounted && siriActive && Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: `hsl(${i * 45}, 70%, 60%)`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos(i * 45 * Math.PI / 180) * 25],
                  y: [0, Math.sin(i * 45 * Math.PI / 180) * 25],
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Central pulsing core */}
            <motion.div
              className="absolute w-6 h-6 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 70%)',
              }}
              animate={siriActive ? {
                scale: [1, 1.8, 1.2, 1.5, 1],
                opacity: [0.8, 1, 0.9, 1, 0.8],
              } : {
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: siriActive ? 1.5 : 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut"
              }}
            />
            
            {/* Outer ripple rings */}
            {Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/40"
                style={{
                  width: `${(i + 2) * 12}px`,
                  height: `${(i + 2) * 12}px`,
                }}
                animate={siriActive ? {
                  scale: [1, 1.5, 1.2],
                  opacity: [0.6, 0.2, 0.4],
                } : {
                  scale: 1,
                  opacity: 0.3,
                }}
                transition={{
                  duration: 1.5,
                  repeat: siriActive ? Infinity : 0,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Rotating gradient overlay */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent)',
              }}
              animate={{
                rotate: siriActive ? [0, 360] : [0, 180, 360],
              }}
              transition={{
                duration: siriActive ? 2 : 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
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

      {/* Enhanced Mobile menu with rectangular design */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              y: -20,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.3,
              y: -20,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4
            }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-80 bg-black/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 md:hidden border border-white/20 flex items-center justify-center py-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(96,165,250,0.2)',
            }}
          >
            <ul className="flex flex-col items-center justify-center gap-3 p-4 w-full">
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
                  className="w-full"
                >
                  <motion.a
                    href={link.href}
                    className="block w-full text-center text-white font-medium transition-all px-6 py-3 text-lg rounded-full relative overflow-hidden"
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