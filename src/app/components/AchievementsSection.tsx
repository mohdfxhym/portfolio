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

      {/* macOS Window Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl"
      >
        {/* Window Container */}
        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Window Title Bar */}
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            {/* Traffic Light Buttons */}
            <div className="flex items-center space-x-2">
              <motion.button
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close window"
              />
              <motion.button
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Minimize window"
              />
              <motion.button
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Maximize window"
              />
            </div>
            
            {/* Window Title */}
            <div className="flex-1 text-center">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Samsung Solve for Tomorrow - Top 50 Global
              </h3>
            </div>
            
            {/* Window Controls Spacer */}
            <div className="w-16"></div>
          </div>
          
          {/* Video Player Area */}
          <div className="relative bg-black">
            {/* Video Container */}
            <div className="relative aspect-video overflow-hidden">
              <video
                src="/images/solve-for-tomorrow-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.95) contrast(1.05)' }}
              />
              
              {/* Video Overlay Controls (Optional) */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="text-white text-xs font-medium">Playing</div>
                </div>
                <div className="text-white text-xs">
                  Samsung Innovation Showcase
                </div>
              </div>
            </div>
          </div>
          
          {/* Window Bottom Bar (Optional) */}
          <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Video Player</span>
              <span>1080p • Auto-playing</span>
            </div>
          </div>
        </div>
        
        {/* Window Shadow and Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl blur-xl -z-10"></div>
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