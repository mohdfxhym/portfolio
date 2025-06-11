"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AppleCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('a, button, [role="button"]')) {
        setCursorState("hover");
      } else if (target.matches('input, textarea')) {
        setCursorState("text");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Magnetic cursor with morphing blob */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Main morphing blob */}
        <motion.div
          className="relative"
          animate={{
            scale: cursorState === "hover" ? 2.5 : cursorState === "text" ? 0.3 : 1,
            rotate: cursorState === "hover" ? [0, 180, 360] : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            rotate: {
              duration: 2,
              repeat: cursorState === "hover" ? Infinity : 0,
              ease: "linear"
            }
          }}
        >
          {/* Organic blob shape */}
          <motion.div
            className="w-6 h-6 bg-white rounded-full"
            animate={{
              borderRadius: cursorState === "hover" 
                ? ["50%", "60% 40% 30% 70%", "40% 60% 70% 30%", "50%"]
                : cursorState === "text"
                ? "2px"
                : "50%",
              scaleX: cursorState === "text" ? 3 : 1,
              scaleY: cursorState === "text" ? 0.3 : 1,
            }}
            transition={{
              borderRadius: {
                duration: 3,
                repeat: cursorState === "hover" ? Infinity : 0,
                ease: "easeInOut"
              },
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            style={{
              filter: "blur(0.5px)",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
            }}
          />

          {/* Trailing particles */}
          {cursorState === "hover" && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos(i * 60 * Math.PI / 180) * 20],
                    y: [0, Math.sin(i * 60 * Math.PI / 180) * 20],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Outer ring for hover state */}
        {cursorState === "hover" && (
          <motion.div
            className="absolute inset-0 border border-white rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 3,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          />
        )}
      </motion.div>
    </>
  );
}