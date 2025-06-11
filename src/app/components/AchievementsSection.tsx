"use client";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="w-full max-w-4xl px-4 py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
        <span className="bg-gradient-to-r from-black via-gray-800 to-white dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">Achievements</span>
      </h2>
      <motion.ol
        className="space-y-8 list-decimal list-inside text-left mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.li
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
        >
          <span className="font-semibold">Top 50 Globally – Samsung Solve for Tomorrow</span>
          <p className="ml-4 text-gray-700 dark:text-gray-300">
            Ranked among the top 50 teams globally in Samsung's <span className="font-semibold">Solve for Tomorrow</span>, a STEM innovation contest.
          </p>
        </motion.li>
        <motion.li
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
        >
          <span className="font-semibold">Mentorship – IIT Delhi & FITT</span>
          <p className="ml-4 text-gray-700 dark:text-gray-300">
            Mentored by experts and FITT at <span className="font-semibold">IIT Delhi</span> through a certified bootcamp on <span className="font-semibold">STEM, innovation, and design thinking</span>.
          </p>
        </motion.li>
        <motion.li
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
        >
          <span className="font-semibold">Media Recognition</span>
          <p className="ml-4 text-gray-700 dark:text-gray-300">
            Project featured in national media including <span className="font-semibold">The Times of India</span> and <span className="font-semibold">CNN</span> for its innovation and impact.
          </p>
        </motion.li>
      </motion.ol>

      {/* MacBook Video Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl"
      >
        {/* MacBook Frame */}
        <div className="relative">
          {/* MacBook Screen */}
          <div className="relative bg-black rounded-t-2xl p-2 shadow-2xl">
            {/* Screen Bezel */}
            <div className="bg-gray-900 rounded-t-xl p-4 relative overflow-hidden">
              {/* Camera */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
              
              {/* Video Container */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <video
                  src="/images/solve-for-tomorrow-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.95) contrast(1.1)' }}
                />
                
                {/* Screen Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* MacBook Base */}
          <div className="relative">
            {/* Keyboard Area */}
            <div className="bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-b-2xl px-4 py-3 shadow-lg">
              {/* Trackpad */}
              <div className="mx-auto w-24 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-inner mt-2"></div>
            </div>
            
            {/* MacBook Hinge */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-600"></div>
          </div>
          
          {/* Ambient Lighting */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10"></div>
        </div>
      </motion.div>

      {/* Featured Article Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="mt-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Featured</h3>
        <a
          href="https://www.news18.com/news/studio18/samsung-solve-for-tomorrow-competitions-top-50-shortlisted-entries-highlight-innovative-solutions-in-healthcare-5825209.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-appleBlue underline hover:text-appleBlack dark:hover:text-white transition-colors"
        >
          News18: Samsung Solve for Tomorrow Competition's Top 50 Shortlisted Entries Highlight Innovative Solutions in Healthcare
        </a>
      </motion.div>
    </motion.section>
  );
}