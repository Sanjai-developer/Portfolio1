
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Code, GitBranch, GitCommit, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const GitHubSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [githubData, setGithubData] = useState({
    loading: true,
    repos: [],
    activities: []
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      // This is a placeholder. In a real application, you would fetch actual GitHub data
      // from GitHub API or a backend service that interacts with GitHub API.
      
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        setGithubData({
          loading: false,
          repos: [
            { name: 'Turfify', stars: 12, forks: 2, language: 'JavaScript' },
            { name: 'Contact-App', stars: 8, forks: 1, language: 'JavaScript' },
            { name: 'Waydown-frontend', stars: 15, forks: 3, language: 'React' },
            { name: 'Waydown-backend', stars: 10, forks: 2, language: 'Node.js' },
          ],
          activities: [
            { type: 'commit', repo: 'Turfify', message: 'Add booking functionality', date: '3 days ago' },
            { type: 'pr', repo: 'Waydown-frontend', message: 'Implement VR experience', date: '1 week ago' },
            { type: 'commit', repo: 'Contact-App', message: 'Fix API routing', date: '2 weeks ago' },
          ]
        });
      }, 1000);
    };

    fetchGitHubData();
  }, []);

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

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">
            <span className="mr-2">07.</span>GitHub Activity
          </h2>
          
          <div className="flex justify-between items-center mb-12">
            <h3 className="section-title mb-0">
              Coding Activity
            </h3>
            <a 
              href="https://github.com/Sanjai-developer" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                <Github className="mr-2 h-4 w-4" /> View GitHub Profile
              </Button>
            </a>
          </div>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {/* Contribution calendar (mock) */}
            <motion.div variants={itemVariants}>
              <Card className="bg-navy-light border-slate/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-highlight" />
                    <h4 className="text-lg font-semibold text-white">Contribution Calendar</h4>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 7 * 8 }).map((_, i) => {
                      // Generate random contribution intensity for demo
                      const intensity = Math.floor(Math.random() * 5);
                      let bgColor;
                      
                      switch (intensity) {
                        case 0: bgColor = 'bg-navy-dark'; break;
                        case 1: bgColor = 'bg-highlight/20'; break;
                        case 2: bgColor = 'bg-highlight/40'; break;
                        case 3: bgColor = 'bg-highlight/60'; break;
                        case 4: bgColor = 'bg-highlight/80'; break;
                      }
                      
                      return (
                        <div 
                          key={i} 
                          className={`aspect-square ${bgColor} rounded-sm`}
                          title="Sample contribution" 
                        />
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Top Repositories & Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Repositories */}
              <motion.div variants={itemVariants}>
                <Card className="bg-navy-light border-slate/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <GitBranch className="h-5 w-5 text-highlight" />
                      <h4 className="text-lg font-semibold text-white">Top Repositories</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {githubData.loading ? (
                        <div className="animate-pulse space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-12 bg-navy rounded-md" />
                          ))}
                        </div>
                      ) : (
                        githubData.repos.map((repo, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-navy-dark rounded-md">
                            <div>
                              <h5 className="font-medium text-white">{repo.name}</h5>
                              <span className="text-sm text-slate">{repo.language}</span>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-sm text-slate">
                                <span>⭐</span> {repo.stars}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-slate">
                                <GitBranch className="h-3 w-3" /> {repo.forks}
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Recent Activity */}
              <motion.div variants={itemVariants}>
                <Card className="bg-navy-light border-slate/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <GitCommit className="h-5 w-5 text-highlight" />
                      <h4 className="text-lg font-semibold text-white">Recent Activity</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {githubData.loading ? (
                        <div className="animate-pulse space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-16 bg-navy rounded-md" />
                          ))}
                        </div>
                      ) : (
                        githubData.activities.map((activity, index) => (
                          <div key={index} className="p-3 bg-navy-dark rounded-md">
                            <div className="flex items-center gap-2 mb-1">
                              {activity.type === 'commit' ? (
                                <GitCommit className="h-4 w-4 text-highlight" />
                              ) : (
                                <Code className="h-4 w-4 text-highlight" />
                              )}
                              <h5 className="font-medium text-white">{activity.repo}</h5>
                            </div>
                            <p className="text-sm text-slate">{activity.message}</p>
                            <p className="text-xs text-slate/80 mt-1">{activity.date}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
