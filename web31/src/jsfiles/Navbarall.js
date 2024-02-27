import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  const history = useHistory();

  const backToPrevPage = () => {
    history.goBack();
  };

  return (
    <div className="overallnavbar">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">PVPIT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Button
              variant="outline-primary"
              style={{ marginRight: 10 }} // Pushes the button to the end
              onClick={backToPrevPage}
            >
              Back
            </Button>
            <NavLink to="/" className="nav-link">
              <Button variant="outline-primary">Home</Button>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
