import { TypographyH2 } from '../ui/typography';

export const AboutSection = () => {
  return (
    <section id="about" className={'flex flex-col gap-4'}>
      <TypographyH2>About me</TypographyH2>
      <section className="flex flex-col gap-4">
        <p>
          Hi, I’m Amauri, an aspiring software developer transitioning from
          customer service into technology. I’m focused on building practical
          development skills through hands-on projects and continuous learning.
        </p>
        <p>
          This portfolio highlights my work and technical growth as I work
          toward starting my career in software development. Please feel free to
          explore my projects and contact me if you’d like to connect.
        </p>
      </section>
    </section>
  );
};
