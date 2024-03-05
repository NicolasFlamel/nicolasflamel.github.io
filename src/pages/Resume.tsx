function Resume() {
  const resumeLink =
    'https://drive.google.com/file/d/1ny84bhM9ylXxOtOHLhSOuXJaOA99_V4s/view?usp=sharing';
  const styles = {
    listStyle: {
      listStyleType: 'circle',
    },
  };

  const frontendProficiencies = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'jQuery',
    'Bootstrap',
    'Handlebars',
    'Responsive Design',
    'Local Storage, Session Storage, IndexedDB',
  ];
  const backendProficiencies = [
    'APIs',
    'REST',
    'Node.js, Express',
    'MySQL, Sequelize',
    'MongoDB, Mongoose',
    'Apollo GraphQL',
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        Download my{' '}
        <a href={resumeLink} rel="noreferrer" target="_blank">
          resume
        </a>
      </p>
      <article>
        <h3>Front-end Proficiencies</h3>
        <ul>
          {frontendProficiencies.map((string) => (
            <li style={styles.listStyle} key={string}>
              {string}
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h3>Back-end Proficiencies</h3>
        <ul>
          {backendProficiencies.map((string) => (
            <li style={styles.listStyle} key={string}>
              {string}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Resume;
