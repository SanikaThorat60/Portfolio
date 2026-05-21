import { portfolioConfig } from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-2xl font-bold tracking-tighter text-primary block mb-2">
              Portfolio.
            </a>
            <p className="text-secondary text-sm">
              Crafting digital experiences with precision and passion.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {portfolioConfig.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 text-secondary hover:bg-accent hover:text-white transition-all hover:-translate-y-1"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-black/10 dark:border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
          <p>© {currentYear} {portfolioConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
