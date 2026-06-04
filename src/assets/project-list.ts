import {
  // project previews
  cinephiliacPreview,
  studdyBuddyPreview,
  reminderNursePreview,
  // tech icons
  reactIcon,
  sequelizeIcon,
  apolloGraphqlIcon,
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
    deployedLink: 'https://reminder-nurse.onrender.com/',
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
    deployedLink: 'https://studdy-buddy-0bth.onrender.com/',
    img: studdyBuddyPreview,
    tech: [sequelizeIcon, expressJSIcon, nodeJSIcon],
  },
  {
    title: 'Cinephiliac',
    githubLink: githubLink + '/cinephiliac-react',
    deployedLink: 'https://nicolasflamel.github.io/cinephiliac-react/',
    img: cinephiliacPreview,
    tech: [reactIcon, typescriptIcon, framerMotionIcon, tailwindIcon],
  },
];

export default projects;
