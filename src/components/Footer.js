import { useState } from 'react';
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import stackOverflow from '../assets/images/stack-overflow.svg';

function Footer() {
  const [isHover, setIsHover] = useState(false);
  const styles = {
    socialLink: {
      width: '60px',
      height: '70px',
      opacity: isHover ? 1 : 0.5,
    },
  };

  const handleEvent = ({ type }) =>
    type === 'mouseenter' ? setIsHover(true) : setIsHover(false);

  return (
    <section className="text-center m-5">
      <a
        href="https://github.com/NicolasFlamel/"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleEvent}
        onMouseLeave={handleEvent}
      >
        <img src={github} alt="github profile link" style={styles.socialLink} />
      </a>
      <a
        href="https://www.linkedin.com/in/amauri-rodriguez-929a79265/"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleEvent}
        onMouseLeave={handleEvent}
      >
        <img
          src={linkedin}
          alt="linkedin profile link"
          style={styles.socialLink}
        />
      </a>
      <a
        href="https://stackoverflow.com/users/21207470/nicolasflamel"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleEvent}
        onMouseLeave={handleEvent}
      >
        <img
          src={stackOverflow}
          alt="stack overflow profile link"
          style={styles.socialLink}
        />
      </a>
    </section>
  );
}

export default Footer;
