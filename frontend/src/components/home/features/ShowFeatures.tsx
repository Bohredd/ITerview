import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CSSProperties } from "react";

const cardStyles: CSSProperties = {
  width: "18rem",
  minHeight: "28rem",
  marginRight: "20px",
  display: "flex",
  flexDirection: "column",
};

export const ShowFeatures = () => {
  return (
    <Container className="d-flex justify-content-center pt-5 pb-5">
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "200px" }}
      >
        <Card style={cardStyles}>
          <Card.Body className="d-flex flex-column">
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
                  if you dont answer correctly, you will be penalized by someone
                </li>
              </ul>
            </Card.Text>
            <Button variant="primary" href="/dailies" className="mt-auto">
              Play this one
            </Button>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-danger">
              you will be ready for common daily meetings
            </small>
          </Card.Footer>
        </Card>

        <Card style={cardStyles}>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center fw-bold fs-5">
              Fake Job Interview
            </Card.Title>
            <Card.Text className="text-center flex-grow-1">
              <ul>
                <li>you will be asked about themes and subthemes of the job</li>
                <li>you need to answer the questions speaking in english</li>
                <li>if you dont answer correctly, you can answer again</li>
                <li>
                  you can listen the answer of the recruiter and the possible
                  answers too
                </li>
              </ul>
            </Card.Text>
            <Button variant="primary" href="/interviews" className="mt-auto">
              Play this one
            </Button>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-warning">
              you will be ready for interviews and to talk with a recruiter in
              english.
            </small>
          </Card.Footer>
        </Card>

        <Card style={{ ...cardStyles, marginRight: 0 }}>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center fw-bold fs-5">
              Most Common Sentences
            </Card.Title>
            <Card.Text className="text-center flex-grow-1">
              <ul>
                <li>
                  you will listen the most common developer sentences said in
                  the routine
                </li>
                <li>
                  after listen the sentence you need to write it correctly
                </li>
                <li>
                  you can listen the sentence again and see the correct answer
                </li>
                <li>
                  after you write the sentence correctly, you can speech it and
                  validate if you said it correctly
                </li>
              </ul>
            </Card.Text>
            <Button variant="primary" href="/sentences" className="mt-auto">
              Play this one
            </Button>
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
