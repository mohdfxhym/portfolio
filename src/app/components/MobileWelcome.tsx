"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface MobileWelcomeProps {
  onComplete: () => void;
}

export default function MobileWelcome({ onComplete }: MobileWelcomeProps) {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  
  const welcomeText = "Welcome to my portfolio";
  const typingSpeed = 100; // milliseconds per character
  const pauseAfterComplete = 1000; // pause after typing is complete

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (currentText.length < welcomeText.length) {
      timeoutId = setTimeout(() => {
        setCurrentText(welcomeText.slice(0, currentText.length + 1));
      }, typingSpeed);
    } else if (!isComplete) {
      // Typing is complete, wait a moment then trigger completion
      timeoutId = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 500); // Small delay before showing navbar
      }, pauseAfterComplete);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isComplete, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black md:hidden"
      >
        {/* Siri-style animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400/30 to-blue-400/30 blur-xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-xl"
          />
        </div>

        {/* Main content container */}
        <div className="relative z-10 text-center px-8">
          {/* Siri-style voice visualization */}
          <motion.div
            className="flex justify-center items-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Central orb */}
              <motion.div
                animate={{
                  scale: currentText.length > 0 ? [1, 1.1, 1] : 1,
                  boxShadow: currentText.length > 0 
                    ? [
                        "0 0 20px rgba(96,165,250,0.3)",
                        "0 0 40px rgba(96,165,250,0.6)",
                        "0 0 20px rgba(96,165,250,0.3)"
                      ]
                    : "0 0 20px rgba(96,165,250,0.3)"
                }}
                transition={{
                  duration: 0.8,
                  repeat: currentText.length > 0 ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: currentText.length > 0 ? [0.8, 1, 0.8] : 0.8,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: currentText.length > 0 ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                </motion.div>
              </motion.div>

              {/* Surrounding animated rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/20"
                  style={{
                    width: `${100 + (i + 1) * 20}%`,
                    height: `${100 + (i + 1) * 20}%`,
                    left: `${-((i + 1) * 10)}%`,
                    top: `${-((i + 1) * 10)}%`,
                  }}
                  animate={{
                    scale: currentText.length > 0 ? [1, 1.1, 1] : 1,
                    opacity: currentText.length > 0 ? [0.3, 0.6, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 1 + i * 0.2,
                    repeat: currentText.length > 0 ? Infinity : 0,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Typing text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              <span>{currentText}</span>
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
              />
            </div>
            
            {/* Subtitle that appears after typing */}
            <AnimatePresence>
              {currentText.length === welcomeText.length && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Mohammed Faheem
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full bg-blue-500"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}