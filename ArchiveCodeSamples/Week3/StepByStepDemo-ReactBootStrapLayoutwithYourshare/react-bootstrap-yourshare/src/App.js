import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home.js";

// const Home=()=>(
// <div>
//   <h2>Welcome Home</h2>
// </div>
// );

const About = () => (
  <div>
    <h2>Welcome to TNT about page</h2>
  </div>
);

const Users = () => (
  <div>
    <h2>Welcome here, be part of this awsome example</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" end element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </div>
  );
}

export default App;
