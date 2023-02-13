import resumePDF from '../../assets/resume.pdf';

function Resume() {
  return (
    <section className="bg-gray p-5" id="resume">
      <h2>Resume</h2>
      <p>
        Download my{' '}
        <a href={resumePDF} download="Amauri's Resume">
          resume
        </a>
      </p>
    </section>
  );
}

export default Resume;
