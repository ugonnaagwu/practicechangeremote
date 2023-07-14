import "./App.css";
import House from "./components/House";
import Room from "./components/Room";
import CounterClass from "./components/CounterClass";
import CounterLambda from "./components/CounterLambda";

let App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Open House</h1>
      <House>
        <Room name="Bedroom"></Room>
        <Room name="Living room"></Room>
        <Room name="Kitchen"></Room>
        <CounterClass></CounterClass>
        <CounterLambda></CounterLambda>
      </House>
    </header>
  </div>
);

export default App;
