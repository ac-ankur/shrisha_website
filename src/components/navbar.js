import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../css/navbar.css";
import { useLocation } from "react-router-dom";
const NavigationBar = () => {
  const location = useLocation();
  return (
    <div className="navbarhead">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="path_to_your_logo_image"
            height="30"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="about">Company Profile</NavDropdown.Item>
              <NavDropdown.Item href="about">
                Company Objective
              </NavDropdown.Item>
              <NavDropdown.Item href="about">
                Business Association
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Innovative Solutions" id="basic-nav-dropdown" >
              {/* <NavDropdown.Item href="#">Audio Visual Solutions</NavDropdown.Item> */}
              <NavDropdown
                title="Audio Visual Solutions"
                id="basic-nav-dropdown audiovideo" 
              >
                <NavDropdown.Item href="smartclassroom">
                  {" "}
                  Smart Class Room
                </NavDropdown.Item>
                <NavDropdown.Item href="Virtualclassroom">
                  Virtual Class Room
                </NavDropdown.Item>
                <NavDropdown.Item href="Hybridclassroom">Hybrid Class Room</NavDropdown.Item>
                <NavDropdown.Item href="conferenceroom">Conference Room </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="virtual">Virtual World</NavDropdown.Item>
              <NavDropdown.Item href="learning">
                Elearning & LMS
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                E-content Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#">AR/VR/MR</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="/clients"
              className={location.pathname === "/clients" ? "active" : ""}
            >
              Our Clients
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
