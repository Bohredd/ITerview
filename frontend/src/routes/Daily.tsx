import useFetchDataDaily from "../functions/FetchDailyApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Daily } from "../types/Daily";
import { Button } from "react-bootstrap";
import { PersonFrame } from "../components/PersonFrame";
import TextToSpeech from "../functions/TextToSpeech";

export const DailyView = () => {
  const { id } = useParams<{ id: string }>();

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [speechNumActual, setSpeechNumActual] = useState(0);

  useFetchDataDaily<Daily>({
    method: "GET",
    url: "/daily_speech/",
    id: Number(id),
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
    return <div>No data available.</div>;
  }

  const handleNext = () => {
    console.log("Next");
    setSpeechNumActual(speechNumActual + 1);
  };

  const handlePrevious = () => {
    console.log("Previous");
    setSpeechNumActual(speechNumActual - 1);
  };

  console.log(`len speakers ${daily.people.length}`);

  return (
    <div>
      <h1>{daily.project_name}</h1>
      {daily.project_description}
      {daily.your_atributions}

      {daily.speeches.length !== speechNumActual && (
        <h5>Speech: {daily.speeches[speechNumActual].content}</h5>
      )}

      <PersonFrame personCount={daily.people.length} />

      {speechNumActual !== 0 && (
        <Button variant="primary" onClick={handlePrevious}>
          Previous interation
        </Button>
      )}
      {speechNumActual !== daily.speeches.length &&
        TextToSpeech({
          text: daily.speeches[speechNumActual].content,
        })}
      {speechNumActual !== daily.speeches.length && (
        <Button variant="primary" onClick={handleNext}>
          Next interation
        </Button>
      )}

      {speechNumActual === daily.speeches.length && (
        <Button variant="primary" href="/dailies">
          Finish
        </Button>
      )}
    </div>
  );
};
