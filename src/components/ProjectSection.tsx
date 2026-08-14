import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { VirtualCareButton } from "@/components/VirtualCareButton";

type ProjectSectionProps = {
  project: Project;
};

export function ProjectSection({ project }: ProjectSectionProps) {
  return (
    <section
      id={project.id}
      className="project-section"
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      <div className="project-content">
        <div className="project-header">
          <p className="project-role">{project.role}</p>

          <div className="project-tech">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <div className="project-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                View Live Site
              </a>
            )}
            
            {project.id === "wellness" && <VirtualCareButton />}
          </div>
        </div>

        <ul className="project-cards">
          {project.cards.map((card, index) => (
            <ProjectCard
              key={`${project.id}-${card.image}-${index}`}
              card={card}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}