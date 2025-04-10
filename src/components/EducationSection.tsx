
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const EducationSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const education = [
    {
      degree: "B.Tech - Information Technology",
      institution: "Velammal College of Engineering and Technology",
      period: "2022 - 2026",
      icon: <GraduationCap className="h-6 w-6 text-highlight" />,
    },
    {
      degree: "12th Standard",
      institution: "Mahatma Montessori Matriculation Higher Secondary School",
      period: "2021 - 2022",
      icon: <GraduationCap className="h-6 w-6 text-highlight" />,
    },
    {
      degree: "10th Standard",
      institution: "Mahatma Montessori Matriculation Higher Secondary School",
      period: "2020 - 2021",
      icon: <GraduationCap className="h-6 w-6 text-highlight" />,
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">
            <span className="mr-2">03.</span>Education
          </h2>
          
          <h3 className="section-title">
            Academic Background
          </h3>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-12"
          >
            <div className="relative border-l-2 border-slate/20 pl-8 ml-4 space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 p-2 bg-navy-dark border-2 border-highlight rounded-full">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-lg p-6">
                    <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                    <p className="text-slate mb-2">{item.institution}</p>
                    <span className="font-mono text-sm text-highlight">{item.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
