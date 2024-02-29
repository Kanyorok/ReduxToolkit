import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

const NavBarPanel = () => {
    const cartProducts = useSelector(state => state.cartBag);
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
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarPanel;
