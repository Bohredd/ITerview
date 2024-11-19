import { Daily } from "../../types/daily/Daily";
import { useState } from "react";
import useFetchDataDaily from "../../functions/daily/FetchDailyApi";
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
          <h2>Project Name</h2>
          <p>{daily.project_name}</p>
          <h4>Project Description</h4>
          <p>{daily.project_description}</p>
          <h4>Team Size</h4>
          <p>{daily.people.length}</p>
          <Button variant="primary" href={`/daily/${daily.id}/start`}>
            I want this one!
          </Button>
        </div>
      ))}
    </div>
  );
};
