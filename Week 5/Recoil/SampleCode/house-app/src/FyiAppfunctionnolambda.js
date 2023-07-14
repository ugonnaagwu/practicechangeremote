import "./App.css";
import House from "./components/House";
import Room from "./components/Room";
import Counter from "./components/CounterClass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plan of the House</h1>
        <House>
          <Room name="Bedroom"></Room>
          <Room name="Living room"></Room>
          <Room name="Kitchen"></Room>
          <Counter></Counter>
        </House>
      </header>
    </div>
  );
}

export default App;
