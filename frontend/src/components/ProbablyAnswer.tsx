import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import { ProbablyAnswer } from "../types/ProbablyAnswer";
import TextToSpeech from "../functions/TextToSpeech";
interface ProbablyAnswerProps {
  probablyAnswerId: number | string;
}

export default function ProbablyAnswerShow({
  probablyAnswerId,
}: ProbablyAnswerProps) {
  const [probAnswer, setProbablyAnswer] = useState<ProbablyAnswer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<ProbablyAnswer>({
    method: "GET",
    url: `/probably_answer/`,
    id: probablyAnswerId as number,
    setData: setProbablyAnswer,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!probAnswer) {
    return <div>No probably answer found</div>;
  }

  console.log("probably answer: ", probAnswer);

  return (
    <div>
      <p>{probAnswer.answer}</p>
      <TextToSpeech text={probAnswer.answer} />
    </div>
  );
}
