import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Bull-Bear (Stocks Information Website)',
    description: 'Visualized historical data using charts for better understanding of trends. Implemented a news section to keep users updated with the latest world events in real-time. Developed a company info page to provide users with detailed and relevant organizational information.',
    techStack: ['ReactJS', 'Chart.js', 'Tailwind CSS', 'Redux Toolkit', 'Express.js', 'Node.js', 'Yahoo Finance API'],
    links: [
      { icon: 'github', url: 'https://github.com/MRIDUL896/BullBear' },
      { icon: 'live', url: 'https://bullbear-zctw.onrender.com/Home' }
    ]
  },
  {
    title: 'GameAble (Online Games and Chatting Site)',
    description: 'Developed a fullstack responsive online gaming and chatting app. Integrated backend server with Express.js, Node.js, and MongoDB Atlas for user data. Implemented secure payments via Razorpay and real-time chat with Socket.io.',
    techStack: ['ReactJS', 'Tailwind CSS', 'Redux Toolkit', 'Express.js', 'JWT', 'MongoDB', 'Razorpay', 'Socket.io'],
    links: [
      { icon: 'github', url: 'https://github.com/MRIDUL896/GameBle' },
      { icon: 'live', url: 'https://gameable-frontend.onrender.com/' }
    ],
    credentials: {
      email: 'test@gmail.com',
      password: '1234'
    }
  },
  {
    title: 'Study Pulse (E-learning App Backend)',
    description: 'Developed backend server for an e-learning platform. Integrated Neon for a scalable relational database system and implemented JWT for authentication. Designed RESTful APIs and built schemas for students, admin, courses, and enrollment.',
    techStack: ['Node.js', 'Express.js', 'Neon', 'JWT', 'RESTful APIs'],
    links: [
      { icon: 'github', url: 'https://github.com/MRIDUL896/Study-Pulse' }
    ]
  },
  {
    title: 'Sentiment Analysis',
    description: 'Collected and preprocessed text data from Kaggle by cleaning, tokenizing and lemmatizing. Developed a machine learning model to classify text data into 5 emotions. Achieved an accuracy of 88.52% on the test dataset.',
    techStack: ['Python', 'Scikit-learn', 'Natural Language Processing'],
    links: [
      { icon: 'github', url: 'https://github.com/MRIDUL896/emotion_model' }
    ]
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="projects" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-sky-400">Projects</span>
        </h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}