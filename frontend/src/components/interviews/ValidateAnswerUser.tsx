import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { Answer } from "../../types/interview/Answer";
import { Button } from "react-bootstrap";
import ListenPersonAnswer from "../../functions/ListenPerson";

interface ValidateAnswerUserProps {
    correctAnswerId: number;
    setCorrect: (correct: boolean) => void;
}

export const ValidateAnswerUser = ({ correctAnswerId, setCorrect }: ValidateAnswerUserProps) => {
    
    const [correctAnswer, setCorrectAnswer] = useState<Answer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isAnswering, setIsAnswering] = useState<boolean>(false);
    const [answerUser, setAnswer] = useState<string | null>(null);
    const [recognition, setRecognition] = useState<any>(null);

    useFetchData<Answer>({
        method: "GET",
        app_name: "interview",
        url: "answer/",
        id: correctAnswerId,
        setData: setCorrectAnswer,
        setLoading,
        setError,
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!correctAnswer) {
        return <div>No answer found</div>;
    }
    
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

      setCorrect(answerUser.toLowerCase() === correctAnswer.text.toLowerCase());
      
      setIsAnswering(false);
  };

    return (

        <div>

            {answerUser && <h3>Your answer: {answerUser}</h3>}

            <Button onClick={handleAnswerQuestion}>Answer</Button>

            <Button onClick={handleStopAnswering} disabled={!isAnswering}>Stop</Button>
        </div>
    );
}