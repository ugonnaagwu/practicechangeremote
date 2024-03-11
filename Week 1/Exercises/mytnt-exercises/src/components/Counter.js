import React from "react";

const Counter = (props) => {
  const [count, setCount] = React.useState(0); //CONFIRM: You can set a different initial value for the count and have it display in the browser

  const increment = () => {
    //TODO: Finish the increment function to set a new state object with the incremented count
  };

  return (
    <div className="Hearts" onClick={increment}>
      {props.message} {count}
    </div>
  );
  //props.message = "Way to go!" //CONFIRM: Properties CAN'T be changed; uncommenting this line causes an error
};

export default Counter;
