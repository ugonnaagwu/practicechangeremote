import './App.css';
import TodoParent from "./components/TodoParents";
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <TodoParent />
      </div>
    );
  }
   
}

export default App;
