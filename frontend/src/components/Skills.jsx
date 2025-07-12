import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiPostman,
  SiLinux,
  SiApachehadoop
} from 'react-icons/si';
import { FaDatabase, FaNetworkWired, FaLaptopCode } from 'react-icons/fa';

const skills = [
  {
    category: 'Languages',
    icon: <FaLaptopCode className="text-2xl" />,
    items: [
      { name: 'C', icon: <SiC className="text-xl" /> },
      { name: 'C++', icon: <SiCplusplus className="text-xl" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-xl" /> }
    ]
  },
  {
    category: 'Frontend',
    icon: <SiReact className="text-2xl" />,
    items: [
      { name: 'HTML', icon: <SiHtml5 className="text-xl" /> },
      { name: 'CSS', icon: <SiCss3 className="text-xl" /> },
      { name: 'React', icon: <SiReact className="text-xl" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-xl" /> }
    ]
  },
  {
    category: 'Backend',
    icon: <SiNodedotjs className="text-2xl" />,
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-xl" /> },
      { name: 'Express', icon: <SiExpress className="text-xl" /> },
      { name: 'REST APIs', icon: <FaNetworkWired className="text-xl" /> }
    ]
  },
  {
    category: 'Database',
    icon: <FaDatabase className="text-2xl" />,
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-xl" /> },
      { name: 'SQL', icon: <SiPostgresql className="text-xl" /> }
    ]
  },
  {
    category: 'Tools',
    icon: <SiGithub className="text-2xl" />,
    items: [
      { name: 'GitHub', icon: <SiGithub className="text-xl" /> },
      { name: 'Postman', icon: <SiPostman className="text-xl" /> },
      { name: 'Linux', icon: <SiLinux className="text-xl" /> },
      { name: 'Hadoop', icon: <SiApachehadoop className="text-xl" /> }
    ]
  },
  {
    category: 'CS Fundamentals',
    icon: <FaLaptopCode className="text-2xl" />,
    items: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'OOP' },
      { name: 'DBMS' },
      { name: 'OS' },
      { name: 'Computer Networks' }
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="skills" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-sky-400">Skills</span>
        </h2>
        
        <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-sky-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-sky-300">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-600/30 rounded-lg text-sm text-gray-200 hover:bg-gray-600/50 transition-all"
                    >
                      {item.icon && <span className="text-sky-300">{item.icon}</span>}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}