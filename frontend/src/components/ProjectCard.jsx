import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-sky-400/10 transition-shadow"
    >
      <h3 className="text-xl font-semibold text-sky-300 mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        {project.links.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center text-gray-300 hover:text-sky-300"
          >
            {link.icon === 'github' ? (
              <>
                <FaGithub className="mr-1" /> GitHub
              </>
            ) : (
              <>
                <FaExternalLinkAlt className="mr-1" /> Live Demo
              </>
            )}
          </motion.a>
        ))}
      </div>
      
      {project.credentials && (
        <div className="mt-4 p-3 bg-gray-700/30 rounded-lg">
          <p className="text-sm text-gray-400">Test Credentials:</p>
          <p className="text-gray-300">Email: {project.credentials.email}</p>
          <p className="text-gray-300">Password: {project.credentials.password}</p>
        </div>
      )}
    </motion.div>
  )
}