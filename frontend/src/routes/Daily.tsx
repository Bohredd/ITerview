import { Daily } from "../types/Daily";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import { DailyInfo } from "../components/DailyInfo";
import { Button } from "react-bootstrap";
import TextToSpeech from "../functions/TextToSpeech";
import { Speech } from "../types/Speech";

export const DailyView = () => {
  const { id } = useParams<{ id: string }>();

  console.log("Daily view id: ", id);

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [actualSpeechId, setActualSpeechId] = useState<number>(0);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(true);

  // const [actualSpeechObject, setActualSpeechObject] = useState<Speech | null>(
  //   null
  // );

  useFetchDataDaily<Daily>({
    method: "GET",
    url: `/daily/`,
    id: Number(id),
    setData: setDaily,
    setLoading,
    setError,
  });

  // useFetchDataDaily<Speech>({
  //   method: "GET",
  //   url: `/speech/`,
  //   id: actualSpeechId,
  //   setData: setActualSpeechObject,
  //   setLoading,
  //   setError,
  // });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!daily) {
    return <div>No daily found</div>;
  }

  // if (!actualSpeechObject) {
  //   return <div>No speech found</div>;
  // }

  const handlePrevious = () => {
    if (actualSpeechId === 0) {
      setHasPrevious(false);
      return;
    } else {
      setHasPrevious(true);
    }
    setActualSpeechId(actualSpeechId - 1);
  };

  const handleNext = () => {
    if (actualSpeechId === daily.speeches.length - 1) {
      setHasNext(false);
      if (actualSpeechId === 0) {
        setHasPrevious(false);
      } else {
        setHasPrevious(true);
      }
      return;
    } else {
      setHasPrevious(true);
      setHasNext(true);
    }
    setActualSpeechId(actualSpeechId + 1);
  };

  return (
    <div>
      <DailyInfo
        dailyInfo={daily}
        actualSpeechId={daily.speeches[actualSpeechId]}
      />

      <Button
        variant="primary"
        onClick={handlePrevious}
        disabled={!hasPrevious}
      >
        Previous interation
      </Button>
      <Button
        variant="primary"
        // onClick={() => TextToSpeech(actualSpeechObject.content ?? "")}
      >
        Listen
      </Button>
      <Button variant="primary" onClick={handleNext} disabled={!hasNext}>
        Next interation
      </Button>
    </div>
  );
};
