import type { ProjectCard as ProjectCardType } from "@/data/projects";

type ProjectCardProps = {
  card: ProjectCardType;
};

export function ProjectCard({ card }: ProjectCardProps) {
  return (
    <li className="project-card">
      <img src={card.image} alt={card.heading} />

      <div className="project-card-text">
        <h3>{card.heading}</h3>
        {card.text && <p>{card.text}</p>}
      </div>
    </li>
  );
}