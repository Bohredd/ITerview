import { Daily } from "../../types/daily/Daily";
import { Person } from "../../types/daily/Person";
import { useState } from "react";
import useFetchDataDaily from "../../functions/daily/FetchDailyApi";
import { PersonFrame } from "./PersonFrame";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Speech } from "../../types/daily/Speech";
import ShowProbablyAnswers from "./ShowProbablyAnswers";
import {
  BsFillTelephoneFill,
  BsMicMuteFill,
  BsDisplay,
  BsMicFill,
} from "react-icons/bs";

interface DailyInfoProps {
  dailyInfo: Daily;
  actualSpeechId: number | string;
}

export const DailyInfo: React.FC<DailyInfoProps> = ({
  dailyInfo,
  actualSpeechId,
}) => {
  const [you, setYou] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [speech, setSpeech] = useState<Speech | null>(null);

  useFetchDataDaily<Person>({
    method: "GET",
    url: `/person/`,
    id: dailyInfo.you as number,
    setData: setYou,
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

  if (!you) {
    return <div>No you found</div>;
  }

  if (!dailyInfo) {
    return <div>No daily info found</div>;
  }

  console.log("Actual speaker ", speech?.speaker);

  return (
    <div>
      <h2>{dailyInfo.project_name}</h2>
      <h3>{dailyInfo.project_description}</h3>
      <p>{dailyInfo.your_atributions}</p>
      <p>People count in team {dailyInfo.people.length}</p>
      <p>
        You are {you.name} and you work as {you.role}
      </p>
      <p>Actual speech text: {speech?.content}</p>
      <Container fluid className="py-5">
        <Row className="justify-content-md-center">
          {dailyInfo.people.map((personId) => (
            <PersonFrame
              key={personId}
              peopleId={personId}
              actualSpeechId={actualSpeechId}
            />
          ))}
        </Row>
      </Container>

      <Container fluid className="py-5">
        <Row className="justify-content-md-center">
          <Col className="col-8 col-md-4 mb-3"></Col>
          <Col className="col-8 col-md-4 mb-3">
            <Button variant="secondary" size="lg">
              <BsDisplay />
            </Button>
            <Button variant="danger" size="lg">
              <BsFillTelephoneFill />
            </Button>
            <Button
              variant={
                speech?.speaker == you.id || speech?.is_to_you == true
                  ? "success"
                  : "primary"
              }
              size="lg"
            >
              {speech?.speaker === you.id ? (
                <BsMicMuteFill />
              ) : speech?.is_to_you ? (
                <BsMicFill />
              ) : (
                <BsMicFill />
              )}
            </Button>
          </Col>
          <Col className="col-8 col-md-4 mb-3"></Col>
        </Row>
      </Container>

      {speech?.is_question && speech.is_to_you && (
        <div>
          <h4>Question to you</h4>
          <p>{speech.content}</p>
          <ShowProbablyAnswers speechId={actualSpeechId} />
        </div>
      )}
    </div>
  );
};
