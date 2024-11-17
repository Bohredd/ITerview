import useFetchDataDaily from "../functions/FetchDailyApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Daily } from "../types/Daily";
import { PersonView } from "../components/PersonView";
import { Person } from "../types/Person";
import { Speech } from "../types/Speech";
import { Button } from "react-bootstrap";

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

  return (
    <div>
      <h1>{daily.project_name}</h1>
      <p>{daily.project_description}</p>
      <p>{daily.your_atributions}</p>

      {speechNumActual !== 0 && (
        <Button variant="primary" onClick={handlePrevious}>
          Previous interation
        </Button>
      )}
      <Button variant="primary" onClick={handleNext}>
        Next interation
      </Button>
    </div>
  );
};
