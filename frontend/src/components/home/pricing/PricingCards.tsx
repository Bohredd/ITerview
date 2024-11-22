import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Plans } from "../../../types/payment/Plans";
import useFetchData from "../../../functions/FetchData";
import { useState } from "react";

export const PricingCards = () => {

  const [plans, setPlans] = useState<Plans[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useFetchData<Plans[]>({
    method: "LIST",
    app_name: "plans",
    url: `plan/`,
    setData: setPlans,
    setLoading: setIsLoading,
    setError,
  });
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!plans) {
    return <div>No plans found</div>;
  }

  console.log(plans);

  return (
    <Container className="pt-5 pb-5">
      <Container className="pt-5 pb-5">
        <Row className="d-flex justify-content-center">
          {plans.map((plan) => (
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
                    {plan.title}
                  </Card.Title>
                  <Card.Subtitle className="text-center text-muted mb-2 mt-2">
                    ${plan.price}/month
                  </Card.Subtitle>
                  <Card.Text className="text-center">
                    <ul>
                      <li>
                        {plan.max_daily_participations}simulated daily meeting
                      </li>
                      <li>
                        {plan.max_interview_participations} simulated job
                        interview
                      </li>
                      <li>
                        {plan.max_common_sentences || "∞ unlimited"} common developers
                        sentences
                      </li>
                    </ul>
                    {plan.price !== 0 && (
                      <Button variant={plan.card_text_color} href={`/cart/${plan.id}`}>Subscribe</Button >
                    )}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <small className={`text-${plan.card_text_color}`}>{plan.description}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="container text-center">
          You can stop your subscription at any time.
        </div>
      </Container>
    </Container>
  );
};
