import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark text-white">
      <Container>
        <Navbar.Brand style={{color:'white'}} href="/">Ahmad Hassan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link style={{color:'white'}} href="/contact">Contact</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;