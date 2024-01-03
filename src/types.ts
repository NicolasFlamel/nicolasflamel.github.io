// high reused types go in here
export interface Project {
  title: string;
  githubLink: string;
  deployedLink: string;
  img: {
    src: any;
    alt: string;
  };
  tech: {
    src: any;
    alt: string;
  }[];
}
