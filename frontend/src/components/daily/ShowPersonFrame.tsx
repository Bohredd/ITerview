import { Person } from "../../types/daily/Person";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { Card } from "react-bootstrap";

interface ShowPersonFrameProps {
  personId: number;
}

export const ShowPersonFrame = ({ personId }: ShowPersonFrameProps) => {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Person>({
    method: "GET",
    app_name: "dailies",
    url: `person/`,
    id: personId,
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
    <div
      className={`person-frame-${person.id}`}
      style={{ width: "14rem", margin: "auto" }}
    >
      <Card style={{ width: "14rem", height: "18rem" }}>

        <Card.Img
          variant="top"
          src={person.image}
          alt={person.name}
          style={{
            width: "100%", 
            height: "50%", 
            objectFit: "cover", 
          }}
        />
        <Card.Body className="text-center">
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>{person.role}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
