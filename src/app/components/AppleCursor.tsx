"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AppleCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle different cursor states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      if (target.matches('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true);
        setCursorVariant("pointer");
        
        // Special text for specific elements
        if (target.matches('a[href^="#"]')) {
          setCursorText("Navigate");
        } else if (target.matches('button, [role="button"]')) {
          setCursorText("Click");
        } else if (target.matches('input, textarea')) {
          setCursorText("Type");
        } else {
          setCursorText("Interact");
        }
      } 
      // Check for images
      else if (target.matches('img, video')) {
        setIsHovering(true);
        setCursorVariant("view");
        setCursorText("View");
      }
      // Check for text elements
      else if (target.matches('h1, h2, h3, h4, h5, h6, p, span, div')) {
        const hasText = target.textContent && target.textContent.trim().length > 0;
        if (hasText) {
          setIsHovering(true);
          setCursorVariant("text");
          setCursorText("Read");
        }
      }
      // Default state
      else {
        setIsHovering(false);
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorVariant("default");
      setCursorText("");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      width: 32,
      height: 32,
    },
    pointer: {
      scale: 1.5,
      backgroundColor: "rgba(0, 113, 227, 0.9)",
      border: "2px solid rgba(255, 255, 255, 0.8)",
      width: 32,
      height: 32,
    },
    text: {
      scale: 1.2,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      border: "2px solid rgba(0, 113, 227, 0.6)",
      width: 32,
      height: 32,
    },
    view: {
      scale: 2,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      border: "2px solid rgba(255, 255, 255, 0.6)",
      width: 32,
      height: 32,
    },
  };

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        {/* Main cursor dot */}
        <motion.div
          className="rounded-full backdrop-blur-sm"
          animate={cursorVariant}
          variants={variants}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />

        {/* Cursor text */}
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <div className="px-3 py-1 bg-black/80 dark:bg-white/80 text-white dark:text-black text-sm font-medium rounded-full backdrop-blur-md border border-white/20 dark:border-black/20">
              {cursorText}
            </div>
          </motion.div>
        )}

        {/* Trailing dots for movement effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: isHovering ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20 dark:bg-black/20"
              style={{
                width: 8 - i * 2,
                height: 8 - i * 2,
                top: `${-4 + i}px`,
                left: `${-4 + i}px`,
              }}
              animate={{
                scale: isHovering ? [1, 0.8, 1] : 0.8,
                opacity: isHovering ? [0.6, 0.3, 0.6] : 0.3,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovering ? Infinity : 0,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Cursor glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <motion.div
          className="w-16 h-16 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,113,227,0.1) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: isHovering ? [1, 1.5, 1] : 1,
            opacity: isHovering ? [0.3, 0.6, 0.3] : 0.2,
          }}
          transition={{
            duration: 2,
            repeat: isHovering ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
}