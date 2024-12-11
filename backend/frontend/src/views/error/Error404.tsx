
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CustomNavbar } from "../../components/home/Navbar";

export const Error404 = () => {
    return (
      <>
        <CustomNavbar />
        <Container>
          <div className="text-center" style={{ paddingTop: "200px" }}>
            <h1>Ooops!</h1>
            <p>You seems to be lost.</p>
            <p>The page you are looking for does not exist.</p>
            <Button variant="primary" href="/">Go back to Home</Button>
          </div>
        </Container>
      </>
    );
}

export default Error404;