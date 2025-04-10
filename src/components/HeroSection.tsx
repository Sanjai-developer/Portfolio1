
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, GitHub, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDScene from './3D/ThreeDScene';

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ThreeDScene />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start justify-center">
          <motion.p 
            className="font-mono text-highlight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            N. Sanjai.
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-slate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p 
            className="max-w-lg text-lg text-slate mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a Full Stack Developer specializing in MERN stack and AI automation.
            Currently focused on creating accessible, user-centered digital experiences.
          </motion.p>
          
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects">
              <Button className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10">
                Check out my work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="ghost" className="text-slate-light hover:text-highlight">
                Get in touch
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="https://github.com/Sanjai-developer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sanjai-n-b9536328b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sanjaisanjai7182@gmail.com" 
              className="social-icon"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={handleScrollDown}
        ref={scrollRef}
      >
        <ChevronDown size={24} className="text-highlight" />
      </div>
    </div>
  );
};

export default HeroSection;
