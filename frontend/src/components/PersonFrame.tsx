import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface PersonFrameProps {
  personCount: number;
}

export const PersonFrame: React.FC<PersonFrameProps> = ({ personCount }) => {
  return (
    <div>
      <h2>Speakers</h2>
      <Container fluid className="py-5">
        <Row className="justify-content-md-center">
          {Array.from({ length: personCount }, (_, i) => (
            <Col key={i} className="col-8 col-md-4 mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Speaker {i + 1}</Card.Title>
                  {/* Use span or div directly inside Card.Body */}
                  <Card.Text>
                    <span>Speaker Name</span>{" "}
                    {/* Replacing <div> with <span> */}
                    <span>Speaker Role</span>{" "}
                    {/* Replacing <div> with <span> */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
