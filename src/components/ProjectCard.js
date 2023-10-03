import { useEffect, useState } from 'react';

// returns dimensions in css style with width and ratio provided
// takes width, then a ratio array ex. 550 16:9
const imgDim = (width, [ratioW, ratioH]) => {
  const height = (width / ratioW) * ratioH;
  return { width: `${width}px`, height: `${height}px` };
};

// { title, githubLink, deployedLink, img, tech }
function ProjectCard({ project }) {
  const { title, githubLink, deployedLink, img, tech } = project;
  const [hover, setHover] = useState(false);

  const styles = {
    projectImg: {
      ...imgDim(550, [16, 9]),
    },
  };

  const mouseOverHandler = () => {
    setHover(true);
  };

  const mouseOutHandler = () => {
    setHover(false);
  }; 

  useEffect(() => {}, [hover]);

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
          style={styles.projectImg}
          className={'project-preview'}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        />
        {tech ? (
          <section className={`tech${hover ? ' hidden' : ''}`}>
            <img src={tech[0].src} alt={tech[0].alt} />
          </section>
        ) : null}
      </a>
    </li>
  );
}

export default ProjectCard;
