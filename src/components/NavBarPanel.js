import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarPanel = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Redux Learn</Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/" as={Link}>Products</Nav.Link>
            </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarPanel;
