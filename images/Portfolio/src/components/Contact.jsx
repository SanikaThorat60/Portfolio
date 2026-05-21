import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { portfolioConfig } from '../config';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="heading-2">{portfolioConfig.contactHeading}</h2>
          <p className="text-secondary text-lg mt-4">
            {portfolioConfig.contactSubheading}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.a
            href={`mailto:${portfolioConfig.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail size={32} />
            </div>
            <p className="text-sm text-secondary font-medium uppercase tracking-wider mb-2">Email</p>
            <p className="text-lg font-medium group-hover:text-accent transition-colors">{portfolioConfig.email}</p>
          </motion.a>

          <motion.a
            href={`tel:${portfolioConfig.phone.replace(/[^0-9+]/g, '')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone size={32} />
            </div>
            <p className="text-sm text-secondary font-medium uppercase tracking-wider mb-2">Phone</p>
            <p className="text-lg font-medium group-hover:text-accent transition-colors">{portfolioConfig.phone}</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={32} />
            </div>
            <p className="text-sm text-secondary font-medium uppercase tracking-wider mb-2">Location</p>
            <p className="text-lg font-medium">{portfolioConfig.location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
