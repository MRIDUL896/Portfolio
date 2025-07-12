import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Header({ activeSection, scrolled }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-800/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent"
          >
            Mridul Kumar
          </motion.a>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? 'text-sky-400' 
                    : 'text-gray-300 hover:text-sky-300'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <motion.a 
              href="https://github.com/MRIDUL896" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 hover:text-sky-300"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mridul-kumar-b36144248/" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 hover:text-sky-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://leetcode.com/u/MridulK896/" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 hover:text-sky-300"
            >
              <FaCode className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}