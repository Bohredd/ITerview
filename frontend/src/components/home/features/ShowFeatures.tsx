import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { CSSProperties } from "react";

const cardStyles: CSSProperties = {
  width: "100%",
  minHeight: "28rem",
  display: "flex",
  flexDirection: "column",
  position: "relative", 
};

const cardBodyStyles: CSSProperties = {
  flex: 1, 
  position: "relative", 
};

const footerStyles: CSSProperties = {
  minHeight: "4rem", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const buttonStyles: CSSProperties = {
  position: "absolute", 
  bottom: "1rem",
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
                <ul>
                  <li>a mutual conversation with a tech team</li>
                  <li>you will be questioned about something by the team</li>
                  <li>
                    you just have the needed information to answer the questions
                  </li>
                  <li>
                    if you don't answer correctly, you will be penalized by
                    someone
                  </li>
                </ul>
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
                <ul>
                  <li>
                    you will be asked about themes and subthemes of the job
                  </li>
                  <li>you need to answer the questions speaking in English</li>
                  <li>if you don't answer correctly, you can answer again</li>
                  <li>
                    you can listen to the recruiter’s answer and the possible
                    answers too
                  </li>
                </ul>
              </Card.Text>
              <Button variant="primary" href="/interviews" style={buttonStyles}>
                Play this one
              </Button>
            </Card.Body>
            <Card.Footer style={footerStyles} className="text-center">
              <small className="text-warning">
                you will be ready for interviews and to talk with a recruiter in
                English.
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
                <ul>
                  <li>
                    you will listen to the most common developer sentences said
                    in the routine
                  </li>
                  <li>
                    after listening to the sentence, you need to write it
                    correctly
                  </li>
                  <li>
                    you can listen to the sentence again and see the correct
                    answer
                  </li>
                  <li>
                    after writing the sentence correctly, you can say it aloud
                    and validate if you said it correctly
                  </li>
                </ul>
              </Card.Text>
              <Button variant="primary" href="/sentences" style={buttonStyles}>
                Play this one
              </Button>
            </Card.Body>
            <Card.Footer style={footerStyles} className="text-center">
              <small className="text-success">
                you will have the knowledge for a lot of common developers
                sentences
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
