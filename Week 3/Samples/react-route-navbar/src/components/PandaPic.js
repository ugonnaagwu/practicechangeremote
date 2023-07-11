import React from "react";
import panda from "../Images/panda.jpeg";
import "../App.css";

const PandaPic = () => (
  <div>
    <img className="imgStyle" src={panda} alt={"Happy panda"} />
  </div>
);
export default PandaPic;
