import React, { useState } from "react";

let CounterLambda = (props) => {
  const [count, setCount] = useState(0);

  let increase = () => setCount(count + 1);

  return (
    <div>
      <div>Counter - Number of visits (function version)</div>
      <div>{count}</div>
      <button onClick={increase}>+</button>
      <div>{props.children}</div>
    </div>
  );
};

export default CounterLambda;
