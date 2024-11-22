
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Error404 = () => {
    return (
      <>
        <Container>
          <div className="text-center" style={{ paddingTop: "200px" }}>
            <h1>Ooops!</h1>
            <p>You seems to be lost.</p>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
              <Button variant="primary">Go back to Home</Button>
            </Link>
          </div>
        </Container>
      </>
    );
}

export default Error404;