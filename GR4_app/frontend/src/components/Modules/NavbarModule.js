import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

const NavbarModule = () => {

    // Styles will be added to a styles css file...
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{marginRight: "4rem", fontSize: "1.5rem"}} href="/">Validate Coin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">
               
                <Nav className="me-auto">
                    <NavDropdown style={{marginRight: "4rem", fontSize: "1.5rem"}} title="Learn" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Learn">Learn</NavDropdown.Item>
                    <NavDropdown.Item href="">Quizzes</NavDropdown.Item>
                    <NavDropdown.Item href="">....</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="/">Validate Coin</Nav.Link> */}
                    <Nav.Link style={{marginRight: "4rem", fontSize: "1.5rem"}} href="/News">News</Nav.Link>
                    <Nav.Link style={{marginRight: "4rem", fontSize: "1.5rem"}} href="/Influencer-Activity">Influencer-Activity</Nav.Link>
                    <Nav.Link style={{marginRight: "4rem", fontSize: "1.5rem"}} href="">Settings</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarModule;