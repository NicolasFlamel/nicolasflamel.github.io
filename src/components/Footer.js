import socials from '../assets/socialList';

// returns anchor element with a separate isHover state for each
const List = ({ social }) => {
  return (
    <a href={social.href} target="_blank" title={social.title} rel="noreferrer">
      <img src={social.img.src} alt={social.img.alt} />
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
