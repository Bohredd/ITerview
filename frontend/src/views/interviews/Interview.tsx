import { Interview } from "../../types/interview/Interview";
import { useState, useEffect } from "react";
import useFetchData from "../../functions/FetchData";
import { useParams } from "react-router-dom";
import { QuestionsShow } from "../../components/interviews/QuestionsShow";
import axios from "axios";
export const InterviewView = () => {
  const { id } = useParams<{ id: string }>();

  const [interview, setInterview] = useState<Interview | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [canPlayInterview, setCanPlayInterview] = useState<boolean | null>(null);

  const userToken = localStorage.getItem("authToken");

  useFetchData<Interview>({
    method: "GET",
    app_name: "interview",
    url: "interview/",
    id: Number(id),
    setData: setInterview,
    setLoading,
    setError,
  });

  console.log("userToken", userToken);

  async function checkCanPlayInterview() {
    try {
      const body = {
        user_token: userToken,
        game_name: "Fake Job Interview",
      };

      const response = await axios.post(
        `http://127.0.0.1:8000/payment/api/can_play_game/`,
        body
      );

      console.log("response", response);

      if (response.status !== 200) {
        setCanPlayInterview(false);
      } else {
        setCanPlayInterview(true);
      }
    } catch (error) {
      console.error("Error checking can play interview:", error);
      setCanPlayInterview(false);
    }
  }

  useEffect(() => {
    checkCanPlayInterview();
    console.log("montado");
  }, []);

  if (!canPlayInterview) {
    return <div>Game not available</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!interview) {
    return <div>No interview found</div>;
  }

  console.log(interview);

  if (canPlayInterview === true) {
    console.log("can play interview");
    console.log("consumação -1");
  }

  return (
    <div className="container text-center align-items-center pt-5">
      <h3>{interview.level}</h3>
      <h5 className="pb-5">{interview.interview_type}</h5>
      <QuestionsShow questions={interview.questions} />
    </div>
  );
};

export default InterviewView;
