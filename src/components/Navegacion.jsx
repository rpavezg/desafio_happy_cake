import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navegacion = () => {
    return (
      <Navbar bg="danger"  expand="lg" variant="dark">
      <Container className="d-flex flex-md-row-reverse">
        <Navbar.Brand href="/">Happy Cake 🍰</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link to="/" text-white ms3 text-decoration-none>🏠 Home</Link>
            <Link to="/contacto" text-white ms3 text-decoration-none>📒 Contacto</Link>
            <Link to="*" text-white ms3 text-decoration-none>Error</Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
