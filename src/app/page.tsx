"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components to avoid SSR issues
const LoadingScreen = dynamic(() => import("./components/LoadingScreen"), {
  ssr: false
});

const HeroSection = dynamic(() => import("./components/HeroSection"), {
  ssr: false
});

const ProjectsSection = dynamic(() => import("./components/ProjectsSection"), {
  ssr: false
});

const AchievementsSection = dynamic(() => import("./components/AchievementsSection"), {
  ssr: false
});

const ToolsSection = dynamic(() => import("./components/ToolsSection"), {
  ssr: false
});

const InteractiveSkillsSection = dynamic(() => import("./components/InteractiveSkillsSection"), {
  ssr: false
});

const StatsSection = dynamic(() => import("./components/StatsSection"), {
  ssr: false
});

const AboutSection = dynamic(() => import("./components/AboutSection"), {
  ssr: false
});

const ContactSection = dynamic(() => import("./components/ContactSection"), {
  ssr: false
});

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if user has seen loading before (optional - remove if you want loading every time)
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (hasSeenLoading) {
      setShowLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasSeenLoading', 'true');
    setShowLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {showContent && (
        <main className="flex flex-col items-center w-full min-h-screen">
          <HeroSection />
          <StatsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ToolsSection />
          <InteractiveSkillsSection />
          <AboutSection />
          <ContactSection />
        </main>
      )}
    </>
  );
}