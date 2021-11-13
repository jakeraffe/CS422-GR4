import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Styles/nav.css";
import { NavLink } from 'react-router-dom'

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
                <NavDropdown.Item exact to="./Pages/Learn">Learn</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

            <Nav.Item>
              <NavLink className="nlink" exact to="/News">News</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nlink" exact to="/Influencer-Activity">
                Influencer-Activity
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nlink" exact to="/About-Us">About Us</NavLink>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarModule;