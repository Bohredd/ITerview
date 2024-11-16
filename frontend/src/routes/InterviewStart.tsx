import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Question } from "../types/Question";
import useFetchData from "../functions/FetchApi";
import { useState } from "react";
import { ShowQuestion } from "../components/ShowQuestion";

export const InterviewStart = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || isNaN(Number(id))) {
    return (
      <div>
        Invalid interview ID
        <Button variant="primary" href="/">
          Back
        </Button>
      </div>
    );
  }

  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Question[]>({
    method: "LIST",
    url: "/question/",
    setData: setQuestions,
    setLoading: setLoading,
    setError: setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!questions) {
    return <div>Loading...</div>;
  }

  console.log(questions);

  return (
    <div>
      <ShowQuestion question={questions[0]} is_spoken={false} />
    </div>
  );
};
