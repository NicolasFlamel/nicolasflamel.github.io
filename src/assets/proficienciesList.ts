import * as Icons from './images';

type ProficiencyObject = {
  skill: string;
  icon: { src: any; alt: string };
};

export const frontendProficiencies: ProficiencyObject[] = [
  { skill: 'HTML', icon: Icons.htmlIcon },
  { skill: 'CSS', icon: Icons.cssIcon },
  { skill: 'JavaScript', icon: Icons.jsIcon },
  { skill: 'React', icon: Icons.reactIcon },
  { skill: 'TypeScript', icon: Icons.typescriptIcon },
  { skill: 'jQuery', icon: Icons.jqueryIcon },
  { skill: 'Bootstrap', icon: Icons.bootstrapIcon },
  { skill: 'Handlebars', icon: Icons.handlebarsIcon },
  { skill: 'Responsive Design', icon: Icons.responsiveIcon },
  {
    skill: 'Local Storage, Session Storage, IndexedDB',
    icon: Icons.localStorageIcon,
  },
  { skill: 'Progressive Web App', icon: Icons.pwaIcon },
];

export const backendProficiencies = [
  { skill: 'REST APIs', icon: Icons.apiIcon },
  { skill: 'Node.js', icon: Icons.nodeJSIcon },
  { skill: 'Express', icon: Icons.expressJSIcon },
  { skill: 'MySQL, Sequelize', icon: Icons.sequelizeIcon },
  { skill: 'MongoDB, Mongoose', icon: Icons.mongoDBIcon },
  { skill: 'Apollo GraphQL', icon: Icons.apolloGraphqlIcon },
];
