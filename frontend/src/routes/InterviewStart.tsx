import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Question } from "../types/Question";
import useFetchData from "../functions/FetchApi";
import { useEffect, useState } from "react";
import { ShowQuestion } from "../components/ShowQuestion";
import { Interview } from "../types/Interview";

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

  const [interview, setInterview] = useState<Interview | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [actualQuestion, setActualQuestion] = useState<number>(0);

  useFetchData<Interview>({
    method: "GET",
    url: "/get_questions_interview/",
    id: Number(id),
    setData: setInterview,
    setLoading: setLoading,
    setError: setError,
  });

  useEffect(() => {
    if (interview) {
      setQuestions(interview.questions);
    }
  }, [interview]);

  if (!interview) {
    return <div>Loading...</div>;
  }

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

      {actualQuestion !== 0 && (
        <Button
          variant="primary"
          onClick={() => setActualQuestion(actualQuestion - 1)}
        >
          Pergunta anterior
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
