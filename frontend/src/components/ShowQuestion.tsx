import useFetchData from "../functions/FetchApi";
import { Question } from "../types/Question";
import { useState } from "react";
interface ShowQuestionProps {
  question: Question;
  is_spoken: boolean;
}

export const ShowQuestion = ({ question, is_spoken }: ShowQuestionProps) => {
  if (!question) {
    return <div>Loading...</div>;
  }

  if (question.answers.length === 0) {
    return <div>No answers</div>;
  }

  const [questionFiltered, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  question.answers.forEach(() => {
    useFetchData<Question>({
      method: "GET",
      url: "/get_answers_question/",
      id: question.id,
      setData: setQuestion,
      setLoading: setLoading,
      setError: setError,
    });
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!questionFiltered) {
    return <div>Loading...</div>;
  }

  console.log("is spoken: ", is_spoken);

  console.log("questionFiltered: ", questionFiltered.answers);

  return (
    <div>
      <h1>Question</h1>
      <p>{questionFiltered.text}</p>
      <h2>Answers</h2>
      {questionFiltered.answers.map((answer) => (
        <div key={answer.id}>
          <p>{answer.text}</p>
        </div>
      ))}
    </div>
  );
};
