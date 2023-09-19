import cinephiliacPreview from '../assets/images/cinephiliac-preview.jpg';
import studdyBuddyPreview from '../assets/images/studdy-buddy-preview.jpg';
import techiesBlogPreview from '../assets/images/techies-blog-preview.jpg';
import textEditorPWAPreview from '../assets/images/text-editor-pwa.jpg';
import noteTakerPreview from '../assets/images/note-taker-preview.jpg';
import weatherForecasterPreview from '../assets/images/weather-forecaster-preview.jpg';
import reminderNursePreview from '../assets/images/reminder-nurse-preview.jpg';

// template
// {
//     title: '',
//     githubLink: '',
//     deployedLink: '',
//     img: {
//       src: ,
//       alt: ' preview',
//     },
// },

const githubLink = 'https://github.com/NicolasFlamel';

const projects = [
  {
    title: 'Studdy Buddy',
    githubLink: githubLink + '/Studdy-Buddy',
    deployedLink: 'https://studdy-buddy.herokuapp.com/',
    img: {
      src: studdyBuddyPreview,
      alt: 'Studdy Buddy preview',
    },
  },
  {
    title: 'Reminder Nurse',
    githubLink: githubLink + '/Reminder-Nurse',
    deployedLink: 'https://reminder-nurse-3000.herokuapp.com/',
    img: {
      src: reminderNursePreview,
      alt: 'Reminder Nurse preview',
    },
  },
  {
    title: 'Cinephiliac',
    githubLink: githubLink + '/Cinephiliac',
    deployedLink: 'https://nicolasflamel.github.io/Cinephiliac/',
    img: {
      src: cinephiliacPreview,
      alt: 'Cinephiliac preview',
    },
  },
  {
    title: 'The Techies Blog',
    githubLink: githubLink + '/CMS-style-Blog-Site',
    deployedLink: 'https://the-techies-blog.herokuapp.com/',
    img: {
      src: techiesBlogPreview,
      alt: 'Techies Blog preview',
    },
  },
  {
    title: 'Text-Editor - PWA',
    githubLink: githubLink + '/Text-Editor---PWA',
    deployedLink: 'https://text-editor-pwa-3000.herokuapp.com/',
    img: {
      src: textEditorPWAPreview,
      alt: 'Text Editor - PWA preview',
    },
  },
  {
    title: 'Note Taker',
    githubLink: githubLink + '/Note-Taker',
    deployedLink: 'https://note-taker-3010.herokuapp.com/',
    img: {
      src: noteTakerPreview,
      alt: 'Note Taker preview',
    },
  },
  {
    title: 'Weather Forecaster',
    githubLink: githubLink + '/weather-forecaster',
    deployedLink: 'https://nicolasflamel.github.io/weather-forecaster/',
    img: {
      src: weatherForecasterPreview,
      alt: 'Weather Forecaster preview',
    },
  },
];

export default projects;
