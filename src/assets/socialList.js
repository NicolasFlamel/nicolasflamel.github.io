import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import stackOverflow from '../assets/images/stack-overflow.svg';

// template
// {
//     href: '',
//     img: {
//         src: ,
//         alt: ' link'
//     }
// },

const socials = [
  {
    href: 'https://github.com/NicolasFlamel/',
    img: {
      src: github,
      alt: 'github profile link',
    },
  },
  {
    href: 'https://www.linkedin.com/in/amauri-rodriguez-929a79265',
    img: {
      src: linkedin,
      alt: 'linkedin profile link',
    },
  },
  {
    href: 'https://stackoverflow.com/users/21207470/nicolasflamel',
    img: {
      src: stackOverflow,
      alt: 'stack overflow profile link',
    },
  },
];

export default socials;
