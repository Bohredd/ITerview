import { Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const CustomBody = () => {
  return (
    <Container className="text-center vh-100 d-flex flex-column justify-content-center align-items-center">
      <Image src="src/assets/iterview-logo.png" rounded className="mb-4 img-fluid" />

      <p className="text-black fw-bold fs-3 pt-3">
        Be <span className="text-primary">ready</span> for your next job
        interview!
      </p>

      <div>
        <p className="fw-bold text-secondary mb-1 pt-3">
          Improve your <span className="text-black">English</span> skills and be
          ready for the job you want with
        </p>
        <p className="fw-bold fs-5 text-primary">
          ITerview<span className="text-secondary">!</span>
        </p>
      </div>

      <div className="d-flex flex-column">
        <Button
          variant="primary"
          size="lg"
          className="mb-3"
          style={{ width: "200px" }}
          href="/gameSelection"
        >
          Let’s start
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="mb-3"
          style={{ width: "200px" }}
          href="/features"
        >
          What can I do?
        </Button>
        <Button
          variant="dark"
          size="lg"
          style={{ width: "200px" }}
          href="/pricing"
        >
          Be premium
        </Button>
      </div>
    </Container>
  );
};
