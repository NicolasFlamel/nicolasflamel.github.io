import {
  frontendProficiencies,
  backendProficiencies,
  type ProficiencyObject,
} from '@/assets/proficiencies-list';
import { TypographyH2, TypographyH3 } from '../ui/typography';
import { Button } from '../ui/button';

export const ResumeSection = () => {
  const resumeLink =
    'https://drive.google.com/file/d/1ny84bhM9ylXxOtOHLhSOuXJaOA99_V4s/view?usp=sharing';

  return (
    <section id="resume" className={'flex flex-col gap-4'}>
      <TypographyH2>Resume</TypographyH2>
      <Button asChild variant={'link'} className={'inline'}>
        <a href={resumeLink} rel="noreferrer" target="_blank">
          Download my resume from google drive
        </a>
      </Button>
      <article className={'flex flex-col gap-4'}>
        <TypographyH3>Front-end Proficiencies</TypographyH3>
        <ProficiencyList proficiencyList={frontendProficiencies} />
      </article>
      <article className={'flex flex-col gap-4'}>
        <TypographyH3>Back-end Proficiencies</TypographyH3>
        <ProficiencyList proficiencyList={backendProficiencies} />
      </article>
    </section>
  );
};

type ProficiencyListProps = { proficiencyList: ProficiencyObject[] };
const ProficiencyList = ({ proficiencyList }: ProficiencyListProps) => {
  return (
    <ol className={'flex flex-wrap gap-4 justify-center'}>
      {proficiencyList.map((proficiency) => (
        <li
          key={proficiency.skill}
          className={'flex flex-col gap-2 list-none p-4 text-center bg-accent'}
        >
          <img
            className={'size-32 block'}
            src={proficiency.icon.src}
            alt={proficiency.icon.alt}
            loading={'lazy'}
          />
          <p className={'w-32 m-auto'}>{proficiency.skill}</p>
        </li>
      ))}
    </ol>
  );
};
