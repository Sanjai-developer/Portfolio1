
import { Suspense, useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import GitHubSection from '@/components/GitHubSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/3D/InteractiveBackground';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark">
        <div className="text-center space-y-4">
          <Loader2 className="h-10 w-10 text-highlight animate-spin mx-auto" />
          <h2 className="text-2xl font-mono text-white">
            Loading Portfolio<span className="animate-pulse">...</span>
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <InteractiveBackground />
      </Suspense>
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
