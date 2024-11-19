import { useParams } from "react-router-dom";
import { useState } from "react";
import { Interview } from "../../types/interview/Interview";
import useFetchDataInterview from "../../functions/interview/FetchInterviewApi";
import { Button } from "react-bootstrap";

export const InterviewView = () => {
  const { id } = useParams<{ id: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (!id) {
    setError("Invalid interview ID");
    setLoading(false);
    return null;
  }

  useFetchDataInterview<Interview>({
    method: "GET",
    url: "/interview/",
    id,
    setData: setInterview,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!interview) {
    return <div>No interview found</div>;
  }

  return (
    <div>
      <h1>Interview {id}</h1>
      <div>{interview.interview_type}</div>
      <div>{interview.level}</div>
      <Button variant="primary" href={`/interview/${id}/start`}>
        Start Interview
      </Button>
    </div>
  );
};
