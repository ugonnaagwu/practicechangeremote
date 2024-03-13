import './App.css';
import React, {useState} from "react";
import {
  ProgressBar,
  Field, 
  Button
} from "@fluentui/react-components";

// styles are defined in App.css
function App() {
  const [buttonCounter, setCount] = useState(0.5);
  
  let incrementCounter = () => {
    setCount(buttonCounter + .1)
  }

  let decrementCounter = () => {
    setCount(buttonCounter - .1)
  }

  return (
    <div className="App">
      <h2>Let's start with a basic button interaction. No additional css styling was used</h2>

      <Button onClick={incrementCounter} appearance="primary">Add</Button>
      <Button onClick={decrementCounter} appearance="primary">Subtract</Button>
      <h2>{buttonCounter}</h2>

      <Field validationMessage="Counter Interactions" validationState="none">
        <ProgressBar value={buttonCounter} thickness="large"/>
      </Field>
    </div>
    
  );
}

export default App;