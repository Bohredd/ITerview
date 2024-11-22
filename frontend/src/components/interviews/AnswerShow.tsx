import { Answer } from "../../types/interview/Answer";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { Button } from "react-bootstrap";
import { BsVolumeUp } from "react-icons/bs";

interface Props {
  answerId: number;
}

export const AnswerShow = ({ answerId }: Props) => {
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Answer>({
    method: "GET",
    app_name: "interview",
    url: "answer/",
    id: answerId,
    setData: setAnswer,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!answer) {
    return <div>No answer found</div>;
  }

  return (
    <div className="text-center pb-5">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <div className="border p-3 rounded bg-light text-center">
          <h1 className="mb-0">{answer.text}</h1>
        </div>
        <Button variant="secondary">
          <BsVolumeUp />
        </Button>
      </div>
    </div>
  );
};
