import { github, linkedin, stackOverflow } from './images';

// template
// {
//     title: '',
//     href: '',
//     img: { ...obj }
// },

const socials = [
  {
    title: 'GitHub',
    href: 'https://github.com/NicolasFlamel/',
    img: { ...github },
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amauri-rodriguez-929a79265',
    img: { ...linkedin },
  },
  {
    title: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/21207470/nicolasflamel',
    img: { ...stackOverflow },
  },
];

export default socials;
