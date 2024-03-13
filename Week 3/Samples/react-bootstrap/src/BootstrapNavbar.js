import React from "react";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

// Components
import Home from "./components/Home";
import BootstrapTable from "./components/BootstrapTable";
import BootstrapSelect from "./components/BootstrapSelect";
import BootstrapCarousel from "./components/BootstrapCarousel";
import BootstrapForm from "./components/BootstrapForm";
// import LottieAnimation from "./components/LottieAnimation";
// import OtherLottieAnimation from "./components/OtherLottie";

const BootstrapNavbar = () => {
  return (
    <div>
      <Router>
        <Container>
          <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav defaultActiveKey="/">
                <Nav.Item>
                  <Nav.Link href="/">Date Picker</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/BootstrapTable">Table</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/BootstrapSelect">Select</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/BootstrapCarousel">Carousel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/BootstrapForm">Form</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Nowhere" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link href="/LottieAnimation">Lottie</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/OtherLottie">Lottie 2</Nav.Link>
                  </Nav.Item> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
          <Routes>
            <Route path="/" end element={<Home />} />
            <Route path="/BootstrapTable" element={<BootstrapTable />} />
            <Route path="/BootstrapSelect" element={<BootstrapSelect />} />
            <Route path="/BootstrapCarousel" element={<BootstrapCarousel />} />
            <Route path="/BootstrapForm" element={<BootstrapForm />} />
            <Route path="/BootstrapCarousel" element={<BootstrapCarousel />} />
            <Route path="/BootstrapCarousel" element={<BootstrapCarousel />} />
            {/* <Route path="/LottieAnimation"
                element={<LottieAnimation />} />
              <Route path="/OtherLottie"
                element={<OtherLottieAnimation />}
              /> */}
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default BootstrapNavbar;
