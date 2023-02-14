import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Portfolio() {
  const hash = window.location.hash.slice(1) || 'about';
  const [currentPage, setCurrentPage] = useState(hash);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Portfolio;
