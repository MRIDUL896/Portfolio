import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-gray-800 mt-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Mridul Kumar. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with React, Vite, and Tailwind CSS
        </p>
      </div>
    </motion.footer>
  )
}