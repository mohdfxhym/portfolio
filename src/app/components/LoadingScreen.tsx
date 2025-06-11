"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    "Initializing...",
    "Loading assets...",
    "Preparing experience...",
    "Almost ready..."
  ];

  useEffect(() => {
    // Show logo after initial delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update phase based on progress
        if (newProgress > 25 && currentPhase === 0) setCurrentPhase(1);
        if (newProgress > 50 && currentPhase === 1) setCurrentPhase(2);
        if (newProgress > 75 && currentPhase === 2) setCurrentPhase(3);
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 200);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressInterval);
    };
  }, [currentPhase, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(96,165,250,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(167,139,250,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(244,114,182,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(96,165,250,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(96,165,250,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Apple-style logo/icon */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 20,
                  duration: 0.8 
                }}
                className="mb-12"
              >
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Main logo circle */}
                  <motion.div
                    className="w-24 h-24 rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 20px 40px rgba(102, 126, 234, 0.3)",
                        "0 25px 50px rgba(118, 75, 162, 0.4)",
                        "0 20px 40px rgba(102, 126, 234, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Inner animated element */}
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full"
                        style={{
                          background: "linear-gradient(45deg, #667eea, #764ba2)"
                        }}
                        animate={{
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>

                    {/* Orbiting elements */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
                        style={{
                          left: "50%",
                          top: "50%",
                        }}
                        animate={{
                          rotate: [0, 360],
                          x: [0, Math.cos(i * 120 * Math.PI / 180) * 35],
                          y: [0, Math.sin(i * 120 * Math.PI / 180) * 35],
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Outer glow rings */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border border-blue-400/20"
                      style={{
                        width: `${120 + i * 20}%`,
                        height: `${120 + i * 20}%`,
                        left: `${-10 - i * 10}%`,
                        top: `${-10 - i * 10}%`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Brand name */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8 text-center"
              >
                <motion.h1
                  className="text-4xl md:text-5xl font-light tracking-wide mb-2"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Mohammed Faheem
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-gray-600 dark:text-gray-400 text-lg font-light"
                >
                  Creative Developer
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading progress */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="w-80 max-w-sm"
              >
                {/* Progress bar container */}
                <div className="relative mb-4">
                  <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                        boxShadow: "0 0 10px rgba(102, 126, 234, 0.5)"
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  
                  {/* Progress glow effect */}
                  <motion.div
                    className="absolute top-0 h-1 w-8 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), transparent)",
                      filter: "blur(2px)"
                    }}
                    animate={{
                      left: `${Math.max(0, loadingProgress - 8)}%`,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Loading text and percentage */}
                <div className="flex justify-between items-center text-sm">
                  <motion.span
                    key={currentPhase}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-gray-600 dark:text-gray-400 font-light"
                  >
                    {phases[currentPhase]}
                  </motion.span>
                  <motion.span
                    className="text-gray-800 dark:text-gray-200 font-medium tabular-nums"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {Math.round(loadingProgress)}%
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Completion message */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-green-500 text-2xl mb-2"
                >
                  ✓
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  Welcome to my portfolio
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Apple-style indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showLogo ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}