import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';

// needed to override bootstrap
const styles = {
  backgroundColor: '#222831',
  color: '#00ADB5',
};

function App() {
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
    <div className="App" style={styles}>
      <div className="container">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
