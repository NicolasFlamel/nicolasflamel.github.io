import {
  frontendProficiencies,
  backendProficiencies,
} from '../assets/proficienciesList';
import { ProficiencyCard } from '../components';

const Resume = () => {
  const resumeLink =
    'https://drive.google.com/file/d/1ny84bhM9ylXxOtOHLhSOuXJaOA99_V4s/view?usp=sharing';

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        <a href={resumeLink} rel="noreferrer" target="_blank">
          Download my resume from google drive
        </a>
      </p>
      <article>
        <h3>Front-end Proficiencies</h3>
        <ul>
          {frontendProficiencies.map((proficiency) => (
            <li key={proficiency.skill}>
              <ProficiencyCard>
                <img
                  className="proficiency-icon"
                  src={proficiency.icon.src}
                  alt={proficiency.icon.alt}
                />
                <p>{proficiency.skill}</p>
              </ProficiencyCard>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h3>Back-end Proficiencies</h3>
        <ul>
          {backendProficiencies.map((proficiency) => (
            <li key={proficiency.skill}>
              <ProficiencyCard>
                <img
                  className="proficiency-icon"
                  src={proficiency.icon.src}
                  alt={proficiency.icon.alt}
                />
                <p>{proficiency.skill}</p>
              </ProficiencyCard>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Resume;
