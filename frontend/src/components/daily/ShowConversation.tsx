import { Speech } from "../../types/daily/Speech";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";

interface ShowConversationProps {
  speechId: number;
}

export const ShowConversation = ({ speechId }: ShowConversationProps) => {
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

    console.log(speech);

  return <div>
    <h3>{speech.speaker}</h3>
    <p>{speech.content}</p>
  </div>;
};
