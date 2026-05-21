import { motion } from 'framer-motion';
import { portfolioConfig } from '../config';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Premium image placeholder with decorative frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] glass group">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Developer workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-[40px] z-[-1]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-secondary"
          >
            <p>{portfolioConfig.aboutParagraph1}</p>
            <p>{portfolioConfig.aboutParagraph2}</p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 mt-6 border-t border-secondary/20">
              {portfolioConfig.stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-4xl font-heading font-bold text-accent mb-2">{stat.number}</h4>
                  <p className="text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
