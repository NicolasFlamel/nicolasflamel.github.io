import { portrait } from '../assets/images';
import { Slideshow } from '../components';

function About() {
  const styles = {
    title: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    portraitImg: {
      float: 'left',
      marginRight: '10px',
    },
  };

  return (
    <section className="bg-gray p-5" id="about">
      <section style={styles.title}>
        <h1>About me</h1>
      </section>
      <section>
        <img {...portrait} style={styles.portraitImg} />
        <h3>Intro</h3>
        <p>
          Welcome to my portfolio. My name is Amauri and I love coding! I'm in
          the middle of a big career change going from basically customer
          service to being a coder. I made this website for people to get to
          know a bit about me and see my work as I try navigate this new world
          I'm just starting off in. Please, help yourself and look through my
          portfolio and feel free to contact me if you wish.
        </p>
        <section style={{ display: 'flex' }}>
          <h3>Backstory</h3>
          <i>If you're interested</i>
        </section>
        <p>
          Back in highschool a friend of mine in this field taught very small
          amount of coding and loved it but unfortunately due to circumstances
          out of my control I couldn't finish college for a degree in computer
          science. So went on to work at a hotel for 7 years. Then after having
          enough of working a job I had no passion for I decided I had enough so
          I moved to california,{' '}
          <i>for other reasons that are not important to the story</i>, and
          started planning to change. Through some luck a friend told me about a
          coding boot camp given by UC Davis so I did some research and it
          seemed like a perfect fit for where I was and wanted. After a few
          months that brings us to the now where I am almost done with the boot
          camp and am looking for potential employers. If you have an interest
          in talking about hiring me feel free to send me a message through the
          contact me page.
        </p>
      </section>
      <Slideshow />
    </section>
  );
}

export default About;
