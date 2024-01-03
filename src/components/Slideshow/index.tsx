import './styles.css';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Slide from './Slide';
import projectList from '../../assets/projectList';

const topThreeProjects = projectList.slice(0, 3);

function Slideshow() {
  const [slide, setSlide] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const slideButtonHandler = ({ target }: React.MouseEvent<HTMLElement>) => {
    if (!(target instanceof Element)) return;

    const buttonValue = target.className === 'next' ? 1 : -1;
    const newSlide = slide + buttonValue;

    if (newSlide > topThreeProjects.length - 1) setSlide(0);
    else if (newSlide < 0) setSlide(topThreeProjects.length - 1);
    else setSlide(newSlide);
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides">
        <TransitionGroup>
          {topThreeProjects.map((project, index) => {
            return (
              <Slide
                key={project.title}
                project={project}
                index={index}
                slide={slide}
                setDisableButton={setDisableButton}
              />
            );
          })}
        </TransitionGroup>
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
