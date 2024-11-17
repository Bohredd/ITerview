import useFetchData from "../functions/FetchApi";
import { Interview } from "../types/Interview";
import { useState } from "react";
import { InterviewTheme } from "../types/InterviewTheme";
import { InterviewSubTheme } from "../types/InterviewSubTheme";
import { Button } from "react-bootstrap";

export function InterviewsView() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [themes, setThemes] = useState<InterviewTheme[]>([]);
  const [subThemes, setSubThemes] = useState<InterviewSubTheme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Interview[]>({
    method: "LIST",
    url: "/interview/",
    setData: setInterviews,
    setLoading,
    setError,
  });

  useFetchData<InterviewTheme[]>({
    method: "LIST",
    url: "/interview_theme/",
    setData: setThemes,
    setLoading,
    setError,
  });

  useFetchData<InterviewSubTheme[]>({
    method: "LIST",
    url: "/interview_sub_theme/",
    setData: setSubThemes,
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

  return (
    <div>
      <h1>Interviews</h1>
      {interviews.map((interview) => (
        <div key={interview.id}>
          <h2>Interview {interview.id}</h2>
          <div>{interview.interview_type}</div>
          <div>{interview.level}</div>
          <div>
            <h3>Themes</h3>
            {interview.themes.map((themeId) => {
              const theme = themes.find(
                (theme) => theme.id === Number(themeId)
              );
              return theme ? <div key={theme.id}>{theme.name}</div> : null;
            })}
            <h3>Sub Themes</h3>
            {interview.sub_themes.map((subThemeId) => {
              const subTheme = subThemes.find(
                (subTheme) => subTheme.id === Number(subThemeId)
              );
              return subTheme ? (
                <div key={subTheme.id}>{subTheme.name}</div>
              ) : null;
            })}
          </div>

          <Button variant="primary mt-3" href={`/interview/${interview.id}`}>
            View Interview
          </Button>
        </div>
      ))}
    </div>
  );
}
