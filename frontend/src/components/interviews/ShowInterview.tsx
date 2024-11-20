import { Button } from "react-bootstrap";
import { Interview } from "../../types/interview/Interview";
import { InterviewTheme } from "../../types/interview/InterviewTheme";
import { InterviewSubTheme } from "../../types/interview/InterviewSubTheme";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { ShowTheme } from "./ShowTheme";
import { ShowSubTheme } from "./ShowSubTheme";
interface ShowInterviewProps {
    interview: Interview;
}

export const ShowInterview = ({ interview }: ShowInterviewProps) => {

    const [themes, setThemes] = useState<InterviewTheme[]>([]);
    const [subThemes, setSubThemes] = useState<InterviewSubTheme[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<InterviewTheme[]>({
        method: "LIST",
        app_name: "interview",
        url: "interview_theme/",
        setData: setThemes,
        setLoading,
        setError,
    });

    useFetchData<InterviewSubTheme[]>({
        method: "LIST",
        app_name: "interview",
        url: "interview_sub_theme/",
        setData: setSubThemes,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!themes || themes.length === 0) {
        return <div>No themes found</div>;
    }

    if (!subThemes || subThemes.length === 0) {
        return <div>No sub themes found</div>;
    }

    console.log(themes);
    console.log(subThemes);


    return (
        <div>
            <h3>Interview {interview.interview_type} {interview.level}</h3>
            <p>Questions : {interview.questions.length}</p>
            <p>Interview themes</p>
            <ul>
                {themes.map((theme) => (
                    <ShowTheme theme={theme} />
                ))}
            </ul>
            <p>Interview sub themes</p>
            <ul>
                {subThemes.map((subTheme) => (
                    <ShowSubTheme subTheme={subTheme} />
                ))}
            </ul>

            <Button variant="primary" href={`/interviews/${interview.id}`}>Play</Button>
        </div>
    );
}