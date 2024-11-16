import useFetchData from "../functions/FetchApi";
import { Interview } from "../types/Interview";
import { useState } from "react";

export function InterviewsView() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Interview[]>({
    method: "LIST",
    url: "/interview/",
    setData: setInterviews,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!interviews) {
    return <div>No interviews found</div>;
  }

  console.log(interviews[0].sub_themes);
  console.log(interviews[0].themes);
  // TODO: criar uma viewset para retornar os themes e subthemes relacionados a uma interview
  return (
    <div>
      <h1>Interviews</h1>
      {interviews.map((interview) => (
        <div key={interview.id}>
          <h2>Interview {interview.id}</h2>
          <div>{interview.interview_type}</div>
          <div>{interview.level}</div>
          <div>{interview.themes.map((theme) => theme.name).join(", ")}</div>
          <div>
            {interview.sub_themes.map((sub_theme) => sub_theme.name).join(", ")}
          </div>
          <a href={`/interview/${interview.id}`}>View Interview</a>
        </div>
      ))}
    </div>
  );
}
