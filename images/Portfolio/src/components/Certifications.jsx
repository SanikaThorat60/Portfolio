import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { portfolioConfig } from '../config';

const Certifications = () => {
  return (
    <section className="section-padding bg-black/5 dark:bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2">Certifications</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {portfolioConfig.certifications.map((cert, index) => (
            <motion.a
              href={cert.link}
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block glass p-6 md:p-8 rounded-2xl hover:-translate-y-1 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-secondary font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-secondary bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full w-fit">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
