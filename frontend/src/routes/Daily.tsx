import useFetchDataDaily from "../functions/FetchDailyApi";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Daily } from "../types/Daily";

import { Button } from "react-bootstrap";
import { Speech } from "../types/Speech";
import { Information } from "../types/Information";
import { Person } from "../types/Person";
import { ProbablyAnswer } from "../types/ProbablyAnswer";

export const DailyView = () => {
  const { id } = useParams<{ id: string }>();

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [speech, setSpeech] = useState<Speech | null>(null);
  const [loadingSpeech, setLoadingSpeech] = useState<boolean>(true);
  const [errorSpeech, setErrorSpeech] = useState<string | null>(null);

  const [information, setInformation] = useState<Information | null>(null);
  const [loadingInformation, setLoadingInformation] = useState<boolean>(true);
  const [errorInformation, setErrorInformation] = useState<string | null>(null);

  const [person, setPerson] = useState<Person | null>(null);
  const [loadingPerson, setLoadingPerson] = useState<boolean>(true);
  const [errorPerson, setErrorPerson] = useState<string | null>(null);

  const [probablyAnswer, setProbablyAnswer] = useState<ProbablyAnswer | null>(
    null
  );
  const [loadingProbablyAnswer, setLoadingProbablyAnswer] =
    useState<boolean>(true);
  const [errorProbablyAnswer, setErrorProbablyAnswer] = useState<string | null>(
    null
  );

  useFetchDataDaily<Daily>({
    method: "GET",
    url: "/daily/",
    id: Number(id),
    setData: setDaily,
    setLoading,
    setError,
  });

  if (!daily) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(daily);

  return (
    <div>
      <h1>{daily.project_name}</h1>
      <p>{daily.project_description}</p>
      <p>{daily.your_atributions}</p>
    </div>
  );
};
