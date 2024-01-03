import { Dispatch, SetStateAction, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Project } from '../../types';

interface SlideProps {
  project: Project;
  index: number;
  slide: number;
  setDisableButton: Dispatch<SetStateAction<boolean>>;
}

const Slide = ({ project, index, slide, setDisableButton }: SlideProps) => {
  const ref = useRef(null);

  return (
    <CSSTransition
      key={project.title}
      timeout={1000}
      classNames="slide"
      nodeRef={ref as React.RefObject<HTMLDivElement>}
      onEntering={() => setDisableButton(true)}
      onEntered={() => setDisableButton(false)}
      in={index === slide}
    >
      <a
        ref={ref}
        className="slide"
        href={project.githubLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={project.img.src}
          alt={project.img.alt}
          style={{ width: '100%' }}
          loading="lazy"
        />
      </a>
    </CSSTransition>
  );
};

export default Slide;
