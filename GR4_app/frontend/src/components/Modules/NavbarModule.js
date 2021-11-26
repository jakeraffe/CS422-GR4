import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Styles/nav.css";
import { NavLink } from "react-router-dom";
import CoinValidateModule from "./CoinValidateModule";

const NavbarModule = () => {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 nav-justified align-items-center">
            <Nav.Item>
              <NavLink
                className="nlink"
                activeStyle={{ color: "#f7f5fb" }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className="nlink"
                activeStyle={{ color: "#f7f5fb" }}
                exact
                to="/Learn"
              >
                Learn
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                className="nlink"
                activeStyle={{ color: "#f7f5fb" }}
                exact
                to="/News"
              >
                News
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className="nlink"
                activeStyle={{ color: "#f7f5fb" }}
                exact
                to="/Influencer-Activity"
              >
                Influencer-Activity
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className="nlink"
                activeStyle={{ color: "#f7f5fb" }}
                exact
                to="/About-Us"
              >
                About Us
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <CoinValidateModule />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarModule;
