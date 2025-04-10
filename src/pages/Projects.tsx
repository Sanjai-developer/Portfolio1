
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowLeft, Play, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Turfify",
      description: "An application designed to streamline the process of booking and managing turf reservations, providing users with an intuitive interface to view availability and make bookings.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      category: "full-stack",
      github: "https://github.com/Sanjai-developer/Turfapp",
      demo: null,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Contact Manager Application",
      description: "This backend application provides APIs for managing contacts, including functionalities to add, update, delete, and retrieve contact information.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      category: "backend",
      github: "https://github.com/Sanjai-developer/Contact-App",
      demo: null,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Waydown",
      description: "A tourist spot sharing application that integrates AI features and offers an immersive VR experience, allowing users to explore and share information about tourist destinations.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "AI", "VR"],
      category: "full-stack",
      github: "https://github.com/Sanjai-developer/Waydown-frontend",
      githubBackend: "https://github.com/Sanjai-developer/Waydown-backend",
      demo: null,
      image: "/placeholder.svg",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="text-slate hover:text-highlight pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
          
          {/* Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
            <p className="text-slate text-lg">
              Explore my projects, spanning from full-stack web applications to backend systems,
              each showcasing my skills and problem-solving approach.
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              className={filter === 'all' ? 'bg-highlight text-navy-dark' : 'border-highlight text-highlight hover:bg-highlight/10'}
              onClick={() => setFilter('all')}
            >
              <Filter className="mr-2 h-4 w-4" /> All Projects
            </Button>
            <Button 
              variant={filter === 'full-stack' ? 'default' : 'outline'}
              className={filter === 'full-stack' ? 'bg-highlight text-navy-dark' : 'border-highlight text-highlight hover:bg-highlight/10'}
              onClick={() => setFilter('full-stack')}
            >
              Full Stack
            </Button>
            <Button 
              variant={filter === 'frontend' ? 'default' : 'outline'}
              className={filter === 'frontend' ? 'bg-highlight text-navy-dark' : 'border-highlight text-highlight hover:bg-highlight/10'}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </Button>
            <Button 
              variant={filter === 'backend' ? 'default' : 'outline'}
              className={filter === 'backend' ? 'bg-highlight text-navy-dark' : 'border-highlight text-highlight hover:bg-highlight/10'}
              onClick={() => setFilter('backend')}
            >
              Backend
            </Button>
          </div>
          
          {/* Projects grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
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
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-highlight text-navy-dark font-medium">
                        {project.category === 'full-stack' ? 'Full Stack' : 
                         project.category === 'frontend' ? 'Frontend' : 'Backend'}
                      </Badge>
                    </div>
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
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-slate">Try changing the filter or check back later</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
