import { useState } from 'react';
import socials from '../assets/socialList';

// returns anchor element with a separate isHover state for each
const List = ({ social }) => {
  const [isHover, setIsHover] = useState(false);

  const handleEvent = ({ type }) =>
    type === 'mouseenter' ? setIsHover(true) : setIsHover(false);

  return (
    <a
      href={social.href}
      target="_blank"
      title={social.title}
      rel="noreferrer"
      onMouseEnter={handleEvent}
      onMouseLeave={handleEvent}
    >
      <img {...social.img} />
    </a>
  );
};

function Footer() {
  return (
    <footer className="text-center m-5">
      {socials.map((social) => (
        <List key={social.href} social={social} />
      ))}
    </footer>
  );
}

export default Footer;
