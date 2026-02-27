import * as Icons from './images';

export type ProficiencyObject = {
  skill: string;
  icon: { src: string; alt: string };
};

export const frontendProficiencies: ProficiencyObject[] = [
  { skill: 'HTML', icon: Icons.htmlIcon },
  { skill: 'CSS', icon: Icons.cssIcon },
  { skill: 'JavaScript', icon: Icons.jsIcon },
  { skill: 'React', icon: Icons.reactIcon },
  { skill: 'TypeScript', icon: Icons.typescriptIcon },
  { skill: 'jQuery', icon: Icons.jqueryIcon },
  { skill: 'Bootstrap', icon: Icons.bootstrapIcon },
  { skill: 'Tailwind', icon: Icons.tailwindIcon },
  { skill: 'Framer Motion', icon: Icons.framerMotionIcon },
  { skill: 'Handlebars', icon: Icons.handlebarsIcon },
  { skill: 'Responsive Design', icon: Icons.responsiveIcon },
  { skill: 'Progressive Web App', icon: Icons.pwaIcon },
  {
    skill: 'Local Storage & IndexedDB',
    icon: Icons.localStorageIcon,
  },
];

export const backendProficiencies = [
  { skill: 'REST APIs', icon: Icons.apiIcon },
  { skill: 'Node.js', icon: Icons.nodeJSIcon },
  { skill: 'Express', icon: Icons.expressJSIcon },
  { skill: 'MySQL, Sequelize', icon: Icons.sequelizeIcon },
  { skill: 'MongoDB, Mongoose', icon: Icons.mongoDBIcon },
  { skill: 'Apollo GraphQL', icon: Icons.apolloGraphqlIcon },
];
