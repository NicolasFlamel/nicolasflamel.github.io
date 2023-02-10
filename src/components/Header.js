function Header({ currentPage, setCurrentPage }) {
  const pages = ['about', 'portfolio', 'contact', 'resume'];

  return (
    <header className="text-center">
      <h1>Amauri's Portfolio</h1>
      <nav>
        <ul className="d-flex flex-wrap justify-content-around">
          <li className="btn" onClick={() => setCurrentPage(pages[0])}>
            <h2>
              <a
                className={currentPage === 'about' ? 'active' : ''}
                href="#about"
              >
                About Me
              </a>
            </h2>
          </li>
          <li className="btn" onClick={() => setCurrentPage(pages[1])}>
            <h2>
              <a
                className={currentPage === 'portfolio' ? 'active' : ''}
                href="#portfolio"
              >
                Portfolio
              </a>
            </h2>
          </li>
          <li className="btn" onClick={() => setCurrentPage(pages[2])}>
            <h2>
              <a
                className={currentPage === 'contact' ? 'active' : ''}
                href="#contact"
              >
                Contact Me
              </a>
            </h2>
          </li>
          <li className="btn" onClick={() => setCurrentPage(pages[3])}>
            <h2>
              <a
                className={currentPage === 'resume' ? 'active' : ''}
                href="#resume"
              >
                Resume
              </a>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
