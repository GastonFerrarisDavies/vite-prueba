import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

export function NavbarApp () {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" clasName="navbar-brand">FDG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navbar-link" href="#home">About me</Nav.Link>
            <Nav.Link className="navbar-link" href="#link">Skills</Nav.Link>
            <Nav.Link className="navbar-link" href="#link">Proyects</Nav.Link>
            <Nav.Link className="navbar-link" href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}