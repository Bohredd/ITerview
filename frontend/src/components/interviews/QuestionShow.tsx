import { Question } from "../../types/interview/Question";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { AnswerShow } from "./AnswerShow";
import { ValidateAnswerUser } from "./ValidateAnswerUser";

interface Props {
    questionId: number;
    setCorrect: (correct: boolean) => void;
    correct: boolean | null;
}

export const QuestionShow = ({ questionId, setCorrect, correct }: Props) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [getCorrectAnswerQuestion, setGetCorrectAnswerQuestion] = useState<Question | null>(null);

  useFetchData<Question>({
    method: "GET",
    app_name: "interview",
    url: "question/",
    id: questionId,
    setData: setQuestion,
    setLoading,
    setError,
  });

  useFetchData<Question>({
    method: "GET",
    app_name: "interview",
    url: "questions-correct-answers/",
    id: questionId,
    setData: setGetCorrectAnswerQuestion,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!question) {
    return <div>No question found</div>;
  }

  if (!getCorrectAnswerQuestion) {
    return <div>No correct answer found</div>;
  }

  return (
    <div>
      <h1>{question.text} </h1>
      {question.answers.map((answer) => (
        <AnswerShow key={answer} answerId={answer} />
      ))}

      {correct !== null && <h3>Your answer is correct ? {correct ? "Yes" : "No"}</h3>}

      <ValidateAnswerUser correctAnswerId={getCorrectAnswerQuestion.answers[0]} setCorrect={setCorrect} />

    </div>
  );
}