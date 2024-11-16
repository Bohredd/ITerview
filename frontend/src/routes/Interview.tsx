import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiService } from "../services/Api";
import { Interview } from "../types/Interview";

export const InterviewView = () => {
  const { id } = useParams<{ id: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid ID");
      setLoading(false);
      return;
    }

    const fetchInterview = async () => {
      try {
        const data = await ApiService.get<Interview>("/interview/", Number(id));
        setInterview(data);
        setLoading(false);
      } catch (err) {
        console.error("Error getting interview", err);
        setError("Failed to load interview");
        setLoading(false);
      }
    };

    fetchInterview();
  }, [id]);

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
    </div>
  );
};
