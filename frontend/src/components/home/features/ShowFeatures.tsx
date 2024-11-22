import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { CSSProperties } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const cardStyles: CSSProperties = {
  width: "100%",
  minHeight: "32rem",
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

const cardBodyStyles: CSSProperties = {
  flex: 1,
  position: "relative",
};

const footerStyles: CSSProperties = {
  minHeight: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const buttonStyles: CSSProperties = {
  position: "absolute",
  bottom: "1.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",
};

export const ShowFeatures = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row className="gy-4">
        <Col xs={12} md={6} lg={4}>
          <Card style={cardStyles}>
            <Card.Body style={cardBodyStyles}>
              <Card.Title className="text-center fw-bold fs-5">
                Fake Daily Meeting
              </Card.Title>
              <Card.Text className="text-center flex-grow-1">
                <ListGroup as="ul">
                  <ListGroup.Item>a mutual conversation with a tech team</ListGroup.Item>
                  <ListGroup.Item>you will be questioned about something by the team</ListGroup.Item>
                  <ListGroup.Item>you just have the needed information to answer the questions</ListGroup.Item>
                  <ListGroup.Item>if you don't answer correctly, you will be penalized by someone</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Button variant="primary" href="/dailies" style={buttonStyles}>
                Play this one
              </Button>
            </Card.Body>
            <Card.Footer style={footerStyles} className="text-center">
              <small className="text-danger">
                you will be ready for common daily meetings
              </small>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Card style={cardStyles}>
            <Card.Body style={cardBodyStyles}>
              <Card.Title className="text-center fw-bold fs-5">
                Fake Job Interview
              </Card.Title>
              <Card.Text className="text-center flex-grow-1">
                <ListGroup as="ul">
                  <ListGroup.Item>you will be asked about themes and subthemes of the job</ListGroup.Item>
                  <ListGroup.Item>you need to answer the questions speaking in English</ListGroup.Item>
                  <ListGroup.Item>if you don't answer correctly, you can answer again</ListGroup.Item>
                  <ListGroup.Item>you can listen to the recruiter’s answer and the possible answers too</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Button variant="primary" href="/interviews" style={buttonStyles}>
                Play this one
              </Button>
            </Card.Body>
            <Card.Footer style={footerStyles} className="text-center">
              <small className="text-warning">
                you will be ready for interviews and to talk with a recruiter in English.
              </small>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Card style={cardStyles}>
            <Card.Body style={cardBodyStyles}>
              <Card.Title className="text-center fw-bold fs-5">
                Most Common Sentences
              </Card.Title>
              <Card.Text className="text-center flex-grow-1">
                <ListGroup as="ul">
                  <ListGroup.Item>you will listen to the most common developer sentences said in the routine</ListGroup.Item>
                  <ListGroup.Item>after listening to the sentence, you need to write it correctly</ListGroup.Item>
                  <ListGroup.Item>you can listen to the sentence again and see the correct answer</ListGroup.Item>
                  <ListGroup.Item>after writing the sentence correctly, you can say it aloud and validate if you said it correctly</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Button variant="primary" href="/sentences" style={buttonStyles}>
                Play this one
              </Button>
            </Card.Body>
            <Card.Footer style={footerStyles} className="text-center">
              <small className="text-success">
                you will have the knowledge for a lot of common developers sentences
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
