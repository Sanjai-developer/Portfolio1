import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your actual Google Sheets script URL
      const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
      
      // This is a placeholder for the actual Google Sheets submission
      // In a real implementation, you would use fetch to send data to your Google Sheet
      
      // Simulating submission for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">
            <span className="mr-2">06.</span>Contact
          </h2>
          
          <h3 className="section-title">
            Get In Touch
          </h3>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-4">
                Let's Connect
              </h4>
              
              <p className="text-slate">
                Whether you have a question, want to discuss a project, or just want to say hi, 
                feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Email</h5>
                    <a 
                      href="mailto:sanjaisanjai7182@gmail.com" 
                      className="text-slate hover:text-highlight transition-colors"
                    >
                      sanjaisanjai7182@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight/20 p-3 rounded-full">
                    <Github className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">GitHub</h5>
                    <a 
                      href="https://github.com/Sanjai-developer" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate hover:text-highlight transition-colors"
                    >
                      github.com/Sanjai-developer
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight/20 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">LinkedIn</h5>
                    <a 
                      href="https://www.linkedin.com/in/sanjai-n-b9536328b/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate hover:text-highlight transition-colors"
                    >
                      linkedin.com/in/sanjai-n-b9536328b
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Socials */}
              <div className="flex space-x-5 mt-8">
                <a 
                  href="https://github.com/Sanjai-developer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-light rounded-full hover:bg-highlight/10 transition-colors"
                >
                  <Github className="h-5 w-5 text-highlight" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sanjai-n-b9536328b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-navy-light rounded-full hover:bg-highlight/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-highlight" />
                </a>
                <a 
                  href="mailto:sanjaisanjai7182@gmail.com"
                  className="p-3 bg-navy-light rounded-full hover:bg-highlight/10 transition-colors"
                >
                  <Mail className="h-5 w-5 text-highlight" />
                </a>
                <a 
                  href="#contact"
                  className="p-3 bg-navy-light rounded-full hover:bg-highlight/10 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-highlight" />
                </a>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-navy-light border-slate/10">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="bg-navy-dark border-slate/20 placeholder:text-slate/50 text-white"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-navy-dark border-slate/20 placeholder:text-slate/50 text-white"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="bg-navy-dark border-slate/20 placeholder:text-slate/50 text-white"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        className="bg-navy-dark border-slate/20 placeholder:text-slate/50 text-white min-h-[150px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-highlight text-navy-dark hover:bg-highlight/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
