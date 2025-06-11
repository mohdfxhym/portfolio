"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    "Preparing your experience...",
    "Loading portfolio data...",
    "Almost ready...",
    "Welcome back!"
  ];

  useEffect(() => {
    // Show profile after initial delay
    const profileTimer = setTimeout(() => {
      setShowProfile(true);
    }, 1000);

    // Show button after profile loads
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 2500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const increment = Math.random() * 8 + 2; // 2-10% increments
        const newProgress = prev + increment;
        
        // Update phase based on progress
        if (newProgress > 25 && currentPhase === 0) setCurrentPhase(1);
        if (newProgress > 60 && currentPhase === 1) setCurrentPhase(2);
        if (newProgress > 90 && currentPhase === 2) setCurrentPhase(3);
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        
        return newProgress;
      });
    }, 300);

    return () => {
      clearTimeout(profileTimer);
      clearTimeout(buttonTimer);
      clearInterval(progressInterval);
    };
  }, [currentPhase]);

  const handleAccessPortfolio = () => {
    setIsComplete(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(30, 30, 35, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(25, 25, 30, 0.6) 0%, transparent 50%),
            linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 50%, #1c1c1e 100%)
          `
        }}
      >
        {/* Subtle animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 0.3, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Apple Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white text-4xl"
          >
            
          </motion.div>
        </motion.div>

        {/* Main Sign-In Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative max-w-sm w-full mx-auto px-8"
        >
          {/* Glass Card Container */}
          <div
            className="relative rounded-3xl p-8 text-center overflow-visible border border-white/10"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0.05) 50%,
                  rgba(255, 255, 255, 0.02) 100%
                )
              `,
              backdropFilter: "blur(20px)",
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05)
              `
            }}
          >
            {/* Subtle inner glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-30"
              style={{
                background: `
                  radial-gradient(circle at 50% 0%, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    transparent 50%
                  )
                `
              }}
            />

            {/* Profile Section */}
            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94] // Apple's signature easing
                  }}
                  className="relative z-10"
                >
                  {/* Memoji Profile Picture - Positioned to extend outside */}
                  <motion.div
                    className="relative mx-auto mb-6 -mt-12"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 30px rgba(255, 255, 255, 0.1)",
                          "0 0 50px rgba(255, 255, 255, 0.2)",
                          "0 0 30px rgba(255, 255, 255, 0.1)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative w-32 h-32 mx-auto"
                    >
                      <img
                        src="/images/memoji.png"
                        alt="Mohammed Faheem Memoji"
                        className="w-full h-full object-contain scale-110 -translate-y-2"
                      />
                      
                      {/* Online indicator - Properly positioned */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                        className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-gray-800 flex items-center justify-center"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-3 h-3 bg-white rounded-full"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Name and Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-6"
                  >
                    <h2
                      className="text-2xl font-medium text-white mb-1"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      }}
                    >
                      Mohammed Faheem
                    </h2>
                    <p
                      className="text-white/60 text-sm"
                      style={{
                        fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      }}
                    >
                      Creative Developer
                    </p>
                  </motion.div>

                  {/* Loading Progress */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6"
                  >
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    
                    {/* Loading Text */}
                    <motion.p
                      key={currentPhase}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.4 }}
                      className="text-white/50 text-xs"
                      style={{
                        fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                      }}
                    >
                      {phases[currentPhase]}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Access Button */}
            <AnimatePresence>
              {showButton && loadingProgress >= 100 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  onClick={handleAccessPortfolio}
                  className="group relative w-full py-4 px-6 rounded-2xl font-medium text-white overflow-hidden transition-all duration-300"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(0, 122, 255, 0.8) 0%, 
                        rgba(0, 122, 255, 0.9) 100%
                      )
                    `,
                    boxShadow: `
                      0 8px 25px rgba(0, 122, 255, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 12px 35px rgba(0, 122, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center">
                    Access Portfolio
                    <motion.span
                      className="ml-2"
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Sarcastic Apple Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-8 text-center"
        >
          <p
            className="text-white/40 text-xs italic"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            }}
          >
            "Think Different... but make it look exactly like Apple" 🍎
          </p>
        </motion.div>

        {/* Completion overlay */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-black z-10"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}