import { useParams } from "react-router-dom";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { Daily } from "../../types/daily/Daily";
import { ShowPeopleFrame } from "../../components/daily/ShowPeopleFrame";
import { ShowConversations } from "../../components/daily/ShowConversations";
import { Container, Row, Col } from "react-bootstrap";
import { ShowYou } from "../../components/daily/ShowYou";

export const DailyView = () => {
  const { id } = useParams<{ id: string }>();

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Daily>({
    method: "GET",
    app_name: "dailies",
    url: `daily/`,
    id: id,
    setData: setDaily,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!daily) {
    return <div>No daily found</div>;
  }

  console.log(daily);
  console.log(id);
  console.log(daily.people);

  return (
    <div>
      <Container className="d-flex flex-column align-items-center pt-5 pb-5">
        <h1 className="text-center mb-4">Daily {daily.project_name} Team</h1>
        <p>Scrum master started the daily at: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
        <ShowYou youId={daily.you} daily={daily} />
        <Row className="justify-content-center w-100">
          <Col md={8} className="d-flex flex-column align-items-center">
            <ShowPeopleFrame peopleId={daily.people} />
            <ShowConversations speechesId={daily.speeches} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DailyView;