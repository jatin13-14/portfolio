import { Hero } from "@/components/home/Hero";
import { PersonalStatement } from "@/components/home/PersonalStatement";
import { HomeStory } from "@/components/home/HomeStory";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { AIWorkflowSection } from "@/components/home/AIWorkflowSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ResumeSection } from "@/components/home/ResumeSection";
import { ContactSection } from "@/components/home/ContactSection";
import { isResumeAvailable } from "@/lib/resume";

export default function HomePage() {
  const resumeAvailable = isResumeAvailable();

  return (
    <>
      <Hero />
      <PersonalStatement />
      <HomeStory />
      <FeaturedWork />
      <ExperienceTimeline />
      <AIWorkflowSection />
      <SkillsSection />
      <PrinciplesSection />
      <AboutSection />
      <EducationSection />
      {resumeAvailable && <ResumeSection />}
      <ContactSection />
    </>
  );
}
