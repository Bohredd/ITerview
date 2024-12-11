import { Information } from "../../types/daily/Information";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";

interface ShowInformationProps {
    informationId: number;
}

export const ShowInformation = ({ informationId }: ShowInformationProps) => {
    const [information, setInformation] = useState<Information | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Information>({
        method: "GET",
        app_name: "dailies",
        url: `information/`,
        id: informationId,
        setData: setInformation,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!information) {
        return <div>No information found</div>;
    }

    console.log(information);

    return (
        <div>
            <h3>{information.title}</h3>
            <p>{information.content}</p>
        </div>
    );
};