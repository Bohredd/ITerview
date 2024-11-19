import { Speech } from "../types/Speech";
import { useState } from "react";
import useFetchDataDaily from "../functions/FetchDailyApi";
import ProbablyAnswerShow from "./ProbablyAnswer";
import { Button } from "react-bootstrap";
import ListenPersonAnswer from "../functions/ListenPerson";

interface ShowProbablyAnswersProps {
  speechId: number | string;
}

export default function ShowProbablyAnswers({
  speechId,
}: ShowProbablyAnswersProps) {
  const [speech, setSpeech] = useState<Speech | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");
  const [recognition, setRecognition] = useState<any>(null);

  useFetchDataDaily<Speech>({
    method: "GET",
    url: `/speech/`,
    id: speechId as number,
    setData: setSpeech,
    setLoading,
    setError,
  });

  console.log("speech: ", speech);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!speech) {
    return <div>No speech found</div>;
  }

  // TODO: show the information to the question (it will help the user to answer the question made to himself)
  const handleAnswer = () => {
    try {
      setIsAnswering(true);
      const recognition = ListenPersonAnswer("en-US");
      setRecognition(recognition);
      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setAnswer(transcript);
        console.log("transcript: ", transcript);
      };

      recognition.start();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleStopAnswering = () => {
    if (recognition) {
      recognition.stop();
    }

    setIsAnswering(false);

    if (answer) {
      console.log("answer is: ", answer);
    }
  };

  return (
    <div>
      <h2>Probable answers</h2>
      {speech.probably_answers.map((probablyAnswer) => (
        <div key={probablyAnswer}>
          <ProbablyAnswerShow probablyAnswerId={probablyAnswer} />
        </div>
      ))}

      {answer && <h3>Your current answer is {answer}</h3>}

      <Button variant="primary" onClick={handleAnswer}>
        Answer
      </Button>
      <Button
        variant="danger"
        onClick={handleStopAnswering}
        disabled={!isAnswering}
      >
        Stop answering
      </Button>
    </div>
  );
}
