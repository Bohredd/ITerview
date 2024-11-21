import { ProbablyAnswer } from "../../types/daily/ProbablyAnswer";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";

interface ShowProbablyAnswerProps {
    probablyAnswerId: number;
}

export const ShowProbablyAnswer = ({ probablyAnswerId }: ShowProbablyAnswerProps) => {
    const [probablyAnswer, setProbablyAnswer] = useState<ProbablyAnswer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<ProbablyAnswer>({
      method: "GET",
      app_name: "dailies",
      url: `probably_answer/`,
      id: probablyAnswerId,
      setData: setProbablyAnswer,
      setLoading,
      setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!probablyAnswer) {
        return <div>No probably answer found</div>;
    }

    console.log(probablyAnswer);

    return (
        <div>
            <h3>{probablyAnswer.answer}</h3> 
            {/* put the permission to listen the answer here */}
        </div>
    );
}