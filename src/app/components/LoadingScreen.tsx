"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showAppleLogo, setShowAppleLogo] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    "Starting up...",
    "Loading system components...",
    "Initializing portfolio...",
    "Ready to innovate!"
  ];

  useEffect(() => {
    // Show Apple logo immediately
    setShowAppleLogo(true);

    // Show button after loading completes
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const increment = Math.random() * 6 + 3; // 3-9% increments
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
    }, 200);

    return () => {
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
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-black"
      >
        {/* Subtle animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/3 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, -120, -30],
                opacity: [0, 0.4, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Apple Logo with Bootup Animation */}
        <AnimatePresence>
          {showAppleLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.25, 0.46, 0.45, 0.94] // Apple's signature easing
              }}
              className="mb-16"
            >
              {/* Apple Logo with Glow Effect */}
              <motion.div
                className="relative flex items-center justify-center"
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
                    "drop-shadow(0 0 40px rgba(255,255,255,0.6))",
                    "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Apple Logo SVG */}
                <motion.svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="drop-shadow-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </motion.svg>

                {/* Pulsing Ring Around Logo */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/20"
                  style={{
                    width: "120px",
                    height: "120px",
                    left: "-20px",
                    top: "-20px",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bootup Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center max-w-md w-full px-8"
        >
          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                boxShadow: "0 0 10px rgba(255,255,255,0.5)"
              }}
            />
          </div>
          
          {/* Loading Text */}
          <motion.p
            key={currentPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-sm mb-2"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            }}
          >
            {phases[currentPhase]}
          </motion.p>

          {/* Progress Percentage */}
          <motion.p
            className="text-white/50 text-xs"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            }}
          >
            {Math.round(loadingProgress)}%
          </motion.p>
        </motion.div>

        {/* Access Button */}
        <AnimatePresence>
          {showButton && loadingProgress >= 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="mt-12"
            >
              <motion.button
                onClick={handleAccessPortfolio}
                className="group relative px-8 py-4 rounded-2xl font-medium text-white overflow-hidden transition-all duration-300 border border-white/20"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.1) 0%, 
                      rgba(255, 255, 255, 0.05) 100%
                    )
                  `,
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    0 8px 25px rgba(255, 255, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `,
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 12px 35px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
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
                  Enter Portfolio
                  <motion.span
                    className="ml-2"
                    animate={{
                      x: [0, 4, 0],
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sarcastic Design Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-8 text-center"
        >
          <p
            className="text-white/30 text-xs italic"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            }}
          >
            "I love the white" - Every designer copying Apple 🍎
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