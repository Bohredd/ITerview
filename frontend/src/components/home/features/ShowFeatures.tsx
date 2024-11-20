import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { CSSProperties } from "react";

const cardStyles: CSSProperties = {
  width: "18rem",
  minHeight: "28rem",
  paddingTop: "20px",
  marginRight: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const ShowFeatures = () => {
  return (
    <Container className="d-flex justify-content-center pt-5 pb-5">
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "200px" }}
      >
        <Card style={cardStyles}>
          <Card.Body>
            <Card.Title className="text-center fw-bold fs-5">
              Fake Daily Meeting
            </Card.Title>
            <Card.Text className="text-center">
              <ul>
                <li>a mutual conversation with a tech team</li>
                <li>you will be questioned about something by the team</li>
                <li>
                  you just have the needed information to answer the questions
                </li>
                <li>
                  if you dont answer correctly, you will be penalized by someone
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-danger">
              you will be ready for common daily meetings
            </small>
          </Card.Footer>
        </Card>
        <Card style={cardStyles}>
          <Card.Body>
            <Card.Title className="text-center fw-bold fs-5">
              Fake Job Interview NEED TO ADJUST
            </Card.Title>
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
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-warning">
              you will be ready for interviews and to talk with a recruiter in
              english.
            </small>
          </Card.Footer>
        </Card>
        <Card style={{ ...cardStyles, marginRight: 0 }}>
          <Card.Body>
            <Card.Title className="text-center fw-bold fs-5">
              Most Common Sentences NEED TO ADJUST
            </Card.Title>
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
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-success">
              you will have the knowledge for a lot of common developers
              sentences
            </small>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};
