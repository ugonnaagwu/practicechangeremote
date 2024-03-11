import React from "react";
import Counter from "./Counter";

const Tile = (props) => {
  return (
    <div className="Tile">
      <h1>Contacts</h1>
      <div>{props.children}</div>
      <Counter message="&hearts;:" />
    </div>
  );
};

export default Tile;
//Usage sample: <Tile> ... Card components go here ... </Tile>
