import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Person } from "../types/Person";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";

interface PersonFrameProps {
  personCount: number;
  peopleIds: Person[]; // assuming peopleIds is an array of Person objects
  actualSpeech: Person;
}

export const PersonFrame: React.FC<PersonFrameProps> = ({
  personCount,
  peopleIds,
  actualSpeech,
}) => {
  console.log("People ids: ", peopleIds);
  console.log("actual speech: ", actualSpeech);

  const [people, setPeople] = useState<Person[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<Person[]>({
    method: "LIST",
    url: "/person/",
    setData: setPeople,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!people) {
    return <div>No people found</div>;
  }

  const filteredPeople = people.filter((person: Person) =>
    peopleIds.includes(person.id as number)
  );

  return (
    <div>
      <h2>Speakers</h2>
      <Container fluid className="py-5">
        <Row className="justify-content-md-center">
          {filteredPeople.slice(0, personCount).map((person, i) => (
            <Col key={i} className="col-8 col-md-4 mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>{person.name}</Card.Title>
                  <Card.Text>
                    <span>{person.role}</span>
                    {person.is_you ? " (You)" : ""}
                    {person.id === actualSpeech ? " (Speaking)" : ""}
                    {/* arrumar tipagens de dados */}
                    {/* arrumar para caso seja pergunta, mostrar as possiveis respostas e as informacoes. */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
