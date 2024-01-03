import { ProjectCard } from '../components';
// array of projects with keys used in .map()
import projects from '../assets/projectList';

function Projects() {
  return (
    // TODO: optimize img loading if possible
    <section className="bg-gray p-5" id="portfolio">
      <ol className="d-flex flex-wrap justify-content-around">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ol>
    </section>
  );
}

export default Projects;
