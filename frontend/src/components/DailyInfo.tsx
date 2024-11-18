import { Daily } from "../types/Daily";
import { Person } from "../types/Person";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import { PersonFrame } from "./PersonFrame";
import { Container, Row } from "react-bootstrap";
import { Speech } from "../types/Speech";
import ShowProbablyAnswers from "./ShowProbablyAnswers";

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
