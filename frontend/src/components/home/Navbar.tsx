import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

export const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg" 
      bg="light" 
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
          <img
            src="/src/assets/iterview-logo.png"
            alt="ITerview Logo"
            width={40}
            height="auto"
            className="me-2"
          />
          <span className="ms-2 fw-bold fs-5">
            <span className="text-primary">IT</span>erview
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features" className="fw-bold">
              Features
            </Nav.Link>
            <Nav.Link href="/pricing" className="fw-bold">
              Pricing
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="/login" className="d-flex align-items-center">
              <span className="text-primary fw-bold fs-6">Login</span>
              <BsFillPersonFill className="ms-1" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
