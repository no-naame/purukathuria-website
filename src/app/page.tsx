import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BackgroundBlobs } from "@/components/layout/BackgroundBlobs";
import { HeroSection } from "@/components/sections/HeroSection";
import { WritingsSection } from "@/components/sections/WritingsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LexAISection } from "@/components/sections/LexAISection";
import { ConnectSection } from "@/components/sections/ConnectSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <BackgroundBlobs />
      <Navigation />

      {/* Hero has its own full-width layout */}
      <HeroSection />

      {/* Other sections with container */}
      <main className="relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <WritingsSection />
        </div>
        <LexAISection />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <AboutSection />
        </div>
        <ConnectSection />
      </main>

      <Footer />
    </div>
  );
}
