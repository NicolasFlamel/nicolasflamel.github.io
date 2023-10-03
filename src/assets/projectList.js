import {
  cinephiliacPreview,
  studdyBuddyPreview,
  techiesBlogPreview,
  textEditorPWAPreview,
  noteTakerPreview,
  weatherForecasterPreview,
  reminderNursePreview,
  handlebarsIcon,
  reactIcon,
  sequelizeIcon,
  apolloGraphqlIcon,
  htmlIcon,
  pwaIcon,
  mongoDBIcon,
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
    title: 'Reminder Nurse',
    githubLink: githubLink + '/Reminder-Nurse',
    deployedLink: 'https://reminder-nurse-3000.herokuapp.com/',
    img: {
      src: reminderNursePreview,
      alt: 'Reminder Nurse preview',
    },
    tech: [
      { src: reactIcon, alt: 'React Icon' },
      { src: apolloGraphqlIcon, alt: 'Apollo GraphQL Icon' },
      { src: mongoDBIcon, alt: 'MongoDB Icon' },
    ],
  },
  {
    title: 'Studdy Buddy',
    githubLink: githubLink + '/Studdy-Buddy',
    deployedLink: 'https://studdy-buddy.herokuapp.com/',
    img: {
      src: studdyBuddyPreview,
      alt: 'Studdy Buddy preview',
    },
    tech: [
      { src: handlebarsIcon, alt: 'Handlebars Icon' },
      { src: sequelizeIcon, alt: 'Sequelize Icon' },
    ],
  },
  {
    title: 'Cinephiliac',
    githubLink: githubLink + '/Cinephiliac',
    deployedLink: 'https://nicolasflamel.github.io/Cinephiliac/',
    img: {
      src: cinephiliacPreview,
      alt: 'Cinephiliac preview',
    },
    tech: [{ src: htmlIcon, alt: 'HTML Icon' }],
  },
  {
    title: 'The Techies Blog',
    githubLink: githubLink + '/CMS-style-Blog-Site',
    deployedLink: 'https://the-techies-blog.herokuapp.com/',
    img: {
      src: techiesBlogPreview,
      alt: 'Techies Blog preview',
    },
    tech: [
      { src: handlebarsIcon, alt: 'Handlebars Icon' },
      { src: sequelizeIcon, alt: 'Sequelize Icon' },
    ],
  },
  {
    title: 'Text-Editor - PWA',
    githubLink: githubLink + '/Text-Editor---PWA',
    deployedLink: 'https://text-editor-pwa-3000.herokuapp.com/',
    img: {
      src: textEditorPWAPreview,
      alt: 'Text Editor - PWA preview',
    },
    tech: [
      { src: htmlIcon, alt: 'HTML Icon' },
      { src: pwaIcon, alt: 'Progressive Web Application Icon' },
    ],
  },
  {
    title: 'Note Taker',
    githubLink: githubLink + '/Note-Taker',
    deployedLink: 'https://note-taker-3010.herokuapp.com/',
    img: {
      src: noteTakerPreview,
      alt: 'Note Taker preview',
    },
    tech: [{ src: htmlIcon, alt: 'HTML Icon' }],
  },
  {
    title: 'Weather Forecaster',
    githubLink: githubLink + '/weather-forecaster',
    deployedLink: 'https://nicolasflamel.github.io/weather-forecaster/',
    img: {
      src: weatherForecasterPreview,
      alt: 'Weather Forecaster preview',
    },
    tech: [{ src: htmlIcon, alt: 'HTML Icon' }],
  },
];

export default projects;
