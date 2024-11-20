
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { Daily } from "../../types/daily/Daily";
import { DailyInfo } from "../../components/daily/DailyInfo";

export const DailiesView = () => {

    const [dailies, setDailies] = useState<Daily[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Daily[]>({
        method: "LIST",
        app_name: "dailies",
        url: "daily/",
        setData: setDailies,
        setLoading,
        setError,
    })

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!dailies) {
        return <div>No dailies found</div>
    }

    console.log(dailies);

    return (
        <div>
            <h1>Dailies View</h1>
            {dailies.map((daily) => (
                <DailyInfo key={daily.id} daily={daily} />
            ))}
        </div>
    );
}