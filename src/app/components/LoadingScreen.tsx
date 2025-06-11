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
  const [showQuote, setShowQuote] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    "Initializing magic...",
    "Loading Apple-inspired greatness...",
    "Polishing pixels to perfection...",
    "Adding that premium feel...",
    "Almost there... worth the wait!"
  ];

  const sarcasticQuotes = [
    "Well, I love Apple... and their loading screens 🍎",
    "Making it look effortless... while you wait ⏳",
    "Perfection takes time... just like Apple taught us 💫",
    "Loading with the elegance of a $3000 laptop 💻",
    "Because good things come to those who wait... like iOS updates 📱"
  ];

  const [currentQuote] = useState(sarcasticQuotes[Math.floor(Math.random() * sarcasticQuotes.length)]);

  useEffect(() => {
    // Show logo after initial delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 800);

    // Show quote after logo
    const quoteTimer = setTimeout(() => {
      setShowQuote(true);
    }, 2000);

    // Simulate slower, more realistic loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        // Much slower progress increments for a more realistic feel
        const increment = Math.random() * 3 + 1; // 1-4% increments instead of 5-20%
        const newProgress = prev + increment;
        
        // Update phase based on progress with more phases
        if (newProgress > 15 && currentPhase === 0) setCurrentPhase(1);
        if (newProgress > 35 && currentPhase === 1) setCurrentPhase(2);
        if (newProgress > 60 && currentPhase === 2) setCurrentPhase(3);
        if (newProgress > 85 && currentPhase === 3) setCurrentPhase(4);
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          // Longer delay before completion
          setTimeout(() => {
            onComplete();
          }, 1500);
          return 100;
        }
        
        return newProgress;
      });
    }, 400); // Slower interval - 400ms instead of 200ms

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(quoteTimer);
      clearInterval(progressInterval);
    };
  }, [currentPhase, onComplete, currentQuote]);

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
            duration: 12, // Slower background animation
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -120, -20],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3, // Slower particles
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto px-8">
          {/* Apple-style logo/icon */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 150, // Slower spring
                  damping: 25,
                  duration: 1.2 
                }}
                className="mb-8"
              >
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 6, // Slower rotation
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Main logo circle */}
                  <motion.div
                    className="w-28 h-28 rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      boxShadow: "0 25px 50px rgba(102, 126, 234, 0.4)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 25px 50px rgba(102, 126, 234, 0.4)",
                        "0 30px 60px rgba(118, 75, 162, 0.5)",
                        "0 25px 50px rgba(102, 126, 234, 0.4)"
                      ]
                    }}
                    transition={{
                      duration: 3, // Slower glow animation
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Inner animated element */}
                    <motion.div
                      className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 3, // Slower pulse
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        className="w-7 h-7 rounded-full"
                        style={{
                          background: "linear-gradient(45deg, #667eea, #764ba2)"
                        }}
                        animate={{
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4, // Slower inner rotation
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>

                    {/* Orbiting elements */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2.5 h-2.5 bg-white/70 rounded-full"
                        style={{
                          left: "50%",
                          top: "50%",
                        }}
                        animate={{
                          rotate: [0, 360],
                          x: [0, Math.cos(i * 90 * Math.PI / 180) * 40],
                          y: [0, Math.sin(i * 90 * Math.PI / 180) * 40],
                        }}
                        transition={{
                          duration: 5 + i * 0.7, // Slower orbiting
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Outer glow rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border border-blue-400/20"
                      style={{
                        width: `${130 + i * 25}%`,
                        height: `${130 + i * 25}%`,
                        left: `${-15 - i * 12.5}%`,
                        top: `${-15 - i * 12.5}%`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 3 + i * 0.7, // Slower ring animation
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-6 text-center"
              >
                <motion.h1
                  className="text-4xl md:text-5xl font-light tracking-wide mb-3"
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
                    duration: 4, // Slower text gradient animation
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Mohammed Faheem
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-gray-600 dark:text-gray-400 text-lg font-light"
                >
                  Creative Developer
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sarcastic Quote */}
          <AnimatePresence>
            {showQuote && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="mb-8 text-center"
              >
                <motion.div
                  className="relative px-6 py-4 rounded-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 8px 32px rgba(0,0,0,0.1)",
                      "0 12px 40px rgba(102, 126, 234, 0.15)",
                      "0 8px 32px rgba(0,0,0,0.1)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Floating sparkles around quote */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${25 + (i % 2) * 50}%`,
                        }}
                        animate={{
                          y: [-5, -15, -5],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2.5 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium italic relative z-10"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    "{currentQuote}"
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading progress */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="w-full max-w-sm"
              >
                {/* Progress bar container */}
                <div className="relative mb-4">
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full relative overflow-hidden"
                      style={{
                        background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                        boxShadow: "0 0 15px rgba(102, 126, 234, 0.6)"
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Progress glow effect */}
                  <motion.div
                    className="absolute top-0 h-1.5 w-12 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), transparent)",
                      filter: "blur(3px)"
                    }}
                    animate={{
                      left: `${Math.max(0, loadingProgress - 12)}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Loading text and percentage */}
                <div className="flex justify-between items-center text-sm">
                  <motion.span
                    key={currentPhase}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 dark:text-gray-400 font-light"
                  >
                    {phases[currentPhase]}
                  </motion.span>
                  <motion.span
                    className="text-gray-800 dark:text-gray-200 font-medium tabular-nums"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
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
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="mt-6 text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: 2,
                    ease: "easeInOut"
                  }}
                  className="text-green-500 text-3xl mb-3"
                >
                  ✨
                </motion.div>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 font-light text-lg"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Ready to experience excellence
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Apple-style indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showLogo ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex space-x-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2, // Slower indicator animation
                  repeat: Infinity,
                  delay: i * 0.3,
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