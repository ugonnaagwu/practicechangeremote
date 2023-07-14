import React from "react";
import Visit1 from "./Visit1";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = () => {
    console.log("increase - class version");
    this.setState((state, props) => ({ count: this.state.count + 1 }));
  };

  render() {
    return (
      <div>
        <div>Counter - Number of visits (class version)</div>
        <div>{this.state.count}</div>
        <button onClick={this.increase}>+</button>
        <Visit1 counter={this.state.count}></Visit1>
      </div>
    );
  }
}

export default CounterClass;
