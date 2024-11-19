import { Daily } from "../types/Daily";
import useFetchDataDaily from "../functions/FetchDailyApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export const DailyStart = () => {
  const { id } = useParams<{ id: string }>();

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div>
      <h1>{daily.project_name}</h1>
      {daily.project_description}
      <p>{daily.your_atributions}</p>
      <Button variant="primary" href={`/daily/${daily.id}`}>
        Start Daily
      </Button>
    </div>
  );
};
