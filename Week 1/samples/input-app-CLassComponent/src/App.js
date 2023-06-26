import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  //Class State
  state = {
    name: "",
  };

  // Change the state
  // Listening to a particular event
  //wrong not recommonded to change the objet directly we need to do it using function call for asynchronus behaviour
  // onChangeEventHandler = (eventInfo) => {
  //   this.setState({ name: eventInfo.currentTarget.value });
  // };

  //correct way of updateing the states. note state and props paramters in setState here are optional because we don't use them
  onChangeEventHandler = (e) => {
    let newName = e.currentTarget.value;
    this.setState((state, props) => ({ name: newName }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome {this.state.name}</p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChangeEventHandler}
          />
        </header>
      </div>
    );
  }
}

export default App;
