import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) — Information Technology",
      institution: "National Institute Of Technology, Srinagar",
      duration: "2022 - 2026",
      details: "CGPA (Till 5th SEM): 8.25",
      isActive: true
    },
    {
      degree: "12th Grade (Senior Secondary)",
      institution: "Career Point Gurukul, Kota ",
      duration: "2021",
      details: "Percentage: 80.2%",
      isActive: false
    },
    {
      degree: "10th Grade (Secondary)",
      institution: "DPSG, Palam Vihar, Gurgaon",
      duration: "2019",
      details: "Percentage: 93.2%",
      isActive: false
    }
  ]

  return (
    <section id="education" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <GraduationCap className="text-sky-400" size={32} />
          <span className="text-sky-400">Education</span>
        </h2>
        
        <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg">
          <div className="relative">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative pl-8 ${index !== educationData.length - 1 ? 'pb-8' : ''}
                   ${index !== educationData.length - 1 ? 'border-l-2 border-sky-400/50' : 'border-l-2 border-transparent'}`}
              >
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full
                   ${item.isActive ? 'bg-sky-400' : 'bg-gray-500'}`}></div>
                
                <h3 className={`text-xl font-semibold
                   ${item.isActive ? 'text-sky-300' : 'text-gray-300'}`}>
                  {item.degree}
                </h3>
                
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gray-400 mb-2">{item.duration}</p>
                <p className="text-gray-300">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}