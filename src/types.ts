// high reused types go in here
export interface Project {
  title: string;
  githubLink: string;
  deployedLink: string;
  img: {
    src: string;
    alt: string;
  };
  tech: {
    src: string;
    alt: string;
  }[];
}
