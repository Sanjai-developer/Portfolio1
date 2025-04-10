
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.h2 className="section-heading" variants={itemVariants}>
            <span className="mr-2">01.</span>About Me
          </motion.h2>
          
          <motion.h3 className="section-title" variants={itemVariants}>
            Get to know me
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div className="col-span-2 space-y-4" variants={itemVariants}>
              <p className="text-slate leading-relaxed">
                I'm <span className="text-highlight">N. Sanjai</span>, a passionate and dedicated Full Stack Developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack and AI automation using n8n. As a recent graduate, I have successfully completed several projects that showcase my technical skills and innovative approach.
              </p>
              
              <p className="text-slate leading-relaxed">
                My immediate goal is to secure a position that allows me to leverage my skills in a dynamic and growth-oriented environment, laying the foundation for a long-term, successful career in technology.
              </p>
              
              <p className="text-slate leading-relaxed">
                I pride myself on strong team coordination, leadership, and organizational abilities, which have been instrumental in my collaborative projects. Beyond my professional pursuits, I have a keen interest in staying updated with the latest advancements in AI and emerging tech trends, often indulging in tech reels and related content.
              </p>
              
              <p className="text-slate leading-relaxed">
                Notably, I led my team to victory in a 24-hour hackathon at Kalasalingam University, where we secured first place with our project, Waydown, earning a cash prize of ₹25,000, a gold medal, and a trophy.
              </p>
              
              <p className="text-slate leading-relaxed">
                I am enthusiastic about contributing to innovative projects and continuously expanding my expertise in full stack development and AI automation.
              </p>
              
              <div className="pt-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="aspect-square relative border-2 border-highlight rounded-md overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="N. Sanjai"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 border-4 border-highlight/20 rounded-md translate-x-4 translate-y-4 -z-10" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
