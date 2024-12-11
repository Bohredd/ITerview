import { Button } from "react-bootstrap";
import { Interview } from "../../types/interview/Interview";
import { InterviewTheme } from "../../types/interview/InterviewTheme";
import { InterviewSubTheme } from "../../types/interview/InterviewSubTheme";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { ShowTheme } from "./ShowTheme";
import { ShowSubTheme } from "./ShowSubTheme";
import { Card } from "react-bootstrap";

interface ShowInterviewProps {
  interview: Interview;
}

export const ShowInterview = ({ interview }: ShowInterviewProps) => {
  const [themes, setThemes] = useState<InterviewTheme[]>([]);
  const [subThemes, setSubThemes] = useState<InterviewSubTheme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<InterviewTheme[]>({
    method: "LIST",
    app_name: "interview",
    url: "interview_theme/",
    setData: setThemes,
    setLoading,
    setError,
  });

  useFetchData<InterviewSubTheme[]>({
    method: "LIST",
    app_name: "interview",
    url: "interview_sub_theme/",
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

  const filteredThemes = themes.filter((theme) =>
    interview.themes.includes(theme.id)
  );
  const filteredSubThemes = subThemes.filter((subTheme) =>
    interview.sub_themes.includes(subTheme.id)
  );

  if (!filteredThemes || filteredThemes.length === 0) {
    return <div>No themes found</div>;
  }

  if (!filteredSubThemes || filteredSubThemes.length === 0) {
    return <div>No sub themes found</div>;
  }

  console.log(filteredThemes);
  console.log(filteredSubThemes);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title>
          Interview {interview.interview_type} {interview.level}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div>
          <p>Questions : {interview.questions.length}</p>
          <h5>Interview themes</h5>
          <ul>
            {filteredThemes.map((theme) => (
              <ShowTheme key={theme.id} theme={theme} />
            ))}
          </ul>
          <h5>Interview sub themes</h5>
          <ul>
            {filteredSubThemes.map((subTheme) => (
              <ShowSubTheme key={subTheme.id} subTheme={subTheme} />
            ))}
          </ul>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" href={`/interviews/${interview.id}`}>
          Play
        </Button>
      </Card.Footer>
    </Card>
  );
};
