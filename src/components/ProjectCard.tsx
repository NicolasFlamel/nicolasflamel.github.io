import { useState } from 'react';

// TODO: make cards screen responsive

// { title, githubLink, deployedLink, img, tech }
function ProjectCard({ project }) {
  const { title, githubLink, deployedLink, img, tech } = project;
  const [hover, setHover] = useState(false);

  const mouseEnterHandler = () => setHover(true);

  const mouseLeaveHandler = () => setHover(false);

  return (
    <li className="application listStyleNone">
      <h2>
        {title} -{' '}
        <a href={githubLink} target="_blank" rel="noreferrer">
          GitHub Link
        </a>
      </h2>
      <a
        href={deployedLink}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img src={img.src} alt={img.alt} className={'project-preview'} />
        {tech ? (
          <section className={`tech${hover ? '' : ' hidden'}`}>
            {tech.map((tech) => (
              <img
                key={tech.alt}
                src={tech.src}
                alt={tech.alt}
                title={tech.alt}
              />
            ))}
          </section>
        ) : null}
      </a>
    </li>
  );
}

export default ProjectCard;
