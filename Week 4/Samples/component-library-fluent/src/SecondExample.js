import * as React from "react";

import { Persona } from "@fluentui/react";
import { Stack } from "@fluentui/react";

const SecondExample = () => {
  return (
    <div style={{ height: "360px", padding: 15 }}>
      <Stack tokens={{ childrenGap: "20px" }}>
        <PersonaWithClickCounter
          imageUrl="https://www.bing.com/th?id=OIP.IBGgSiBlFVOG5aIwRa3vuQHaEJ&w=228&h=133&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Tom Riddle"
          secondaryText="He Who Must Not Be Named"
        />
        <PersonaWithClickCounter
          imageUrl="https://www.bing.com/th?id=OIP.kqk76MIGNb-kPWlnTk8bHQHaJq&w=76&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Harry Potter"
          secondaryText="The Boy Who Lived"
        />
        <PersonaWithClickCounter
          imageUrl="https://www.bing.com/th?id=OIP.MwFnJTZb07cS0nTztgzOkgAAAA&w=100&h=110&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Ron Weasley"
          secondaryText="Friend Of Harry and Hermione"
        />
        <PersonaWithClickCounter
          imageUrl="https://www.bing.com/th?id=OIP.HQyCBZXEv7g0PBDLUWAkzAHaJe&w=75&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Hermione Granger"
          secondaryText="Bails Out Ron And Harry A Lot"
        />
      </Stack>
    </div>
  );
};

const PersonaWithClickCounter = (props) => {
  const [clickCount, setClickCount] = React.useState(0);

  const increaseCounter = () => {
    console.log("this.state.click_count is: " + clickCount);
    setClickCount(clickCount + 1);
  };

  return (
    <div id="persona-container">
      <Persona
        imageUrl={props.imageUrl}
        text={props.text}
        secondaryText={
          props.secondaryText +
          " | You clicked this " +
          clickCount.toString() +
          " times!"
        }
        onClick={increaseCounter}
      />
    </div>
  );
};

export default SecondExample;
