import projectList from '../assets/projectList';
import { useState } from 'react';

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
      <div className="mySlides" key={topThreeProjects[slide].title}>
        <a
          href={topThreeProjects[slide].githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={topThreeProjects[slide].img.src}
            style={{ width: '100%' }}
          />
        </a>
      </div>
      <a className="prev" onClick={slideButtonHandler}>
        &#10094;
      </a>
      <a className="next" onClick={slideButtonHandler}>
        &#10095;
      </a>
    </div>
  );
}

export default Slideshow;
