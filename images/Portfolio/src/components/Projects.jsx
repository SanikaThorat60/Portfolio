import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { portfolioConfig } from '../config';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end mb-12"
        >
          <h2 className="heading-2 !mb-0 text-left">Selected Work</h2>
          <a href="#" className="hidden md:inline-flex items-center text-accent font-medium hover:underline">
            View All Projects <ExternalLink size={16} className="ml-1" />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioConfig.projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative rounded-2xl overflow-hidden glass border-white/10 flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-heading font-bold mb-3">{project.title}</h3>
                <p className="text-secondary text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-secondary/20">
                  <a href={project.live} className="flex-1 btn-primary !py-2 !text-sm">
                    Live Demo
                  </a>
                  <a href={project.github} className="p-2 rounded-full border border-secondary/30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <Code size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-accent font-medium hover:underline">
            View All Projects <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
