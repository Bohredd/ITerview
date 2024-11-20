import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

export const CustomNavbar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          <span className="text-primary">IT</span>erview
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/features">
            <span className="fw-bold">Features</span>
          </Nav.Link>
          <Nav.Link href="/pricing">
            <span className="fw-bold">Pricing</span>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className="text-primary fw-bold">
              <a
                href="/login"
                className="text-decoration-none fw-bold fs-6 text-primary"
              >
                Login <BsFillPersonFill style={{ verticalAlign: "center" }} />
              </a>
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
