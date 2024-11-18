import { Speech } from "../types/Speech";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";

interface ShowProbablyAnswersProps {
  speechId: number | string;
}

export default function ShowProbablyAnswers({
  speechId,
}: ShowProbablyAnswersProps) {
  const [speech, setSpeech] = useState<Speech | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  //   const [probablyAnswers, setProbablyAnswers] = useState<
  //     ProbablyAnswer[] | null
  //   >(null);

  useFetchDataDaily<Speech>({
    method: "GET",
    url: `/speech/`,
    id: speechId as number,
    setData: setSpeech,
    setLoading,
    setError,
  });

  //   useFetchDataDaily<ProbablyAnswer[]>({
  //     method: "GET",
  //     url: `/probablyanswer/`,
  //     setData: setProbablyAnswers,
  //     setLoading,
  //     setError,
  //   });

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

  return (
    <div>
      <h2>Probable answers</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
