import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Blogs } from "@/components/Blogs";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Removed ThemeToggle */}
      <Hero />
      <Certifications />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Blogs />
      <Footer />
    </main>
  );
}
