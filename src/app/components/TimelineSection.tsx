"use client";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2024",
    title: "Top 50 Global - Samsung Solve for Tomorrow",
    description: "Achieved global recognition for innovative healthcare solution",
    type: "achievement",
    icon: "🏆"
  },
  {
    year: "2023",
    title: "Started Freelance Development",
    description: "Began working with clients on web development projects",
    type: "career",
    icon: "💼"
  },
  {
    year: "2023",
    title: "IIT Delhi Mentorship Program",
    description: "Completed STEM innovation and design thinking bootcamp",
    type: "education",
    icon: "🎓"
  },
  {
    year: "2022",
    title: "First React Application",
    description: "Built my first full-stack application using React and Node.js",
    type: "project",
    icon: "🚀"
  },
  {
    year: "2021",
    title: "Started Programming Journey",
    description: "Began learning web development and programming fundamentals",
    type: "education",
    icon: "💻"
  }
];

export default function TimelineSection() {
  return (
    <motion.section
      id="timeline"
      className="w-full max-w-4xl px-4 py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-white">
        My Journey
      </h2>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-appleBlue via-purple-500 to-pink-500"></div>
        
        {/* Timeline Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="relative flex items-start"
            >
              {/* Timeline Dot */}
              <motion.div
                className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-900 border-4 border-appleBlue rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <span className="text-2xl">{event.icon}</span>
              </motion.div>
              
              {/* Content */}
              <motion.div
                className="ml-8 bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/40 dark:border-white/20 shadow-glass flex-1"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {event.title}
                  </h3>
                  <span className="text-sm font-medium text-appleBlue bg-appleBlue/10 px-3 py-1 rounded-full">
                    {event.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {event.description}
                </p>
                
                {/* Type Badge */}
                <div className="mt-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === 'achievement' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    event.type === 'career' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    event.type === 'education' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  }`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}