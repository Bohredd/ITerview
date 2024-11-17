import { Daily } from "../types/Daily";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import { Button } from "react-bootstrap";
export const DailiesView = () => {
  const [dailies, setDailies] = useState<Daily[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<Daily[]>({
    method: "LIST",
    url: "/daily/",
    setData: setDailies,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!dailies) {
    return <div>No dailies found</div>;
  }

  console.log(dailies);

  return (
    <div>
      {dailies.map((daily) => (
        <div key={daily.id}>
          <h2>{daily.project_name}</h2>
          <p>{daily.project_description}</p>
          <Button variant="primary" href={`/daily/${daily.id}/start`}>
            Ir para daily
          </Button>
        </div>
      ))}
    </div>
  );
};
