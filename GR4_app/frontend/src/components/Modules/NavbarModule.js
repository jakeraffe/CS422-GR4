import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Styles/nav.css";

const NavbarModule = () => {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand href="/">Validate Coin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 nav-justified">
            <Nav.Item>
              <NavDropdown title="Learn" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Learn">Learn</NavDropdown.Item>
                <NavDropdown.Item href="">Quizzes</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/News">News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Influencer-Activity">
                Influencer-Activity
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/About-Us">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarModule;