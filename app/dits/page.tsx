"use client";

import { useSectionObserver } from "@/hooks/use-section-observer";
import { SectionID } from "@/lib/constant";
import { useCallback, useState } from "react";
import Footer from "./_components/footer";
import Navigation from "./_components/navigation";
import SectionConnect from "./_components/section-connect";
import SectionIntro from "./_components/section-intro";
import SectionProjects from "./_components/section-projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionID>("intro");

  const handleIntersect = useCallback(
    (entry: IntersectionObserverEntry) => {
      entry.target.classList.add("animate-fade-in-up");
      setActiveSection(entry.target.id as SectionID);
    },
    [] // stable — gak perlu dependency apapun
  );

  const sectionsRef = useSectionObserver(handleIntersect);

  // Pakai callback ref biar gak push duplikat tiap re-render
  const registerSection = useCallback((el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  }, [sectionsRef]);

  return (
    <div className="min-h-screen relative">
      <Navigation active={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionIntro onRef={registerSection} />
        <SectionProjects onRef={registerSection} />
        <SectionConnect onRef={registerSection} />
      </main>

      <Footer />

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </div>
  );
}
