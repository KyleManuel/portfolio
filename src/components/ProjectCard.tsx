import type { ProjectCard as ProjectCardType } from "@/data/projects";
import { basePath } from "@/lib/basePath";

type ProjectCardProps = {
  card: ProjectCardType;
};

export function ProjectCard({ card }: ProjectCardProps) {
  return (
    <li className="project-card">
      <img
        src={`${basePath}${card.image}`}
        alt={card.heading ?? "Project preview"}
      />

      <div className="project-card-text">
        <h3>{card.heading}</h3>
        {card.text && <p>{card.text}</p>}
      </div>
    </li>
  );
}