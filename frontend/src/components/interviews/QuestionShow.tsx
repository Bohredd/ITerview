import { Question } from "../../types/interview/Question";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { AnswerShow } from "./AnswerShow";

interface Props {
    questionId: number;
}

export const QuestionShow = ({ questionId }: Props) => {
    const [question, setQuestion] = useState<Question | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    console.log("QuestionShow: ", questionId);

    useFetchData<Question>({
        method: "GET",
        app_name: "interview",
        url: "question/",
        id: questionId,
        setData: setQuestion,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!question) {
        return <div>No question found</div>;
    }

    console.log("Question answer: ", question.answers);

    return (
        <div>
            <h1>{question.text} </h1>
            {question.answers.map((answer) => (
                <AnswerShow key={answer} answerId={answer} />
            ))}
        </div>
    );
}