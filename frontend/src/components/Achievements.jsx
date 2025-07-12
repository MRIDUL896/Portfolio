import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
  {
    title: 'Gate CSE 2025 Qualified',
    description: 'Qualified for GATE (Graduate Aptitude Test in Engineering) in Computer Science.',
    link: 'https://drive.google.com/file/d/1fqUTafemJyQy6afq7q_uwNTzmd5g-Z8_/view'
  },
  {
    title: 'DSA Problem Solving',
    description: 'Solved 600+ DSA questions in C++ on LeetCode.',
    link: 'https://leetcode.com/u/MridulK896/'
  }
]

export default function Achievements() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="achievements" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-sky-400">Achievements</span>
        </h2>

        <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-600/50 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-sky-300 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
