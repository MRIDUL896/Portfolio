import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="contact" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-sky-400">Contact</span> Me
        </h2>
        
        <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-sky-300 mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <HiOutlineMail className="text-sky-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <a href="mailto:mridulk896@gmail.com" className="text-gray-400 hover:text-sky-300 transition-colors">
                      mridulk896@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-sky-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-300">Phone</h4>
                    <a href="tel:+918368324085" className="text-gray-400 hover:text-sky-300 transition-colors">
                      +91-8368324085
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaLinkedin className="text-sky-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-300">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/mridul-kumar-b36144248/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-sky-300 transition-colors"
                    >
                      https://www.linkedin.com/in/mridul-kumar-b36144248/
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-sky-300 mb-4">Connect Online</h3>
              
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/MRIDUL896"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-gray-700 rounded-full text-gray-300 hover:text-sky-300"
                >
                  <FaGithub size={24} />
                </motion.a>
                
                <motion.a
                  href="https://leetcode.com/u/MridulK896/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-gray-700 rounded-full text-gray-300 hover:text-sky-300"
                >
                  <FaCode size={24} />
                </motion.a>
              </div>
              
              <form className="mt-6 space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-medium"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}