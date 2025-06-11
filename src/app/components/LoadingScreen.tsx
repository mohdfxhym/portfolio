"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    // Show initials after brief delay
    const initialsTimer = setTimeout(() => {
      setShowInitials(true);
    }, 800);

    // Complete loading after realistic duration
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 1000); // Fade out duration
    }, 4000); // Total loading time: 4 seconds

    return () => {
      clearTimeout(initialsTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(15, 15, 15, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(25, 25, 25, 0.6) 0%, transparent 50%),
              linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)
            `
          }}
        >
          {/* Subtle animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main loading container */}
          <div className="relative flex flex-col items-center">
            {/* Apple-style spinner/pulse effect */}
            <div className="relative mb-8">
              {/* Outer pulsing rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/20"
                  style={{
                    width: `${80 + i * 30}px`,
                    height: `${80 + i * 30}px`,
                    left: `${-i * 15}px`,
                    top: `${-i * 15}px`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}

              {/* Central glowing orb */}
              <motion.div
                className="relative w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: `
                    radial-gradient(circle, 
                      rgba(255, 255, 255, 0.15) 0%, 
                      rgba(255, 255, 255, 0.05) 40%, 
                      transparent 70%
                    )
                  `,
                  boxShadow: `
                    0 0 30px rgba(255, 255, 255, 0.1),
                    inset 0 0 20px rgba(255, 255, 255, 0.05)
                  `
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)",
                    "0 0 50px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1)",
                    "0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Inner rotating element */}
                <motion.div
                  className="w-8 h-8 rounded-full"
                  style={{
                    background: `
                      conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        rgba(255, 255, 255, 0.3) 90deg,
                        rgba(255, 255, 255, 0.6) 180deg,
                        rgba(255, 255, 255, 0.3) 270deg,
                        transparent 360deg
                      )
                    `
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>

            {/* Custom MF initials with SF Pro style */}
            <AnimatePresence>
              {showInitials && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.25, 0.46, 0.45, 0.94] // Apple's signature easing
                  }}
                  className="text-center"
                >
                  {/* MF Initials */}
                  <motion.h1
                    className="text-6xl md:text-7xl font-light tracking-wider mb-4"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      color: "rgba(255, 255, 255, 0.9)",
                      textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                      letterSpacing: "0.1em"
                    }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      textShadow: [
                        "0 0 30px rgba(255, 255, 255, 0.3)",
                        "0 0 50px rgba(255, 255, 255, 0.5)",
                        "0 0 30px rgba(255, 255, 255, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    MF
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg font-light tracking-wide"
                    style={{
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      color: "rgba(255, 255, 255, 0.6)",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Mohammed Faheem
                  </motion.p>

                  {/* Loading dots */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex justify-center items-center mt-8 space-x-2"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-white/40"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle progress indicator */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ 
                opacity: showInitials ? 1 : 0,
                width: showInitials ? "200px" : 0
              }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              className="absolute bottom-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            />
          </div>

          {/* Completion fade overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isComplete ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-black"
            style={{ pointerEvents: isComplete ? "auto" : "none" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}