import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { Daily } from "../../types/daily/Daily";
import { DailyInfo } from "../../components/daily/DailyInfo";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const DailiesView = () => {
  const [dailies, setDailies] = useState<Daily[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Daily[]>({
    method: "LIST",
    app_name: "dailies",
    url: "daily/",
    setData: setDailies,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!dailies) {
    return <div>No dailies found</div>;
  }

  return (
    <Container className="pt-5 pb-5">
      <h1 className="text-center mb-4">Dailies Available</h1>
      <Row
        className={`gy-4 ${
          dailies.length === 1 ? "justify-content-center" : ""
        }`} // Center single card
      >
        {dailies.map((daily) => (
          <Col
            xs={12}
            sm={12}
            md={dailies.length === 1 ? 8 : 6} // Adjust width if only one card
            lg={dailies.length === 1 ? 6 : 4} // Adjust width for large screens
            key={daily.id}
          >
            <Card
              className="h-100"
              style={{
                textAlign: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Body>
                <DailyInfo daily={daily} />
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button
                  variant="primary"
                  href={`/dailies/${daily.id}`}
                  className="w-100"
                >
                  I want to participate in this daily
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DailiesView;
