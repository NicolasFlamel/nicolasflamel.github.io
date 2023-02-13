import cinephiliacPreview from '../assets/images/cinephiliac-preview.jpg';
import studdyBuddyPreview from '../assets/images/studdy-buddy-preview.jpg';
import techiesBlogPreview from '../assets/images/techies-blog-preview.jpg';
import textEditorPWAPreview from '../assets/images/text-editor-pwa.jpg';

const projects = [
  {
    title: 'Cinephiliac',
    githubLink: 'https://github.com/NicolasFlamel/Cinephiliac',
    deployedLink: 'https://nicolasflamel.github.io/Cinephiliac/',
    img: {
      src: cinephiliacPreview,
      alt: 'Cinephiliac preview',
    },
  },
  {
    title: 'Studdy Buddy',
    githubLink: 'https://github.com/NicolasFlamel/Studdy-Buddy',
    deployedLink: 'https://studdy-buddy.herokuapp.com/',
    img: {
      src: studdyBuddyPreview,
      alt: 'Studdy Buddy preview',
    },
  },
  {
    title: 'The Techies Blog',
    githubLink: 'https://github.com/NicolasFlamel/CMS-style-Blog-Site',
    deployedLink: 'https://the-techies-blog.herokuapp.com/',
    img: {
      src: techiesBlogPreview,
      alt: 'Techies Blog preview',
    },
  },
  {
    title: 'Text-Editor - PWA',
    githubLink: 'https://github.com/NicolasFlamel/Text-Editor---PWA',
    deployedLink: 'https://text-editor-pwa-3000.herokuapp.com/',
    img: {
      src: textEditorPWAPreview,
      alt: 'Text Editor - PWA preview',
    },
  },
];

export default projects;
