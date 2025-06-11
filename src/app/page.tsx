"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ToolsSection from "./components/ToolsSection";
import InteractiveSkillsSection from "./components/InteractiveSkillsSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
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