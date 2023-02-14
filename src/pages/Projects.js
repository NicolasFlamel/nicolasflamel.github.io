// array of projects with keys used in .map()
import projects from '../assets/projectList.js';

// returns dimensions in css style with width and ratio provided
// takes width, then a ratio array ex. 550 16:9
const imgDim = (width, [ratioW, ratioH]) => {
  const height = (width / ratioW) * ratioH;
  return { width: `${width}px`, height: `${height}px` };
};

function Projects() {
  const styles = {
    projectImg: {
      ...imgDim(550, [16, 9]),
    },
  };

  return (
    // TODO: optimize img loading
    <section className="bg-gray p-5" id="portfolio">
      <h1>My Projects</h1>
      <ol className="d-flex flex-wrap justify-content-around">
        {projects.map(({ title, githubLink, deployedLink, img }) => {
          return (
            <li key={title} className="application listStyleNone">
              <h2>
                {title} -{' '}
                <a href={githubLink} target="_blank" rel="noreferrer">
                  GitHub Link
                </a>
              </h2>
              <a href={deployedLink} target="_blank" rel="noreferrer">
                <img src={img.src} alt={img.alt} style={styles.projectImg} />
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Projects;
