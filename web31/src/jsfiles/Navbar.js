import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNavbar = ({ navname, Username, AdminDepartment, UserDepartment }) => {
  return (
    <>
      <div className="overallnavbar">
        <Navbar
          collapseOnSelect
          expand="lg"
          className=".bg-light navbarforadmin"
        >
          <Container>
            <Navbar.Brand as={NavLink} to="/home">
              Student info
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              {navname === "adminlogin" ? (
                <Nav className="me-auto">
                  <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/Admin">
                      <Button variant="outline-primary">Admin</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to={`/Create?name=${Username}&Department=${AdminDepartment}`}
                    >
                      <Button variant="outline-primary">NewStudent</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/Showtable">
                      <Button variant="outline-primary">Student</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/ShowUserAdmin">
                      <Button variant="outline-primary">AdminUser</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/Filterstd">
                      <Button variant="outline-primary">filterstd</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/Filter2">
                      <Button variant="outline-primary">Filter2</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              ) : (
                <Nav>
                  <div className="mr-3">
                    <NavLink to="/">
                      <Button
                        variant="outline-primary "
                        style={{ marginRight: 8 }}
                      >
                        Back
                      </Button>
                    </NavLink>
                  </div>

                  <NavLink
                    to={`/Create?name=${Username}&Department=${UserDepartment}`}
                  >
                    <Button variant="outline-primary ml-3">NewStudent</Button>
                  </NavLink>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MyNavbar;
