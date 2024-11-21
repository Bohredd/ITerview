import { Speech } from "../../types/daily/Speech";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { TextToSpeech } from "../../functions/TextToSpeech";
import { ShowInfoQuestionAnswers } from "./ShowInfoQuestionAnswers";
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

    // console.log(speech);

    const handleListen = () => {
        TextToSpeech(speech.content);
    }

  return <div>
    <h3>Actual speech is : {speech.content}</h3>
    <Button onClick={handleListen}>Listen the speech</Button>
    {speech.is_question && speech.is_to_you && (
        <ShowInfoQuestionAnswers speechId={speechId} />
    )}
  </div>;
};
