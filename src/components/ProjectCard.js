import { useState } from 'react';

// TODO: make cards screen responsive

// { title, githubLink, deployedLink, img, tech }
function ProjectCard({ project }) {
  const { title, githubLink, deployedLink, img, tech } = project;
  const [hover, setHover] = useState(false);

  const mouseOverHandler = () => {
    setHover(true);
  };

  const mouseOutHandler = () => {
    setHover(false);
  };

  return (
    <li className="application listStyleNone">
      <h2>
        {title} -{' '}
        <a href={githubLink} target="_blank" rel="noreferrer">
          GitHub Link
        </a>
      </h2>
      <a href={deployedLink} target="_blank" rel="noreferrer">
        <img
          src={img.src}
          alt={img.alt}
          className={'project-preview'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        />
        {tech ? (
          <section className={`tech${hover ? '' : ' hidden'}`}>
            {tech.map((tech) => (
              <img
                key={tech.alt}
                src={tech.src}
                alt={tech.alt}
                title={tech.alt}
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
              />
            ))}
          </section>
        ) : null}
      </a>
    </li>
  );
}

export default ProjectCard;
