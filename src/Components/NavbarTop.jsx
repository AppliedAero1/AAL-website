import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import UAVTesting from "./UAVTesting";
import Computationalsolutions from "./Computationalsolution";
import Inquiry from "./Inquiry";
import Contactus from "./Contactus";
import logo from "./Images/logo.png";
import Footer from "./Footer";

function NavbarTop() {
  return (
    <Router>
      <Navbar
        expand="lg"
        fixed="top"
        bg="light"
        variant="black"
        style={{ zIndex: 9999 }}
      >
        <Container>
          <img src={logo} alt="Logo" height="30" />
          <Navbar.Brand
            as={Link}
            to="/home"
            style={{
              fontFamily: "",
              fontStyle: "italic",
              fontSize: "26px",
              color: "#000000",
              marginLeft: "15px"
            }}
          >
            Applied Aero Labs
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              <NavDropdown title="Solutions" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/uav-testing">
                  UAV Testing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/computationalsolutions">
                  Computational Solutions
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/inquiry">
                Inquiry
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus">
                Contact Us
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/login"
                className="btn btn-dark"
                style={{ marginLeft: "10px" }}
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/uav-testing" element={<UAVTesting />} />
          <Route
            path="/computationalsolutions"
            element={<Computationalsolutions />}
          />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default NavbarTop;
