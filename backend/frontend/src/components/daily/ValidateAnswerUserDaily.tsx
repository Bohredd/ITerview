import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { ProbablyAnswer } from "../../types/daily/ProbablyAnswer";
import { Button } from "react-bootstrap";
import ListenPersonAnswer from "../../functions/ListenPerson";

interface ValidateAnswerUserDailyProps {
    correctAnswerId: number;
}

export const ValidateAnswerUserDaily = ({ correctAnswerId }: ValidateAnswerUserDailyProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [probablyAnswer, setProbablyAnswer] = useState<ProbablyAnswer | null>(null);
    const [isAnswering, setIsAnswering] = useState<boolean>(false);
    const [answerUser, setAnswer] = useState<string | null>(null);
    const [recognition, setRecognition] = useState<any>(null);
    const [correct, setCorrect] = useState<boolean | null>(null);	

    console.log("Correct answer id: ", correctAnswerId);

    useFetchData<ProbablyAnswer>({
        method: "GET",
        app_name: "dailies",
        url: `probably_answer/`,
        id: correctAnswerId,
        setData: setProbablyAnswer,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!probablyAnswer) {
        return <div>No probably answer found</div>;
    }

    console.log('probablyAnswer: ', probablyAnswer);

  const handleAnswerQuestion = () => {
    try {
      setIsAnswering(true);
      const recognition = ListenPersonAnswer("en-US");
      setRecognition(recognition);
      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setAnswer(transcript);
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

    if (!answerUser) {
      return;
    }

    setCorrect(answerUser.toLowerCase() === probablyAnswer.answer.toLowerCase());

    console.log("Is correct: ", answerUser === probablyAnswer.answer);

    setIsAnswering(false);
  };
    return (
        <div>

            {answerUser && <h3>Your answer: {answerUser}</h3>}

            {correct !== null && <h3>{correct ? "Correct" : "Incorrect"}</h3>}

           <Button variant="primary" onClick={handleAnswerQuestion}>Answer</Button>
            <Button variant="primary" onClick={handleStopAnswering} disabled={!isAnswering}>Stop answering</Button>
        </div>
    );
}