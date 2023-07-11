import React from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Details from "../components/Details";
import UserForm from "../components/UserForm";
import Home from "../components/Home";
import SeaTurtle from "../components/SeaTurtle";
import PandaPic from "../components/PandaPic";
import { NotFound } from "../components/NotFound";


const AppRouter = () => (
  <Router>
    {/* The Navbar.Toggle, and Navbar.Collapse components that we wrapped around our
    Nav component, will collapse and expand our Nav content behind a button,
    when we are viewing the page in a small screen. */}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* collapseOnSelect prop will make the Navbar collapse automatically once
        the user selects an item from our Nav list (when the page is being
        viewed in a small screen). */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" fill variant="pills">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/UserForm">Register</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Friendly Animals" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Panda">Panda</NavDropdown.Item>
              <NavDropdown.Item href="/SeeTurtle">SeeTurtle</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/404NotFound">
                Not Found Page
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Panda" element={<PandaPic />} />
        <Route path="/SeeTurtle" element={<SeaTurtle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
