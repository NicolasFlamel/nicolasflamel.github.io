import cinephiliacPreview from '../../assets/images/cinephiliac-preview.jpg';
import studdyBuddyPreview from '../../assets/images/studdy-buddy-preview.jpg';

class ImgDim {
  constructor(width, ratio) {
    this.width = width;
    this.ratio = ratio;
    this.height = width / ratio;
  }

  getDimensions() {
    const dimensions = { width: `${this.width}px`, height: `${this.height}px` };
    return dimensions;
  }
}

function Projects() {
  const img = new ImgDim(550, 16 / 9);
  const styles = {
    projectImg: {
      ...img.getDimensions(),
    },
  };

  return (
    <section className="bg-gray p-5" id="portfolio">
      <h1>My Projects</h1>
      <ol className="d-flex flex-wrap">
        <li className="application">
          <a href="https://nicolasflamel.github.io/Cinephiliac/">
            <h2>Cinephiliac</h2>
            <img
              src={cinephiliacPreview}
              alt="Cinephiliac preview"
              style={styles.projectImg}
            />
          </a>
        </li>
        <li className="application">
          <a href="https://studdy-buddy.herokuapp.com/">
            <h2>Studdy Buddy</h2>
            <img
              src={studdyBuddyPreview}
              alt="Studdy Buddy preview"
              style={styles.projectImg}
            />
          </a>
        </li>
      </ol>
    </section>
  );
}

export default Projects;
