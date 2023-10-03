import {
  cinephiliacPreview,
  studdyBuddyPreview,
  techiesBlogPreview,
  textEditorPWAPreview,
  noteTakerPreview,
  weatherForecasterPreview,
  reminderNursePreview,
  handlebarsIcon,
} from '../assets/images';

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
    tech: [{ src: handlebarsIcon, alt: 'Handlebars Icon' }],
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
