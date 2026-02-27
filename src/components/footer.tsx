import socials from '@/assets/social-list';
import { Button } from './ui/button';

interface Social {
  title: string;
  href: string;
  img: {
    src: string;
    alt: string;
  };
}

export const Footer = () => {
  return (
    <footer className={'flex gap-4 justify-center m-4'}>
      {socials.map((social) => (
        <List key={social.href} {...social} />
      ))}
    </footer>
  );
};

// returns anchor element with a separate isHover state for each
const List = ({ href, title, img }: Social) => {
  return (
    <Button asChild size={'icon-lg'}>
      <a href={href} target="_blank" title={title} rel="noreferrer">
        <img src={img.src} alt={img.alt} />
      </a>
    </Button>
  );
};
