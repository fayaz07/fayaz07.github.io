import React from "react";
import logo from "../assets/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Mohammad Fayaz
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
