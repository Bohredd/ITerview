import { Daily } from "../../types/daily/Daily";
import { Person } from "../../types/daily/Person";
import { useState } from "react";
import useFetchDataDaily from "../../functions/daily/FetchData";

interface DailyInfoProps {
  dailyInfo: Daily;
}

export const DailyInfo: React.FC<DailyInfoProps> = ({ dailyInfo }) => {
  const [you, setYou] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<Person>({
    method: "GET",
    url: `/person/`,
    id: dailyInfo.you as number,
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
    return <div>No you found</div>;
  }

  if (!dailyInfo) {
    return <div>No daily info found</div>;
  }

  return (
    <div>
      <h2>{dailyInfo.project_name}</h2>
      <h3>{dailyInfo.project_description}</h3>
      <p>{dailyInfo.your_atributions}</p>
      <p>People count in team {dailyInfo.people.length}</p>
      <p>
        You are {you.name} and you work as {you.role}
      </p>
    </div>
  );
};
