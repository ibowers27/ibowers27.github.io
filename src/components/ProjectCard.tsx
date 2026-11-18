import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card project-card">
      <span className="project-type">{project.type}</span>
      <h3>{project.title}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p>{project.description}</p>
      <p className="project-role">{project.role}</p>
      <ul className="tags" aria-label="Technologies">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="card-links">
        {project.links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
