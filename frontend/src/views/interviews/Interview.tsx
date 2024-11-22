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

    // console.log(interview);

    return (
      <div>
        <h1>{interview.level}</h1>
        <p>{interview.interview_type}</p>
        <QuestionsShow questions={interview.questions} />
      </div>
    );
}

export default InterviewView;