import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { Daily } from "../../types/daily/Daily";
import { DailyInfo } from "../../components/daily/DailyInfo";
import { CustomNavbar } from "../../components/home/Navbar";
import { Card, Container } from "react-bootstrap";
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

  console.log(dailies);

  return (
    <div>
      <CustomNavbar />
      <Container className="d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
        <h1>Dailies Available</h1>
        {dailies.map((daily) => (
          <Card
            key={daily.id}
            className="mb-4"
            style={{
              width: "58rem",
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
        ))}
      </Container>
    </div>
  );
};
