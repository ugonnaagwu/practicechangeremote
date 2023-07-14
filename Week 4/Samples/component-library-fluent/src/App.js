import * as React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import FirstExample from "./FirstExample";
import SecondExample from "./SecondExample";
import ThirdExample from "./ThemeExample";

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">First Example - DatePicker and Dropdown</Link>
        </li>
        <li>
          <Link to="/SecondExample">
            Second Example - Persona With Custom Component and Counter
          </Link>
        </li>
        <li>
          <Link to="/ThirdExample">Third (Theme) Example</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" end element={<FirstExample />} />
        <Route path="/SecondExample" element={<SecondExample />} />
        <Route path="/ThirdExample" element={<ThirdExample />} />
      </Routes>
    </Router>
  );
};

export default App;
