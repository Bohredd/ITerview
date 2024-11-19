import { Person } from "../../types/daily/Person";
import { useState } from "react";
import useFetchDataDaily from "../../functions/daily/FetchDailyApi";
import { Col, Card } from "react-bootstrap";
import { Speech } from "../../types/daily/Speech";

interface PersonFrameProps {
  peopleId: number | string;
  actualSpeechId: number | string;
}

export const PersonFrame = ({ peopleId, actualSpeechId }: PersonFrameProps) => {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [speech, setSpeech] = useState<Speech | null>(null);

  useFetchDataDaily<Person>({
    method: "GET",
    url: `/person/`,
    id: peopleId as number,
    setData: setPerson,
    setLoading,
    setError,
  });

  useFetchDataDaily<Speech>({
    method: "GET",
    url: `/speech/`,
    id: actualSpeechId as number,
    setData: setSpeech,
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

  if (!speech) {
    return <div>No speech found</div>;
  }

  return (
    <Col key={person.id} className="col-8 col-md-4 mb-3">
      <Card
        className={`${
          person.id === speech.speaker ? "border border-success border-3" : ""
        }`}
      >
        <Card.Img
          variant="top"
          src={person.image || "holder.js/100px180?text=Image cap"}
          className="card-img-top "
        />
        <Card.Body className="text-center">
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>
            <span>{person.role}</span>
            {person.is_you ? " (You)" : ""}
            {person.id === speech.speaker ? " (Speaking)" : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
