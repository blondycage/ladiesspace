import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CommunityCTA } from "@/components/sections/CommunityCTA";
import { CommunityStory } from "@/components/sections/CommunityStory";
import { EcosystemPillars } from "@/components/sections/EcosystemPillars";
import { Experiences } from "@/components/sections/Experiences";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Manifesto } from "@/components/sections/Manifesto";
import { Opportunities } from "@/components/sections/Opportunities";
import { Partnership } from "@/components/sections/Partnership";
import { PageAnimations } from "@/components/ui/PageAnimations";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <PageAnimations />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <EcosystemPillars />
        <Experiences />
        <Opportunities />
        <Impact />
        <CommunityStory />
        <Partnership />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
