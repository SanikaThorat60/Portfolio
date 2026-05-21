import { motion } from 'framer-motion';
import { portfolioConfig } from '../config';

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="heading-2 !mb-6">Areas of Interest</h2>
          <p className="text-secondary text-lg">
            {portfolioConfig.interestsDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioConfig.interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl glass border border-white/5 hover:bg-white/5 dark:hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="text-accent mb-6 bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {interest.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{interest.title}</h3>
              <p className="text-secondary leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
