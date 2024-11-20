import { useParams } from "react-router-dom";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { Daily } from "../../types/daily/Daily";
import { ShowPeopleFrame } from "../../components/daily/ShowPeopleFrame";
import { ShowConversations } from "../../components/daily/ShowConversations";

export const DailyView = () => {
    const { id } = useParams<{ id: string }>();

    const [daily, setDaily] = useState<Daily | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Daily>({
        method: "GET",
        app_name: "dailies",
        url: `daily/`,
        id : id,
        setData: setDaily,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!daily) {
        return <div>No daily found</div>
    }

    console.log(daily);

    console.log(id);

    console.log(daily.people);

    return (
        <div>
            <h1>Daily</h1>
            <ShowPeopleFrame peopleId={daily.people} />
            <ShowConversations speechesId={daily.speeches} />
        </div>
    )
}