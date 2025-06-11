"use client";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for creating maintainable and scalable React applications with modern tools and techniques.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is revolutionizing healthcare and the innovative solutions being developed.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    tags: ["AI", "Healthcare", "Innovation"]
  },
  {
    title: "Design Systems That Scale",
    excerpt: "Creating consistent and scalable design systems that grow with your product and team.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    tags: ["Design", "UI/UX", "Systems"]
  }
];

export default function BlogSection() {
  return (
    <motion.section
      id="blog"
      className="w-full max-w-6xl px-4 py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          Latest Insights
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts on technology, design, and innovation from my journey as a developer and creator.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/40 dark:border-white/20 shadow-glass cursor-pointer group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-appleBlue/10 text-appleBlue rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-appleBlue transition-colors">
                {post.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      
      {/* View All Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-black/20 dark:bg-white/10 backdrop-blur-xl border border-black/40 dark:border-white/20 shadow-glass text-black dark:text-white font-semibold transition-all duration-200 hover:bg-black/30 dark:hover:bg-white/20"
        >
          View All Articles
        </motion.button>
      </motion.div>
    </motion.section>
  );
}