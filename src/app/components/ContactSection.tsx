"use client";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    link: "https://instagram.com/mohd_fxhym",
    username: "mohd_fxhym",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" className="dark:invert">
        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/mohdfxhym",
    username: "mohdfxhym",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" className="dark:invert">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
      </svg>
    ),
  },
  {
    name: "GitHub",
    link: "https://github.com/mohdfxhym",
    username: "mohdfxhym",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64" className="dark:invert">
        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
      </svg>
    ),
  },
  {
    name: "Mail",
    link: "mailto:mohdfaheemct@gmail.com",
    username: "mohdfaheemct@gmail.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" className="dark:invert">
        <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="w-full max-w-xl px-4 py-16 mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
        <span className="bg-gradient-to-r from-black via-gray-800 to-white dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">Contact</span>
      </h2>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black/20 dark:bg-white/10 backdrop-blur-xl border border-black/30 dark:border-white/20 rounded-2xl shadow-glass p-8 flex flex-col gap-4 mb-6"
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 rounded-lg bg-black/20 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 shadow-glass focus:border-appleBlue outline-none transition-all"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-lg bg-black/20 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 shadow-glass focus:border-appleBlue outline-none transition-all"
          required
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-3 rounded-lg bg-black/20 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 shadow-glass focus:border-appleBlue outline-none min-h-[100px] transition-all"
          required
        />
        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-black/40 dark:border-white/20 shadow-glass text-appleBlack dark:text-white font-semibold text-lg transition-all duration-200 hover:bg-white/50 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-appleBlue/60"
        >
          Send Message
        </button>
      </motion.form>
      <div className="flex flex-col items-center gap-4 mb-6">
        {socials.map(social => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg hover:text-appleBlue transition-colors"
            aria-label={social.name}
          >
            <motion.span
              whileHover={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {social.svg}
            </motion.span>
            <span className="font-medium">{social.username}</span>
          </a>
        ))}
      </div>
      <motion.a
        href="/Mohammed_Faheem resume.pdf"
        className="inline-block px-6 py-2 rounded-full bg-black/20 dark:bg-white/10 backdrop-blur-xl border border-black/40 dark:border-white/20 shadow-glass text-appleBlack dark:text-white font-medium transition-all duration-200 hover:bg-black/30 dark:hover:bg-white/20"
        download
        whileHover={{ scale: 1.12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        Download Resume
      </motion.a>
    </motion.section>
  );
} 