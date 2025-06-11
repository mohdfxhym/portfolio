import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ToolsSection from "./components/ToolsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <AchievementsSection />
      <ToolsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
