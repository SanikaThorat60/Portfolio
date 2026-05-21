import { motion } from 'framer-motion';
import { portfolioConfig } from '../config';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-padding bg-black/5 dark:bg-white/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2">Technical Expertise</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {portfolioConfig.skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="glass rounded-2xl p-6 h-full hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-heading font-semibold text-accent mb-6 border-b border-secondary/20 pb-4">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
