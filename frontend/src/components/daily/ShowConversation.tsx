import { Speech } from "../../types/daily/Speech";
import useFetchData from "../../functions/FetchData";
import { useState } from "react";
import { ShowInfoQuestionAnswers } from "./ShowInfoQuestionAnswers";
import { ListenSpeech } from "./ListenSpeech";
import { ShowActualSpeaker } from "./ShowActualSpeaker";

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

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h4>Actual speech said : {speech.content}</h4>
      <ShowActualSpeaker personId={speech.speaker} />
      <ListenSpeech speech={speech} />
      {speech.is_question && speech.is_to_you && (
        <ShowInfoQuestionAnswers speechId={speechId} />
      )}
    </div>
  );
};

// fazer um slice com redux que abraça a tela inteira 