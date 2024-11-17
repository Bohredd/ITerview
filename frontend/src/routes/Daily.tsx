import useFetchDataDaily from "../functions/FetchDailyApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Daily } from "../types/Daily";
import { PersonView } from "../components/PersonView";

export const DailyView = () => {
  const { id } = useParams<{ id: string }>();

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div>
      <h1>{daily.project_name}</h1>
      <p>{daily.project_description}</p>
      <p>{daily.your_atributions}</p>

      <h3>People</h3>
      <PersonView dailyId={daily.id} />
    </div>
  );
};
