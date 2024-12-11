
import { useState } from "react"
import { Person } from "../../types/daily/Person"
import useFetchData from "../../functions/FetchData"
import { Daily } from "../../types/daily/Daily"


interface ShowYouProps {
    youId: number,
    daily: Daily
}

export const ShowYou = ({ youId, daily }: ShowYouProps) => {

    const [you, setYou] = useState<Person | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useFetchData<Person>({
        method: "GET",
        app_name: "dailies",
        url: `person/`,
        id: youId,
        setData: setYou,
        setLoading,
        setError,
    })

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!you) {
        return <div>No person found</div>
    }


    return (
      <div>
        <p>
          You are <span className="fw-bold"> {you.name} </span> and you work as a
          <span className="fw-bold"> {you.role} </span>
        </p>
        <p>
          Your atributions are <span className="fw-bold"> {daily.your_atributions} </span>
        </p>
      </div>
    );
}