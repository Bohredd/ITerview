import { Person } from "../../types/daily/Person"
import useFetchData from "../../functions/FetchData"
import { useState } from "react"

interface ShowActualSpeakerProps {
    personId: number
}

export const ShowActualSpeaker = ({ personId }: ShowActualSpeakerProps) => {
    const [person, setPerson] = useState<Person | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Person>({
        method: "GET",
        app_name: "dailies",
        url: `person/`,
        id: personId,
        setData: setPerson,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!person) {
        return <div>No person found</div>;
    }

    return <div>
        <p>Actual speaker is <span className="fw-bold">{person.name}</span></p>
    </div>;
};