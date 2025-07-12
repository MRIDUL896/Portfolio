import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="experience" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <Briefcase className="text-sky-400" size={32} />
          <span className="text-sky-400">Experience</span>
        </h2>
        
        <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg">
          <div className="relative pl-8 pb-8 border-l-2 border-sky-400/50">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-sky-400"></div>
            <h3 className="text-xl font-semibold text-sky-300">Software Development Intern</h3>
            <p className="text-gray-400">ICAT, Mansar</p>
            <p className="text-gray-400 mb-4">January 2025 - February 2025</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">▹</span>
                <span>Designed and developed a full-stack Query Dashboard using MERN stack for efficient query management.</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">▹</span>
                <span>Implemented features like user authentication, query submission, status update, and search/filter functionality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">▹</span>
                <span>Designed responsive UI and integrated REST APIs for smooth data handling.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}