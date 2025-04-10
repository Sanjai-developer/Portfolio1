
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Terminal, Layout, Laptop } from 'lucide-react';

const SkillsSection = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  const programmingLanguages = [
    { name: "JavaScript", percentage: 90 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 95 },
    { name: "Java", percentage: 85 },
    { name: "SQL", percentage: 80 }
  ];

  const frameworks = [
    { name: "React", icon: <Layout className="h-4 w-4" /> },
    { name: "Express", icon: <Server className="h-4 w-4" /> },
    { name: "Node.js", icon: <Terminal className="h-4 w-4" /> },
    { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
    { name: "Firebase", icon: <Code className="h-4 w-4" /> },
    { name: "Spring Boot", icon: <Server className="h-4 w-4" /> }
  ];

  const tools = [
    { name: "VSCode", icon: <Code className="h-4 w-4" /> },
    { name: "IntelliJ", icon: <Laptop className="h-4 w-4" /> },
    { name: "NetBeans", icon: <Code className="h-4 w-4" /> },
    { name: "Android Studio", icon: <Laptop className="h-4 w-4" /> }
  ];

  const databases = [
    { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
    { name: "MySQL", icon: <Database className="h-4 w-4" /> },
    { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
    { name: "Firebase Firestore", icon: <Database className="h-4 w-4" /> }
  ];
  
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">
            <span className="mr-2">02.</span>Skills
          </h2>
          
          <h3 className="section-title">
            My Technical Skills
          </h3>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-16"
          >
            {/* Programming Languages */}
            <motion.div variants={cardVariants} className="space-y-4">
              <h4 className="text-2xl font-bold text-white">
                Programming Languages
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programmingLanguages.map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-light">{language.name}</span>
                      <span className="text-highlight font-mono">{language.percentage}%</span>
                    </div>
                    <div className="h-2 bg-navy-light rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-highlight rounded-full"
                        custom={language.percentage}
                        variants={progressVariants}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks & Libraries */}
            <motion.div variants={cardVariants}>
              <h4 className="text-2xl font-bold text-white mb-4">
                Libraries & Frameworks
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {frameworks.map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-navy-light border-slate/10 card-hover"
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="bg-highlight/20 p-3 rounded-full mb-3">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-light">{item.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Development Tools & Databases - Two columns grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Tools */}
              <motion.div variants={cardVariants}>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Development Tools
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {tools.map((item, index) => (
                    <Card 
                      key={index} 
                      className="bg-navy-light border-slate/10 card-hover"
                    >
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-highlight/20 p-3 rounded-full mb-3">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-light">{item.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
              
              {/* Databases */}
              <motion.div variants={cardVariants}>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Databases
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {databases.map((item, index) => (
                    <Card 
                      key={index} 
                      className="bg-navy-light border-slate/10 card-hover"
                    >
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-highlight/20 p-3 rounded-full mb-3">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-light">{item.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
