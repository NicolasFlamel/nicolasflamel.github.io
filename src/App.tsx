import { useState } from 'react';
import { Header, Footer } from './components';
import { About, Projects, Contact, Resume } from './pages';
import './App.css';

// needed to override bootstrap
const styles = {
  backgroundColor: '#222831',
  color: '#00ADB5',
};

const App = () => {
  const hash = window.location.hash.slice(1) || 'about';
  const [currentPage, setCurrentPage] = useState<string>(hash);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
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
        <section className="bg-gray p-5">{renderPage()}</section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
