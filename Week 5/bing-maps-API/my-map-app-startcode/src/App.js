import logo from './logo.svg';
import './App.css';
import { BingMap } from './BingMap';
import data from './data/places.json';
//import lotsOfData from './data/Landmarks.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Map Tutorial
        </p>
      </header>
    </div>
  );
}

export default App;
