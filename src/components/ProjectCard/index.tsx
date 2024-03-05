import './styles.css';
import { useRef, useState } from 'react';
import { Project } from '../../types';
import { CSSTransition } from 'react-transition-group';

// TODO: make cards screen responsive
const ProjectCard = ({
  title,
  githubLink,
  deployedLink,
  img,
  tech,
}: Project) => {
  const [hover, setHover] = useState(false);
  const nodeRef = useRef(null);

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
        <img
          src={img.src}
          alt={img.alt}
          className={'project-preview'}
          loading="lazy"
        />
        <CSSTransition
          classNames="slide"
          nodeRef={nodeRef}
          in={hover}
          timeout={500}
          unmountOnExit
        >
          <section className="tech" ref={nodeRef}>
            {tech.map((tech) => (
              <img
                key={tech.alt}
                src={tech.src}
                alt={tech.alt}
                title={tech.alt}
                loading="lazy"
              />
            ))}
          </section>
        </CSSTransition>
      </a>
    </li>
  );
};

export default ProjectCard;
