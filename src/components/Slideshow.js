import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import projectList from '../assets/projectList';

const topThreeProjects = projectList.slice(0, 3);

function Slideshow() {
  const [slide, setSlide] = useState(0);

  const slideButtonHandler = (e) => {
    const buttonValue = e.target.className === 'next' ? 1 : -1;

    if (slide + buttonValue > topThreeProjects.length - 1) setSlide(0);
    else if (slide + buttonValue < 0) setSlide(topThreeProjects.length - 1);
    else setSlide(slide + buttonValue);
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
            >
              <img
                src={topThreeProjects[slide].img.src}
                alt={topThreeProjects[slide].img.alt}
                style={{ width: '100%' }}
              />
            </CSSTransition>
          </TransitionGroup>
        </a>
      </div>
      <button className="prev" onClick={slideButtonHandler}>
        &#10094;
      </button>
      <button className="next" onClick={slideButtonHandler}>
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;
