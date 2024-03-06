import { portrait } from '../assets/images';
import { Slideshow } from '../components';

const About = () => {
  const styles = {
    title: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    portraitImg: {
      cssFloat: 'left',
      marginRight: '10px',
    },
  };

  return (
    <section id="about">
      <section style={styles.title}>
        <h1>About me</h1>
      </section>
      <section className="intro">
        <img
          src={portrait.src}
          alt={portrait.alt}
          style={styles.portraitImg}
          loading="lazy"
        />
        <h3>Intro</h3>
        <p>
          Welcome to my portfolio. My name is Amauri and I love coding! I'm in
          the middle of a big career change going from basically customer
          service to being a coder. I made this website for people to get to
          know a bit about me and see my work as I try navigate this new world
          I'm just starting off in. Please, help yourself and look through my
          portfolio and feel free to contact me if you wish.
        </p>
        <h3>What I'm up to</h3>
        <p>
          I'm currently working for a non-profit organization as their only
          full-stack web developer creating and updating different web
          applications for them.
        </p>
      </section>
      <Slideshow />
    </section>
  );
};

export default About;
