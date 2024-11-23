import { Interview } from "../../types/interview/Interview"
import { useState } from "react"
import useFetchData from "../../functions/FetchData"
import { useParams } from "react-router-dom"
import { QuestionsShow } from "../../components/interviews/QuestionsShow"
import axios from "axios"

export const InterviewView = () => {

    const { id } = useParams<{ id: string }>();

    const [interview, setInterview] = useState<Interview | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const userToken = localStorage.getItem("authToken");

    console.log("userToken", userToken);

    // TODO: continuar a implementacao de can play this game 

    const canPlay = async () => {

        const body = {
            "user_token": userToken,
            "game_name": "Fake Job Interview",
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/payments/api/can_play_game/",
                body,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data.can_play;
        } catch (error) {
            console.error("Error fetching data", error);
            return false;
        }
    };

    const canPlayInterview = canPlay();

    if (!canPlayInterview) {
        return <div>Cannot play this interview</div>;
    }

    useFetchData<Interview>({
        method: "GET",
        app_name: "interview",
        url: "interview/",
        id: Number(id),
        setData: setInterview,
        setLoading,
        setError,
    })

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }   

    if (!interview) {
        return <div>No interview found</div>
    }

    return (
      <div className="container text-center align-items-center pt-5">
        <h3>{interview.level}</h3>
        <h5 className="pb-5">{interview.interview_type}</h5>
        <QuestionsShow questions={interview.questions} />
      </div>
    );
}

export default InterviewView;