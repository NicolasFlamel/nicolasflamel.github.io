import { ProjectCard } from '@/components/project-card';
import projects from '@/assets/project-list';
import { TypographyH2 } from '../ui/typography';

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <TypographyH2>Projects</TypographyH2>
      <ol className={'flex flex-col gap-4 py-4'}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ol>
    </section>
  );
};
