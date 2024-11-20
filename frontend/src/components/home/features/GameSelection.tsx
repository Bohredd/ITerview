import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export const GameSelection = () => {
  const cardStyle = {
    width: "18rem",
    margin: "10px",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div className="d-flex justify-content-center">
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Fake Daily Meeting</Card.Title>
            <Card.Text>
              You will participate in a daily meeting with a development team
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" href="/dailies">
              Play this one
            </Button>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Fake Job Interview</Card.Title>
            <Card.Text>You will participate in a fake job interview</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" href="/interviews">
              Play this one
            </Button>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Common developer sentences</Card.Title>
            <Card.Text>
              You will heard a lot of common developer sentences
            </Card.Text>
          </Card.Body>
          <Card.Footer className="align-items-center">
            <Button variant="primary" href="/sentences">
              Play this one
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};
