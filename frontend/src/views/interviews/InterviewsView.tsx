import { Button } from "react-bootstrap";
import { CustomNavbar } from "../../components/home/Navbar";
import { Interview } from "../../types/interview/Interview";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { ShowInterview } from "../../components/interviews/ShowInterview";
export const InterviewsView = () => {

    const [interviews, setInterviews] = useState<Interview[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Interview[]> ({
        method: "LIST",
        app_name: "interview",
        url: "interview/",
        setData: setInterviews,
        setLoading,
        setError,
    })

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!interviews || interviews.length === 0) {
        return <div>No interviews found</div>;
    }

    console.log(interviews);

    return (
        <div>
            <CustomNavbar />
            <div>
                <h1>InterviewsView</h1>
                {interviews.map((interview) => (
                    <ShowInterview interview={interview} />
                ))}
            </div>
        </div>
    );
}