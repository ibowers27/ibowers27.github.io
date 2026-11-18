import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
