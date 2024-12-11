import { Container, Card, Button, Row, Col } from "react-bootstrap";

export const GameSelection = () => {
  const cardStyle = {
    width: "100%",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    marginBottom: "20px", 
  };

  return (
    <Container className="pt-5 pb-5">
      <Row className="gy-4 justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <Card style={cardStyle} className="text-center pt-3">
            <Card.Body>
              <Card.Title>Fake Daily Meeting</Card.Title>
              <Card.Text>
                You will participate in a daily meeting with a development team
              </Card.Text>
            </Card.Body>
            <Card.Footer className="align-items-center text-center">
              <Button variant="primary" href="/dailies">
                Play this one
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card style={cardStyle} className="text-center pt-3">
            <Card.Body>
              <Card.Title>Fake Job Interview</Card.Title>
              <Card.Text>
                You will participate in a fake job interview
              </Card.Text>
            </Card.Body>
            <Card.Footer className="align-items-center text-center">
              <Button variant="dark" href="/interviews">
                Play this one
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card style={cardStyle} className="text-center pt-3">
            <Card.Body>
              <Card.Title>Common developer sentences</Card.Title>
              <Card.Text>
                You will hear a lot of common developer sentences
              </Card.Text>
            </Card.Body>
            <Card.Footer className="align-items-center text-center">
              <Button variant="info" href="/sentences">
                Play this one
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
