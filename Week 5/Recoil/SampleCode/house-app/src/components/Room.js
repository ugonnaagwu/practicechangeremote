import React from "react";
import Visit from "./Visit";

let Room = (props) => (
  <div>
    <div>Room: {props.name}</div>
    <Visit name={props.name}></Visit>
    <div>{props.children}</div>
  </div>
);
export default Room;
