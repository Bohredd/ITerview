import { Plans } from "../../../types/payment/Plans";
import { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../../auth/AuthContext";
// import MercadoPagoConfig from "mercadopago";
// import { Payment } from "mercadopago";

export const Cart = () => {
  const [plan, setPlan] = useState<Plans | null>(null);

  useEffect(() => {
    const selectedPlan = localStorage.getItem("selectedPlan");
    if (selectedPlan) {
      setPlan(JSON.parse(selectedPlan));
    }
  }, []);

  if (!plan) {
    return <div>No plan selected</div>;
  }

  const onRemoveFromCart = () => {
    localStorage.removeItem("selectedPlan");
    window.location.href = "/pricing";
  };

  const onCheckout = () => {
    console.log("will go to mercado pago");
    // const client = new MercadoPagoConfig({
    //   accessToken: "access_token",
    //   options: { timeout: 5000, idempotencyKey: "abc" },
    // });

    // const payment = new Payment(client);

    // const body = {
    //   transaction_amount: plan.price,
    //   description: plan.title,
    //   currency_id: "BRL",
    //   quantity: 1,
    //   unit_price: plan.price,
    //   back_urls: {
    //     success: "http://localhost:3000/success",
    //     failure: "http://localhost:3000/failure",
    //     pending: "http://localhost:3000/pending",
    //   },
    // }

    // payment
    //   .create(body)
    //   .then((response) => {
    //     window.location.href = response.body.init_point;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <Container className="pt-5 pb-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Card className="shadow-lg">
            <Card.Header className="text-center fs-4 fw-bold">
              Shopping Cart
            </Card.Header>
            <Card.Body>
              <div className="text-center">
                <Card.Title>{plan.title}</Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  ${plan.price}/month
                </Card.Subtitle>
                <ul className="list-unstyled">
                  <li>
                    <strong>Simulated Daily Meetings:</strong>{" "}
                    {plan.max_daily_participations}
                  </li>
                  <li>
                    <strong>Simulated Job Interviews:</strong>{" "}
                    {plan.max_interview_participations}
                  </li>
                  <li>
                    <strong>Common Sentences:</strong>{" "}
                    {plan.max_common_sentences || "∞ unlimited"}
                  </li>
                </ul>
              </div>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button
                variant="danger"
                onClick={onRemoveFromCart}
              >
                Remove from Cart
              </Button>
              <Button variant="success" className="ms-2" onClick={onCheckout}>
                Checkout
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
