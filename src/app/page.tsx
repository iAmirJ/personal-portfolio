import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceEducation from "@/components/ExperienceEducation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <ExperienceEducation />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </main>
  );
}