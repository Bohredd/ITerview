import { useState } from "react";
import { ProbablyAnswer } from "../../types/daily/ProbablyAnswer";
import useFetchDataDaily from "../../functions/daily/FetchDailyApi";

interface AnswerShowerDailyProps {
  probablyAnswer: number | string;
}

export default function AnswerShowerDaily({
  probablyAnswer,
}: AnswerShowerDailyProps) {
  const [answer, setAnswer] = useState<ProbablyAnswer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<ProbablyAnswer>({
    method: "GET",
    url: `/probablyanswer/`,
    id: probablyAnswer as number,
    setData: setAnswer,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!answer) {
    return <div>No answer found</div>;
  }

  return <div></div>;
}
