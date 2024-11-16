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
  const [actualQuestion, setActualQuestion] = useState<number>(0);

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

  return (
    <div>
      <ShowQuestion question={questions[actualQuestion]} is_spoken={true} />
      {actualQuestion === questions.length - 1 && (
        <Button variant="primary" href="/interviews">
          Finalizar entrevista
        </Button>
      )}

      {actualQuestion !== questions.length - 1 && (
        <Button
          variant="primary"
          onClick={() => setActualQuestion(actualQuestion + 1)}
        >
          Próxima pergunta
        </Button>
      )}
    </div>
  );
};
