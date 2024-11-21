import { Speech } from "../../types/daily/Speech";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { ShowInformation } from "./ShowInformation";
import { ShowProbablesAnswers } from "./ShowProbablesAnswers";

interface ShowInfoQuestionAnswersProps {
    speechId: number;
}

export const ShowInfoQuestionAnswers = ({ speechId }: ShowInfoQuestionAnswersProps) => {
    const [speech, setSpeech] = useState<Speech | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Speech>({
        method: "GET",
        app_name: "dailies",
        url: `speech/`,
        id: speechId,
        setData: setSpeech,
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

    // console.log(speech);

    return (
        <div>
            {speech.information && (
                <ShowInformation informationId={speech.information} />
                )
            }
            <ShowProbablesAnswers answersId={speech.probably_answers} />
        </div>
    );
};