"use client";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="w-full max-w-3xl px-4 py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
        <span className="bg-gradient-to-r from-black via-gray-800 to-white dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">Achievements</span>
      </h2>
      <motion.ol
        className="space-y-8 list-decimal list-inside text-left"
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
          <span className="font-semibold">Mentorship – IIT Delhi &amp; FITT</span>
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

      <div className="mt-12">
        <img
          src="/images/solve-for-tomorrow-top50.png"
          alt="Congratulations Top 50 - Solve for Tomorrow"
          className="w-full max-w-xl mx-auto rounded-xl shadow-lg mb-8"
        />
        <h3 className="text-2xl font-bold mb-4">Featured</h3>
        <a
          href="https://www.news18.com/news/studio18/samsung-solve-for-tomorrow-competitions-top-50-shortlisted-entries-highlight-innovative-solutions-in-healthcare-5825209.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6 text-appleBlue underline hover:text-appleBlack dark:hover:text-white transition-colors"
        >
          News18: Samsung Solve for Tomorrow Competition's Top 50 Shortlisted Entries Highlight Innovative Solutions in Healthcare
        </a>
        <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
          <video
            src="/images/solve-for-tomorrow-video.mp4"
            controls
            className="w-full h-72 md:h-96 object-cover"
            title="Samsung Solve for Tomorrow - Top 50 Teams Video"
          />
        </div>
      </div>
    </motion.section>
  );
} 