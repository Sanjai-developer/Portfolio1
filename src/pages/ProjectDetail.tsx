
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the project data from an API or database
    // For this demo, we'll use a mock project object based on the provided id
    const fetchProject = async () => {
      setLoading(true);
      
      // Mock data
      const projectData = {
        1: {
          id: 1,
          title: "Turfify",
          description: "Turfify is an application designed to streamline the process of booking and managing turf reservations, providing users with an intuitive interface to view availability and make bookings.",
          longDescription: "Turfify is a comprehensive turf booking platform that enables users to search, browse, and book sports turfs. The application features real-time availability updates, user profiles, booking history, and secure payment processing. Admins can manage turfs, view analytics, and handle user bookings through a dedicated dashboard.",
          tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT Authentication", "Stripe Payment"],
          github: "https://github.com/Sanjai-developer/Turfapp",
          demo: null,
          image: "/placeholder.svg",
          features: [
            "User authentication and profile management",
            "Turf search with filters like location and sport type",
            "Real-time availability calendar",
            "Booking management for users and admins",
            "Payment processing",
            "Responsive design for mobile and desktop"
          ]
        },
        2: {
          id: 2,
          title: "Contact Manager Application",
          description: "This backend application provides APIs for managing contacts, including functionalities to add, update, delete, and retrieve contact information.",
          longDescription: "The Contact Manager API is a robust backend solution for managing contact information. It provides a comprehensive set of RESTful endpoints that allow clients to create, retrieve, update, and delete contacts. The application implements JWT-based authentication to secure API endpoints, ensuring that users can only access and modify their own contacts.",
          tech: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST API"],
          github: "https://github.com/Sanjai-developer/Contact-App",
          demo: null,
          image: "/placeholder.svg",
          features: [
            "User authentication and authorization",
            "CRUD operations for contact management",
            "Contact filtering and searching",
            "Pagination and sorting",
            "Input validation and error handling",
            "Comprehensive API documentation"
          ]
        },
        3: {
          id: 3,
          title: "Waydown",
          description: "A tourist spot sharing application that integrates AI features and offers an immersive VR experience, allowing users to explore and share information about tourist destinations.",
          longDescription: "Waydown is an innovative tourist destination discovery platform that combines AI recommendations with immersive VR experiences. Users can discover new tourist spots based on their preferences, view high-quality images and 360° panoramas, read reviews from other travelers, and even experience a virtual tour of destinations before planning their trip. The application also allows users to share their own experiences and recommendations.",
          tech: ["MongoDB", "Express.js", "React", "Node.js", "AI Integration", "VR Technologies", "Cloud Storage"],
          github: "https://github.com/Sanjai-developer/Waydown-frontend",
          githubBackend: "https://github.com/Sanjai-developer/Waydown-backend",
          demo: null,
          image: "/placeholder.svg",
          features: [
            "AI-powered recommendation system",
            "Immersive VR tours of tourist destinations",
            "User-generated content including reviews and photos",
            "Interactive maps with point-of-interest markers",
            "Social features including sharing and favoriting",
            "Personalized trip planning tools",
            "Offline access to saved destinations"
          ]
        }
      };
      
      // Simulate API call delay
      setTimeout(() => {
        setProject(projectData[id] || null);
        setLoading(false);
      }, 800);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-dark">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12 flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highlight"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-navy-dark">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12 text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects">
            <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/projects">
              <Button variant="ghost" className="text-slate hover:text-highlight pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </Link>
          </div>
          
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-slate max-w-3xl mb-8">{project.description}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Project Image/Video */}
              <div className="relative aspect-video bg-navy-light rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Play button for demo video */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy-dark/50">
                  <Button className="bg-highlight text-navy-dark hover:bg-highlight/90">
                    <Play className="mr-2 h-4 w-4" /> Watch Demo
                  </Button>
                </div>
              </div>
              
              {/* Project Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">About the Project</h2>
                <p className="text-slate leading-relaxed">
                  {project.longDescription}
                </p>
                
                {/* Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-highlight mr-2">▹</span>
                        <span className="text-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Technologies */}
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Links</h3>
                <div className="space-y-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-3 bg-navy-dark rounded-md text-slate hover:text-white hover:bg-navy transition-colors"
                  >
                    <span>GitHub Repository</span>
                    <Github size={20} />
                  </a>
                  
                  {project.githubBackend && (
                    <a 
                      href={project.githubBackend} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between p-3 bg-navy-dark rounded-md text-slate hover:text-white hover:bg-navy transition-colors"
                    >
                      <span>Backend Repository</span>
                      <Github size={20} />
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between p-3 bg-navy-dark rounded-md text-slate hover:text-white hover:bg-navy transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Want something similar?</h3>
                <p className="text-slate mb-4">
                  If you're interested in a similar project or want to discuss 
                  potential collaborations, feel free to get in touch!
                </p>
                <Link to="/#contact">
                  <Button className="w-full bg-highlight text-navy-dark hover:bg-highlight/90">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
