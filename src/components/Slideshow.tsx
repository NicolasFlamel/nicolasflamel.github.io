import { createRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import projectList from '../assets/projectList';

const topThreeProjects = projectList.slice(0, 3);

function Slideshow() {
  const nodeRef = createRef(null);
  const [slide, setSlide] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const slideButtonHandler = (e) => {
    const buttonValue = e.target.className === 'next' ? 1 : -1;
    const newSlide = slide + buttonValue;

    if (newSlide > topThreeProjects.length - 1) setSlide(0);
    else if (newSlide < 0) setSlide(topThreeProjects.length - 1);
    else setSlide(newSlide);
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides">
        <a
          href={topThreeProjects[slide].githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <TransitionGroup>
            <CSSTransition
              key={topThreeProjects[slide].title}
              timeout={1000}
              classNames="fade"
              nodeRef={nodeRef}
              onEntering={() => setDisableButton(true)}
              onEntered={() => setDisableButton(false)}
            >
              <img
                src={topThreeProjects[slide].img.src}
                alt={topThreeProjects[slide].img.alt}
                style={{ width: '100%' }}
                ref={nodeRef}
              />
            </CSSTransition>
          </TransitionGroup>
        </a>
      </div>
      <button className="prev" onClick={slideButtonHandler}>
        &#10094;
      </button>
      <button
        className="next"
        onClick={slideButtonHandler}
        disabled={disableButton}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;
