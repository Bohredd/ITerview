import { Speech } from "../types/Speech";
import { Button } from "react-bootstrap";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import TextToSpeech from "../functions/TextToSpeech";

interface SpeakContentProps {
  actualSpeechId: number | string;
}

export const SpeakContent: React.FC<SpeakContentProps> = ({
  actualSpeechId,
}) => {
  const [speech, setSpeech] = useState<Speech | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useFetchDataDaily<Speech>({
    method: "GET",
    url: `/speech/`,
    id: actualSpeechId as number,
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

  return TextToSpeech({ text: speech.content });
};
