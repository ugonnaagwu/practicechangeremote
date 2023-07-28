import logo from './logo.svg';
import './App.css';
import { BingMap } from './BingMap';
import data from './data/places.json';
//import lotsOfData from './data/Landmarks.json';

let map = new BingMap();
window.onload = () => {
  map.init();
  map.loadMarkers(data);
}

function App() {
  return (
    <div className="App">
      <div id="myMap"></div>
    </div>
  );
}

export default App;
