import Portfolio from './components/Portfolio';
import './App.css';

// needed to override bootstrap
const styles = {
  backgroundColor: '#222831',
  color: '#00ADB5',
};

function App() {
  return (
    <div className="App" style={styles}>
      <Portfolio />
    </div>
  );
}

export default App;
