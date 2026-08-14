import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section id="projects">
        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}
      </section>
      <ContactSection />
    </main>
  );
}