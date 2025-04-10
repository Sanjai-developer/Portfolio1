
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const projects = [
    {
      id: 1,
      title: "Turfify",
      description: "An application designed to streamline the process of booking and managing turf reservations, providing users with an intuitive interface to view availability and make bookings.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/Sanjai-developer/Turfapp",
      demo: null,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Contact Manager Application",
      description: "This backend application provides APIs for managing contacts, including functionalities to add, update, delete, and retrieve contact information.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Sanjai-developer/Contact-App",
      demo: null,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Waydown",
      description: "A tourist spot sharing application that integrates AI features and offers an immersive VR experience, allowing users to explore and share information about tourist destinations.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "AI", "VR"],
      github: "https://github.com/Sanjai-developer/Waydown-frontend",
      githubBackend: "https://github.com/Sanjai-developer/Waydown-backend",
      demo: null,
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">
            <span className="mr-2">04.</span>Projects
          </h2>
          
          <div className="flex justify-between items-center mb-12">
            <h3 className="section-title mb-0">
              My Recent Work
            </h3>
            <Link to="/projects">
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                View All Projects
              </Button>
            </Link>
          </div>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Card className="bg-navy-light border-slate/10 overflow-hidden h-full flex flex-col card-hover">
                  <div className="relative aspect-video overflow-hidden bg-navy-dark">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60" />
                    
                    {/* Preview Video Button */}
                    <Link to={`/projects/${project.id}`} className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="outline" className="bg-navy-dark/80 border-highlight text-highlight">
                        <Play size={16} className="mr-2" /> Preview
                      </Button>
                    </Link>
                  </div>
                  
                  <CardContent className="p-6 flex-grow">
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-slate text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 flex justify-between border-t border-slate/10 mt-auto">
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate hover:text-highlight transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      
                      {project.githubBackend && (
                        <a 
                          href={project.githubBackend} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate hover:text-highlight transition-colors"
                          title="Backend Repository"
                        >
                          <Github size={20} />
                          <span className="text-xs ml-1">API</span>
                        </a>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate hover:text-highlight transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="text-highlight hover:text-highlight/80 text-sm font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
