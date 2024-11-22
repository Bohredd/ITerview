import { Speech } from "../../types/daily/Speech";
import { Button } from "react-bootstrap";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { Person } from "../../types/daily/Person";
import { TextToSpeech } from "../../functions/TextToSpeech";
import { BsVolumeUpFill } from "react-icons/bs";

interface ListenSpeechProps {
    speech: Speech,
}

export const ListenSpeech = ({ speech }: ListenSpeechProps) => {
  const [actualPerson, setActualPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchData<Person>({
    method: "GET",
    app_name: "dailies",
    url: `person/`,
    id: speech?.speaker,
    setData: setActualPerson,
    setLoading,
    setError,
  });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!actualPerson) {
        return <div>No person found</div>;
    }

    const handleListen = () => {
        TextToSpeech(speech.content, actualPerson?.voice);
    };

  return (
    <div>
      <Button onClick={handleListen} className="mt-2 mb-2">
        <BsVolumeUpFill />
      </Button>
    </div>
  );
}