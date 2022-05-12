import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [serverData, setServerData] = React.useState(null);
  const [name, setName] = React.useState("");
  const [formSubmitResponse, setFormSubmitResponse] = React.useState(null)

  React.useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => setServerData(data.message));

    var myArray = [1,2,3,4];
    const shift = 10;
    const sumShift = myArray + shift;
    console.log(sumShift)
  }, []);

  const handleSubmit = (event) => {
    fetch("/submit", {
      method: 'POST',
      body: JSON.stringify({
        name: name
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then((data) => setFormSubmitResponse(data.message))
    .catch(err => {
      console.error(err)
    });

    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{!serverData ? "Fetching from the server..." : serverData}</p>

        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
          </form>
        <p>{!formSubmitResponse ? "" : formSubmitResponse}</p>
      </header>
    </div>
  );
}

export default App;
