"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { number: 15, label: "Projects Completed", suffix: "+" },
  { number: 3, label: "Years Experience", suffix: "+" },
  { number: 100, label: "Client Satisfaction", suffix: "%" }
];

function AnimatedCounter({ target, prefix = "", suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <motion.section
      className="w-full max-w-5xl px-4 py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-appleBlue mb-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <AnimatedCounter
                target={stat.number}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}