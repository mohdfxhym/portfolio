"use client";
import { motion } from "framer-motion";
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

// Siri-inspired particle component
const SiriParticle = ({ index, isActive }: { index: number; isActive: boolean }) => {
  const [animationValues, setAnimationValues] = useState({
    x: 0,
    y: 0,
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.5})`
  });

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setAnimationValues({
          x: Math.random() * 40 - 20,
          y: Math.random() * 40 - 20,
          color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.5})`
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        boxShadow: `0 0 20px 15px ${animationValues.color}`,
        left: '50%',
        top: '50%',
      }}
      animate={isActive ? {
        x: animationValues.x,
        y: animationValues.y,
        scale: [0.5, 1.2, 0.8, 1],
      } : {
        x: 0,
        y: 0,
        scale: 0.5,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    />
  );
};

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
              }, 1200); // Duration of the animation
            } else {
              setMenuOpen(false);
            }
          }}
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={siriActive ? { 
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 0 0 rgba(56,189,248,0.5)',
                '0 0 20px 10px rgba(168,85,247,0.3)',
                '0 0 0 0 rgba(56,189,248,0.0)'
              ] 
            } : { 
              scale: 1, 
              boxShadow: '0 0 0 0 rgba(56,189,248,0.0)' 
            }}
            transition={{ duration: 1.2 }}
            className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: siriActive 
                ? 'linear-gradient(45deg, rgba(56,189,248,0.3), rgba(168,85,247,0.3), rgba(244,114,182,0.3))' 
                : 'linear-gradient(45deg, rgba(56,189,248,0.2), rgba(168,85,247,0.2))'
            }}
          >
            {/* Siri particles */}
            {Array.from({ length: 12 }, (_, i) => (
              <SiriParticle key={i} index={i} isActive={siriActive} />
            ))}
            
            {/* Central glow */}
            <motion.div
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
              }}
              animate={siriActive ? {
                scale: [1, 2, 1],
                opacity: [0.8, 1, 0.8],
              } : {
                scale: 1,
                opacity: 0.6,
              }}
              transition={{
                duration: 0.8,
                repeat: siriActive ? Infinity : 0,
                repeatType: 'reverse',
              }}
            />
            
            {/* Outer ring */}
            <motion.div
              className="absolute w-10 h-10 rounded-full border border-white/30"
              animate={siriActive ? {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              } : {
                scale: 1,
                opacity: 0.3,
              }}
              transition={{
                duration: 1,
                repeat: siriActive ? Infinity : 0,
                repeatType: 'reverse',
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

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm bg-black/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl shadow-glass z-50 md:hidden border border-black/40 dark:border-white/20"
        >
          <ul className="flex flex-col items-center gap-1 py-4">
            {navLinks.map(link => (
              <li key={link.name} className="w-full">
                <motion.a
                  href={link.href}
                  className="block w-full text-center text-white font-medium transition-colors px-6 py-3 text-lg hover:bg-white/10 rounded-lg mx-2"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Dark mode toggle - only visible on desktop */}
      <div className="hidden md:block">
        <DarkModeToggle />
      </div>
      
      {/* Spacer for mobile to balance the layout */}
      <div className="md:hidden w-12"></div>
    </motion.nav>
  );
}