import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioConfig } from '../config';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent uppercase tracking-[0.2em] font-semibold text-sm md:text-base mb-6 block">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="heading-1 mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">{portfolioConfig.name}</span>
          <br />
          {portfolioConfig.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-secondary max-w-2xl mx-auto text-lg md:text-xl mb-10"
        >
          {portfolioConfig.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View My Projects <ArrowRight className="ml-2" size={18} />
          </a>
          <a href={portfolioConfig.resumeLink} className="btn-outline w-full sm:w-auto">
            Download Resume <Download className="ml-2" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
