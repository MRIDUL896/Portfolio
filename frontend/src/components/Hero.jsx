import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import res from '../assets/Mridul_Resume.pdf'

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-20 pb-12"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-sky-400">Mridul Kumar</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8">
            Final-year B.Tech student in Information Technology at the National Institute of Technology (NIT) Srinagar.
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-medium shadow-lg"
            >
              Contact Me
            </motion.a>
            <motion.a
              href={res}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-sky-400 text-sky-400 rounded-lg font-medium flex items-center gap-2"
            >
              <FiDownload /> Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}