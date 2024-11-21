import { Container, Row, Col, Card } from "react-bootstrap";

export const PricingCards = () => {
  return (
    <Container className="pt-5 pb-5">
      <Container className="pt-5 pb-5">
        <Row className="d-flex justify-content-center">
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center mb-4"
          >
            <Card style={{ width: "18rem", paddingTop: "20px" }}>
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-3">
                  Junior
                </Card.Title>
                <Card.Subtitle className="text-center text-muted">
                  $0/month
                </Card.Subtitle>
                <Card.Text className="text-center">
                  <ul>
                    <li>1 simulated daily meeting</li>
                    <li>1 simulated job interview</li>
                    <li>5 common developers sentences</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-danger">You already have this one.</small>
              </Card.Footer>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center mb-4"
          >
            <Card style={{ width: "18rem", paddingTop: "20px" }}>
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
                    <li>5 simulated job interviews</li>
                    <li>
                      <span className="text-muted">∞</span> common developers
                      sentences
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-warning">I want to be a mid-level.</small>
              </Card.Footer>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center mb-4"
          >
            <Card style={{ width: "18rem", paddingTop: "20px" }}>
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-3">
                  Senior
                </Card.Title>
                <Card.Subtitle className="text-center text-muted">
                  $20/month
                </Card.Subtitle>
                <Card.Text className="text-center">
                  <ul>
                    <li>10 simulated dailies meetings</li>
                    <li>
                      <span className="text-muted">∞</span> simulated job
                      interviews
                    </li>
                    <li>
                      <span className="text-muted">∞</span> common developers
                      sentences
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-success">I want to be a senior.</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>


        <div className="container text-center">
          You can stop your subscription at any time.
        </div>
      </Container>
    </Container>
  );
};
