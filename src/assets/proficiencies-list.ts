import * as Icons from './images';

export type ProficiencyObject = {
  skill: string;
  icon: { src: string; alt: string };
};

export const frontendProficiencies: ProficiencyObject[] = [
  { skill: 'JavaScript', icon: Icons.jsIcon },
  { skill: 'TypeScript', icon: Icons.typescriptIcon },
  { skill: 'React', icon: Icons.reactIcon },
  { skill: 'NextJs', icon: Icons.nextjsIcon },
  { skill: 'Tailwind', icon: Icons.tailwindIcon },
  { skill: 'HTML', icon: Icons.htmlIcon },
  { skill: 'CSS', icon: Icons.cssIcon },
  { skill: 'Framer Motion', icon: Icons.framerMotionIcon },
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
  { skill: 'AWS Lambda', icon: Icons.lambdaIcon },
  { skill: 'NextJs', icon: Icons.nextjsIcon },
  { skill: 'Express', icon: Icons.expressJSIcon },
  { skill: 'MySQL, Sequelize', icon: Icons.sequelizeIcon },
  { skill: 'MongoDB, Mongoose', icon: Icons.mongoDBIcon },
  { skill: 'Apollo GraphQL', icon: Icons.apolloGraphqlIcon },
];
