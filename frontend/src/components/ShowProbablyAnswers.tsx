import { Speech } from "../types/Speech";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import ProbablyAnswerShow from "./ProbablyAnswer";

interface ShowProbablyAnswersProps {
  speechId: number | string;
}

export default function ShowProbablyAnswers({
  speechId,
}: ShowProbablyAnswersProps) {
  const [speech, setSpeech] = useState<Speech | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<Speech>({
    method: "GET",
    url: `/speech/`,
    id: speechId as number,
    setData: setSpeech,
    setLoading,
    setError,
  });

  console.log("speech: ", speech);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!speech) {
    return <div>No speech found</div>;
  }

  console.log("probably answers: ", speech.probably_answers);

  console.log("speech information ", speech.information);

  return (
    <div>
      <h2>Probable answers</h2>
      {speech.probably_answers.map((probablyAnswer) => (
        <div key={probablyAnswer}>
          <ProbablyAnswerShow probablyAnswerId={probablyAnswer} />
        </div>
      ))}
    </div>
  );
}
