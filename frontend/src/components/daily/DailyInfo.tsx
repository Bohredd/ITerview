import { Button } from "react-bootstrap"
import { Daily } from "../../types/daily/Daily"
import { Person } from "../../types/daily/Person"
import useFetchData from "../../functions/FetchData"
import { useState } from "react"

interface DailyInfoProps {
  daily : Daily
}

export const DailyInfo = ({ daily } : DailyInfoProps) => {
  const [you, setYou] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Person>({
    method: "GET",
    app_name: "dailies",
    url: `person/`,
    id: daily.you,
    setData: setYou,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!you) {
    return <div>No person found</div>;
  }

  // console.log(you);

  return (
    <div>
      <h1>{daily.project_name}</h1>
      <p>{daily.project_description}</p>
      <p>
        You are {you.name} and you work as {you.role}
      </p>
      <p>People team size: {daily.people.length}</p>
      <Button variant="primary" href={`/dailies/${daily.id}`}>
        I want to participate in this daily
      </Button>
    </div>
  );
};