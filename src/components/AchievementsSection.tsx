
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AchievementsSection = () => {
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
      transition: { duration: 0.5 }
    }
  };

  const achievements = [
    {
      title: "Hackathon Winner",
      description: "Won first prize in 24-hour hackathon 'Wonders of AI 2.0' with cash prize of ₹25,000",
      icon: <Trophy className="h-12 w-12 text-yellow-400" />,
      date: "2023",
      tags: ["AI", "Hackathon", "First Prize"]
    },
    {
      title: "Project Waydown",
      description: "Created an innovative tourist spot sharing application with AI features and VR experience",
      icon: <Award className="h-12 w-12 text-blue-400" />,
      date: "2023",
      tags: ["MERN Stack", "AI", "VR"]
    },
    {
      title: "Technical Excellence",
      description: "Recognized for technical skills and innovative approach in full stack development",
      icon: <Medal className="h-12 w-12 text-purple-400" />,
      date: "2022-2023",
      tags: ["Technical Skills", "Innovation"]
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">
            <span className="mr-2">05.</span>Achievements
          </h2>
          
          <h3 className="section-title">
            Notable Accomplishments
          </h3>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-navy-light border-slate/10 h-full card-hover">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-navy-dark border border-slate/10">
                      {achievement.icon}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-slate mb-4">{achievement.description}</p>
                    
                    <div className="text-highlight font-mono text-sm mb-4">
                      {achievement.date}
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      {achievement.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
