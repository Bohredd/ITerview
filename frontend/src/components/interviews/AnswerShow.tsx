
import { Answer } from "../../types/interview/Answer";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { Button } from "react-bootstrap";

interface Props {
    answerId: number;
}

export const AnswerShow = ({ answerId }: Props) => {
    const [answer, setAnswer] = useState<Answer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    console.log("AnswerShow: ", answerId);

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
        <div>
            <h1>{answer.text}</h1>
            <Button variant="primary">Listen</Button>
        </div>
    );
};