import { Person } from "../types/Person";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import { Col, Card } from "react-bootstrap";
interface PersonFrameProps {
  peopleId: number | string;
  actualSpeechId: number | string;
}

export const PersonFrame = ({ peopleId, actualSpeechId }: PersonFrameProps) => {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<Person>({
    method: "GET",
    url: `/person/`,
    id: peopleId as number,
    setData: setPerson,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!person) {
    return <div>No person found</div>;
  }

  return (
    <Col key={person.id} className="col-8 col-md-4 mb-3">
      <Card
        className={`${
          person.id === actualSpeechId ? "border border-success border-3" : ""
        }`}
      >
        <Card.Img
          variant="top"
          src="holder.js/100px180?text=Image cap"
          className="card-img-top "
        />
        <Card.Body className="text-center">
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>
            <span>{person.role}</span>
            {person.is_you ? " (You)" : ""}
            {person.id === actualSpeechId ? " (Speaking)" : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
