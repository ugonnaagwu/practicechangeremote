import * as React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import FirstExample from "./FirstExample";
import SecondExample from "./SecondExample";
import ThirdExample from "./ThemeExample";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

const App = () => {
  return (
    <FluentProvider theme={webLightTheme}>
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
    </FluentProvider>
  );
};

export default App;
