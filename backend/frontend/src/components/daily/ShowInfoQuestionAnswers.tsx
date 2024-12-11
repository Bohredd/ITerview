import { Speech } from "../../types/daily/Speech";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { ShowInformation } from "./ShowInformation";
import { ShowProbablesAnswers } from "./ShowProbablesAnswers";
import { ValidateAnswerUserDaily } from "./ValidateAnswerUserDaily";

interface ShowInfoQuestionAnswersProps {
    speechId: number;
}

export const ShowInfoQuestionAnswers = ({ speechId }: ShowInfoQuestionAnswersProps) => {
    const [speech, setSpeech] = useState<Speech | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [correctProbablyAnswer, setCorrectProbablyAnswer] = useState<Speech | null>(null);

    useFetchData<Speech>({
        method: "GET",
        app_name: "dailies",
        url: `speech/`,
        id: speechId,
        setData: setSpeech,
        setLoading,
        setError,
    });

    useFetchData<Speech>({
        method: "GET",
        app_name: "dailies",
        url: `correct_answer/`,
        id: speechId,
        setData: setCorrectProbablyAnswer,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!speech) {
        return <div>No speech found</div>;
    }

    if (!correctProbablyAnswer) {
        return <div>No probably answer found</div>;
    }

    console.log('correct probably answer: ', correctProbablyAnswer.probably_answers);

    // console.log(speech);

    return (
        <div>
            {speech.information && (
                <ShowInformation informationId={speech.information} />
                )
            }
            <ShowProbablesAnswers answersId={speech.probably_answers} />


            <ValidateAnswerUserDaily correctAnswerId={correctProbablyAnswer.probably_answers[0]} />
          
        </div>
    );
};