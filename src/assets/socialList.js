import { github, linkedin, stackOverflow } from './images';

// template
// {
//     title: '',
//     href: '',
//     img: {
//         src: ,
//         alt: ' link'
//     }
// },

const socials = [
  {
    title: 'GitHub',
    href: 'https://github.com/NicolasFlamel/',
    img: {
      src: github,
      alt: 'github profile link',
    },
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amauri-rodriguez-929a79265',
    img: {
      src: linkedin,
      alt: 'linkedin profile link',
    },
  },
  {
    title: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/21207470/nicolasflamel',
    img: {
      src: stackOverflow,
      alt: 'stack overflow profile link',
    },
  },
];

export default socials;
