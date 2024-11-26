import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BsFillPersonFill,
  BsFillPersonXFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { useAuth } from "../../auth/AuthContext";

export const CustomNavbar = () => {
  const { isAuthenticated } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <Navbar expand="lg" bg="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
          <img
            src="/src/assets/iterview-icon.png"
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
            {isAuthenticated ? (
              <Nav.Link
                onClick={handleLogout}
                className="d-flex align-items-center"
              >
                <BsFillPersonXFill size={14} className="ms-1" />
                <span className="text-primary fw-bold fs-6 ms-2">Logout</span>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login" className="d-flex align-items-center">
                  <BsFillPersonFill size={14} className="ms-1" />
                  <span className="text-primary fw-bold fs-6 ms-2">Login</span>
                </Nav.Link>
                <Nav.Link
                  href="/register"
                  className="d-flex align-items-center"
                >
                  <BsFillPersonPlusFill size={14} className="ms-1" />
                  <span className="text-primary fw-bold fs-6 ms-2">
                    Sign Up
                  </span>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
