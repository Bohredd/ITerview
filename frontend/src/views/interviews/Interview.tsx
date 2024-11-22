import { Interview } from "../../types/interview/Interview"
import { useState } from "react"
import useFetchData from "../../functions/FetchData"
import { useParams } from "react-router-dom"
import { QuestionsShow } from "../../components/interviews/QuestionsShow"

export const InterviewView = () => {

    const { id } = useParams<{ id: string }>();

    // console.log(id);

    const [interview, setInterview] = useState<Interview | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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