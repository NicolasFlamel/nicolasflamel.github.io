import { ProjectCard } from '../components';
// array of projects with keys used in .map()
import projects from '../assets/projectList.js';

function Projects() {
  return (
    // TODO: optimize img loading if possible
    <section className="bg-gray p-5" id="portfolio">
      <h1>My Projects</h1>
      <ol className="d-flex flex-wrap justify-content-around">
        {projects.map(({ title, githubLink, deployedLink, img, tech }) => {
          return (
            <ProjectCard
              key={title}
              project={{ title, githubLink, deployedLink, img, tech }}
            />
          );
        })}
      </ol>
    </section>
  );
}

export default Projects;
