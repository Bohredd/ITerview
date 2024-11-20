import { Daily } from "../../types/daily/Daily";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchDataDaily from "../../functions/daily/FetchData";
import { DailyInfo } from "../../components/daily/DailyInfo";
import { Button } from "react-bootstrap";

export const DailyView = () => {
  const { id } = useParams<{ id: string }>();

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [actualSpeaker, setActualSpeaker] = useState<number | null>(null);
  const [actualSpeechNum, setactualSpeechNum] = useState<number>(0);

  useFetchDataDaily<Daily>({
    method: "GET",
    url: `/daily/`,
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
    return <div>No daily found</div>;
  }

  if (!actualSpeechNum) {
    setactualSpeechNum(daily.speeches[0] as number);
  }

  console.log("speeches ", daily.speeches);

  const nextInteration = () => {
    if (actualSpeechNum === daily.speeches.length - 1) return;

    setactualSpeechNum(actualSpeechNum + 1);
  };

  const previousInteration = () => {
    if (actualSpeechNum === 0) return;

    setactualSpeechNum(actualSpeechNum - 1);
  };

  return (
    <div>
      <DailyInfo dailyInfo={daily} />

      <div>Actual speech number: {actualSpeechNum}</div>

      <Button variant="primary" onClick={previousInteration}>
        Previous speaker
      </Button>

      <Button variant="primary" onClick={nextInteration}>
        Next speaker
      </Button>
    </div>
  );
};
