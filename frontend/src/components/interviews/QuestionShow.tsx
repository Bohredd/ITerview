import { Question } from "../../types/interview/Question";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { AnswerShow } from "./AnswerShow";
import { ValidateAnswerUser } from "./ValidateAnswerUser";
import { Button } from "react-bootstrap";
import { BsVolumeUp } from "react-icons/bs";

interface Props {
    actualQuestionNumber: number
    questionId: number;
    setCorrect: (correct: boolean) => void;
    correct: boolean | null;
}

export const QuestionShow = ({
  actualQuestionNumber, 
  questionId,
  setCorrect,
  correct,
}: Props) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [getCorrectAnswerQuestion, setGetCorrectAnswerQuestion] =
    useState<Question | null>(null);

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
       <div className="d-flex justify-content-center align-items-center gap-2">
        <h1 className="fw-bold fs-1">
          Q{actualQuestionNumber + 1}: {question.text}{" "}
        </h1>
        <Button variant="secondary">
          <BsVolumeUp />
        </Button>
      </div>

      <div className="d-flex flex-column pt-3 pb-3">
        <div className="border p-3 rounded bg-light text-center">
          <p className="fw-bold text-secondary">Probably Answers</p>
          {question.answers.map((answer) => (
            <AnswerShow key={answer} answerId={answer} />
          ))}
        </div>
      </div>

      {correct !== null && (
        <h3>Your answer is correct ? {correct ? "Yes" : "No"}</h3>
      )}

      <ValidateAnswerUser
        correctAnswerId={getCorrectAnswerQuestion.answers[0]}
        setCorrect={setCorrect}
      />
    </div>
  );
};