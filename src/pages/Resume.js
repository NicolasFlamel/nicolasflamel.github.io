function Resume() {
  const resumeLink = process.env.REACT_APP_GOOGLE_DRIVE_LINK;
  const styles = {
    listStyle: {
      listStyleType: 'circle',
    },
  };

  const frontendProficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Responsive Design',
    'React',
    'Bootstrap',
    'Handlebars',
    'Local Storage, Session Storage, IndexedDB',
  ];
  const backendProficiencies = [
    'APIs',
    'Node',
    'Express',
    'MySQL, Sequelize',
    'MongoDB, Mongoose',
    'REST',
  ];

  return (
    <section className="bg-gray p-5" id="resume">
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
