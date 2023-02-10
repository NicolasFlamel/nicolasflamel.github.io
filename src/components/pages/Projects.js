import cinephiliacPreview from '../../assets/images/cinephiliac-preview.jpg';
import studdyBuddyPreview from '../../assets/images/studdy-buddy-preview.jpg';
import techiesBlogPreview from '../../assets/images/techies-blog-preview.jpg';
import textEditorPWA from '../../assets/images/text-editor-pwa.jpg'

const imgDim = (width, [ratioW, ratioH]) => {
  const height = (width / ratioW) * ratioH;
  return { width: `${width}px`, height: `${height}px` };
};

function Projects() {
  const styles = {
    projectImg: {
      ...imgDim(550, [16, 9]),
    },
  };

  return (
    <section className="bg-gray p-5" id="portfolio">
      <h1>My Projects</h1>
      <ol className="d-flex flex-wrap justify-content-around">
        {/* TODO: add github links */}
        
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

        <li className="application">
          <a href="https://the-techies-blog.herokuapp.com/">
            <h2>The Techies Blog</h2>
            <img
              src={techiesBlogPreview}
              alt="Studdy Buddy preview"
              style={styles.projectImg}
            />
          </a>
        </li>

        <li className="application">
          <a href="https://text-editor-pwa-3000.herokuapp.com/">
            <h2>The Techies Blog</h2>
            <img
              src={textEditorPWA}
              alt="Text Editor - PWA"
              style={styles.projectImg}
            />
          </a>
        </li>
        {/* added weather forecast project */}
      </ol>
    </section>
  );
}

export default Projects;
