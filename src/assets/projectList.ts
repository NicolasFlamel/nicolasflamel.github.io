import {
  // project previews
  cinephiliacPreview,
  studdyBuddyPreview,
  techiesBlogPreview,
  textEditorPWAPreview,
  noteTakerPreview,
  weatherForecasterPreview,
  reminderNursePreview,
  // tech icons
  handlebarsIcon,
  reactIcon,
  sequelizeIcon,
  apolloGraphqlIcon,
  htmlIcon,
  pwaIcon,
  mongoDBIcon,
  expressJSIcon,
  framerMotionIcon,
  nodeJSIcon,
  tailwindIcon,
  typescriptIcon,
} from './images';

// template
// {
//     title: '',
//     githubLink: '',
//     deployedLink: '',
//     img: obj,
//     },
//     tech: [obj, obj],
// },

const githubLink = 'https://github.com/NicolasFlamel';

const projects = [
  {
    title: 'Reminder Nurse',
    githubLink: githubLink + '/Reminder-Nurse',
    deployedLink: 'https://reminder-nurse-3000.herokuapp.com/',
    img: reminderNursePreview,
    tech: [
      reactIcon,
      apolloGraphqlIcon,
      mongoDBIcon,
      expressJSIcon,
      nodeJSIcon,
    ],
  },
  {
    title: 'Studdy Buddy',
    githubLink: githubLink + '/Studdy-Buddy',
    deployedLink: 'https://studdy-buddy.herokuapp.com/',
    img: studdyBuddyPreview,
    tech: [handlebarsIcon, sequelizeIcon, expressJSIcon, nodeJSIcon],
  },
  {
    title: 'Cinephiliac',
    githubLink: githubLink + '/cinephiliac-react',
    deployedLink: 'https://nicolasflamel.github.io/cinephiliac-react/',
    img: cinephiliacPreview,
    tech: [reactIcon, typescriptIcon, framerMotionIcon, tailwindIcon],
  },
  {
    title: 'Weather Forecaster',
    githubLink: githubLink + '/weather-forecaster-react',
    deployedLink: 'https://nicolasflamel.github.io/weather-forecaster-react/',
    img: weatherForecasterPreview,
    tech: [reactIcon, typescriptIcon],
  },
  {
    title: 'The Techies Blog',
    githubLink: githubLink + '/CMS-style-Blog-Site',
    deployedLink: 'https://the-techies-blog.herokuapp.com/',
    img: techiesBlogPreview,
    tech: [handlebarsIcon, sequelizeIcon, expressJSIcon, nodeJSIcon],
  },
  {
    title: 'Text-Editor - PWA',
    githubLink: githubLink + '/Text-Editor---PWA',
    deployedLink: 'https://text-editor-pwa-3000.herokuapp.com/',
    img: textEditorPWAPreview,
    tech: [htmlIcon, pwaIcon],
  },
  {
    title: 'Note Taker',
    githubLink: githubLink + '/Note-Taker',
    deployedLink: 'https://note-taker-3010.herokuapp.com/',
    img: noteTakerPreview,
    tech: [htmlIcon],
  },
];

export default projects;
