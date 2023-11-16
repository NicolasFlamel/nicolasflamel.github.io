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
//     img: {...obj},
//     },
//     tech: [{...obj}],
// },

const githubLink = 'https://github.com/NicolasFlamel';

const projects = [
  {
    title: 'Reminder Nurse',
    githubLink: githubLink + '/Reminder-Nurse',
    deployedLink: 'https://reminder-nurse-3000.herokuapp.com/',
    img: { ...reminderNursePreview },
    tech: [{ ...reactIcon }, { ...apolloGraphqlIcon }, { ...mongoDBIcon }],
  },
  {
    title: 'Studdy Buddy',
    githubLink: githubLink + '/Studdy-Buddy',
    deployedLink: 'https://studdy-buddy.herokuapp.com/',
    img: { ...studdyBuddyPreview },
    tech: [{ ...handlebarsIcon }, { ...sequelizeIcon }],
  },
  {
    title: 'Cinephiliac',
    githubLink: githubLink + '/Cinephiliac',
    deployedLink: 'https://nicolasflamel.github.io/Cinephiliac/',
    img: { ...cinephiliacPreview },
    tech: [{ ...htmlIcon }],
  },
  {
    title: 'The Techies Blog',
    githubLink: githubLink + '/CMS-style-Blog-Site',
    deployedLink: 'https://the-techies-blog.herokuapp.com/',
    img: { ...techiesBlogPreview },
    tech: [{ ...handlebarsIcon }, { ...sequelizeIcon }],
  },
  {
    title: 'Text-Editor - PWA',
    githubLink: githubLink + '/Text-Editor---PWA',
    deployedLink: 'https://text-editor-pwa-3000.herokuapp.com/',
    img: { ...textEditorPWAPreview },
    tech: [{ ...htmlIcon }, { ...pwaIcon }],
  },
  {
    title: 'Note Taker',
    githubLink: githubLink + '/Note-Taker',
    deployedLink: 'https://note-taker-3010.herokuapp.com/',
    img: { ...noteTakerPreview },
    tech: [{ ...htmlIcon }],
  },
  {
    title: 'Weather Forecaster',
    githubLink: githubLink + '/weather-forecaster',
    deployedLink: 'https://nicolasflamel.github.io/weather-forecaster/',
    img: { ...weatherForecasterPreview },
    tech: [{ ...htmlIcon }],
  },
];

export default projects;
