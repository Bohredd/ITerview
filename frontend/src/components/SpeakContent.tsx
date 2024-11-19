import { Speech } from "../types/Speech";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import TextToSpeech from "../functions/TextToSpeech";
import { Person } from "../types/Person";

interface SpeakContentProps {
  actualSpeechId: number | string;
}

export const SpeakContent: React.FC<SpeakContentProps> = ({
  actualSpeechId,
}) => {
  const [speech, setSpeech] = useState<Speech | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [speaker, setSpeaker] = useState<Person | null>(null);

  useFetchDataDaily<Speech>({
    method: "GET",
    url: `/speech/`,
    id: actualSpeechId as number,
    setData: setSpeech,
    setLoading,
    setError,
  });

  // console.log(`speech speaker: ${speech?.speaker}`);

  // useFetchDataDaily<Person>({
  //   method: "GET",
  //   url: `/person/`,
  //   id: speech?.speaker as number,
  //   setData: setSpeaker,
  //   setLoading,
  //   setError,
  // });

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
