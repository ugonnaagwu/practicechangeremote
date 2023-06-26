import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const[name, setName]= useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome {name}.
        </p>
        <input
            type="text"
            value={name}
            onChange={(eventInfo)=> setName(eventInfo.currentTarget.value)}
          />
      </header>
    </div>
  );
}

export default App;
