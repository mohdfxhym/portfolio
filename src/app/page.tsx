import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ToolsSection from "./components/ToolsSection";
import InteractiveSkillsSection from "./components/InteractiveSkillsSection";
import TimelineSection from "./components/TimelineSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ToolsSection />
      <InteractiveSkillsSection />
      <TimelineSection />
      <TestimonialsSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}