
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Name and tagline */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white font-mono">
              <span className="text-highlight">S</span>anjai
            </Link>
            <p className="text-slate">
              Full Stack Developer specializing in MERN stack and AI automation.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate hover:text-highlight transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate hover:text-highlight transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <Link to="/projects" className="text-slate hover:text-highlight transition-colors">
                  All Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-slate hover:text-highlight transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-slate">
                <a 
                  href="mailto:sanjaisanjai7182@gmail.com" 
                  className="hover:text-highlight transition-colors"
                >
                  sanjaisanjai7182@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Sanjai-developer" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate hover:text-highlight transition-colors"
                >
                  github.com/Sanjai-developer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/sanjai-n-b9536328b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate hover:text-highlight transition-colors"
                >
                  linkedin.com/in/sanjai-n-b9536328b
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate text-sm">
            &copy; {new Date().getFullYear()} N. Sanjai. All Rights Reserved.
          </p>
          
          <p className="text-slate text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-highlight mx-1" /> by N. Sanjai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
