import { useRef, useState } from 'react';
import type { Project } from '@/types';
import { CSSTransition } from 'react-transition-group';
import { cn } from '@/lib/utils';

// TODO: make cards screen responsive.
// TODO: optimize img loading if possible
export const ProjectCard = ({
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
    <li className="text-center relative list-none flex flex-col items-center">
      <h3>
        {`${title} - `}
        <a href={githubLink} target="_blank" rel="noreferrer">
          GitHub Link
        </a>
      </h3>
      <a
        href={deployedLink}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img
          width={'548px'}
          height={'264px'}
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
          <section
            className={cn(
              'tech flex justify-center gap-4',
              'absolute left-1/2 bottom-0 -translate-x-1/2',
            )}
            ref={nodeRef}
          >
            {tech.map((tech) => (
              <img
                key={tech.alt}
                src={tech.src}
                alt={tech.alt}
                title={tech.alt}
                width={'50px'}
                height={'50px'}
                loading="lazy"
              />
            ))}
          </section>
        </CSSTransition>
      </a>
    </li>
  );
};
