"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Senior Software Engineer at Google",
    company: "Google",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quote: "Mohammed's innovative approach to problem-solving and attention to detail make him an exceptional developer. His work on the healthcare solution was truly impressive.",
    rating: 5
  },
  {
    name: "Alex Chen",
    role: "Product Manager",
    company: "Microsoft",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quote: "Working with Mohammed was a pleasure. His technical skills combined with his creative vision resulted in outstanding user experiences.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Adobe",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quote: "Mohammed has an excellent eye for design and the technical expertise to bring complex ideas to life. Highly recommended!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="w-full max-w-6xl px-4 py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-white">
        What People Say
      </h2>
      
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/40 dark:border-white/20 shadow-glass"
          >
            {/* Rating Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2 + i * 0.1 }}
                  className="text-yellow-400 text-lg"
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
              "{testimonial.quote}"
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-black dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
                <p className="text-xs text-appleBlue font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}