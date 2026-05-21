import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Prof. Alan Turing",
      role: "Computer Science Professor",
      content: "Sanika was an outstanding student in my Web Development course. She consistently went above and beyond on her projects and showed great leadership in team assignments.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
      name: "Sarah Williams",
      role: "Hackathon Teammate",
      content: "An absolute pleasure to work with during the 48-hour hackathon. She brought a level of technical enthusiasm and design sensibility that really elevated our project.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
      name: "David Chen",
      role: "Study Group Peer",
      content: "Rare to find someone who grasps both deep backend data structures and nuanced frontend user experience. Always helpful when studying for exams.",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    }
  ];

  return (
    <section className="section-padding bg-black/5 dark:bg-white/5 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="heading-2">Recommendations</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="text-accent/20 absolute top-6 right-6" size={64} />
              
              <p className="text-secondary mb-8 relative z-10 leading-relaxed italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-accent/30"
                />
                <div>
                  <h4 className="font-heading font-semibold text-primary">{t.name}</h4>
                  <p className="text-sm text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
