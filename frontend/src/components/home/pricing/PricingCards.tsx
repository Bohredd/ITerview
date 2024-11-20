import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
export const PricingCards = () => {
  return (
    <Container className="d-flex justify-content-center pt-5 pb-5">
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "200px" }}
      >
        <Card
          style={{ width: "18rem", paddingTop: "20px", marginRight: "20px" }}
        >
          <Card.Body>
            <Card.Title className="text-center fw-bold fs-3">Junior</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              $0/month
            </Card.Subtitle>
            <Card.Text className="text-center">
              <ul>
                <li>1 simulated daily meeting</li>
                <li>1 simulated job interview</li>
                <li>5 common developers sentences </li>
              </ul>
            </Card.Text>
            <Card.Footer className="text-center">
              <small className="text-danger">You already have this one.</small>
            </Card.Footer>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", paddingTop: "20px", marginRight: "20px" }}
        >
          <Card.Body>
            <Card.Title className="text-center fw-bold fs-3">
              Mid-Level
            </Card.Title>
            <Card.Subtitle className="text-center text-muted">
              $7/month
            </Card.Subtitle>
            <Card.Text className="text-center">
              <ul>
                <li>3 simulated dailies meetings</li>
                <li>5 simulated jobs interviews</li>
                <li>
                  <span className="text-muted">∞</span> common developers
                  sentences
                </li>
              </ul>
            </Card.Text>
            <Card.Footer className="text-center">
              {/* need to implement this part */}
              <small className="text-warning">I want to be a mid-level.</small>
            </Card.Footer>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", paddingTop: "20px" }}>
          <Card.Body>
            <Card.Title className="text-center fw-bold fs-3">Senior</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              $20/month
            </Card.Subtitle>
            <Card.Text className="text-center">
              <ul>
                <li>10 simulated dailies meetings</li>
                <li>
                  <span className="text-muted">∞</span> simulated jobs
                  interviews
                </li>
                <li>
                  <span className="text-muted">∞</span> common developers
                  sentences
                </li>
              </ul>
            </Card.Text>
            <Card.Footer className="text-center">
              {/* need to implement this part */}
              <small className="text-success">I want to be a senior.</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
