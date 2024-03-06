import './styles.css';
import socials from '../../assets/socialList';

interface Social {
  title: string;
  href: string;
  img: {
    src: string;
    alt: string;
  };
}

// returns anchor element with a separate isHover state for each
const List = ({ href, title, img }: Social) => {
  return (
    <a href={href} target="_blank" title={title} rel="noreferrer">
      <img src={img.src} alt={img.alt} />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="text-center m-5">
      {socials.map((social) => (
        <List key={social.href} {...social} />
      ))}
    </footer>
  );
};

export default Footer;
