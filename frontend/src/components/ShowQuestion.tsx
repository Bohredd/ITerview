import useFetchData from "../functions/FetchApi";
import { Question } from "../types/Question";
import { useState, useEffect } from "react";
import TextToSpeech from "../functions/TextToSpeech";
import ListenPersonAnswer from "../functions/ListenPerson";
import { Button } from "react-bootstrap";
import VerifyAnswer from "../functions/VerifyAnswer";
import { useGlobalContext } from "../App";

interface ShowQuestionProps {
  question: Question;
  is_spoken: boolean;
}

export const ShowQuestion = ({ question, is_spoken }: ShowQuestionProps) => {
  const { language, theme } = useGlobalContext();

  if (!question) {
    return <div>Loading...</div>;
  }

  if (question.answers.length === 0) {
    return <div>No answers</div>;
  }

  const [questionFiltered, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);
  const [recognitionInstance, setRecognitionInstance] = useState<any>(null);
  const [personAnswer, setPersonAnswer] = useState<string | null>(null);
  const [isCorrectedAnswered, setIsCorrectedAnswered] =
    useState<boolean>(false);
  const [clearAnswer, setClearAnswer] = useState<boolean>(false);

  question.answers.forEach(() => {
    useFetchData<Question>({
      method: "GET",
      url: "/get_answers_question/",
      id: question.id,
      setData: setQuestion,
      setLoading: setLoading,
      setError: setError,
    });
  });

  useEffect(() => {
    setIsCorrectedAnswered(false);
    setPersonAnswer(null);
    setClearAnswer(false);
  }, [question]);

  useEffect(() => {
    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop();
      }
    };
  }, [recognitionInstance]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!questionFiltered) {
    return <div>Loading...</div>;
  }

  const handleStartAnswer = async () => {
    try {
      setIsAnswering(true);
      const recognition = ListenPersonAnswer(language);
      setRecognitionInstance(recognition);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setPersonAnswer(transcript);
      };

      recognition.start();
    } catch (error) {
      console.error("Error starting speech recognition:", error);
    }
  };

  const handleFinishAnswer = () => {
    if (recognitionInstance) {
      recognitionInstance.stop();
    }
    setIsAnswering(false);

    if (personAnswer) {
      const isCorrect = VerifyAnswer(
        personAnswer,
        questionFiltered.answers.filter((answer) => answer.is_correct)[0].text,
        "pt-BR"
      );
      setIsCorrectedAnswered(isCorrect);
    }
    setPersonAnswer("");
  };

  return (
    <div>
      <h1>Question</h1>
      <p>{questionFiltered.text}</p>

      {personAnswer && <p>Your answer: {personAnswer}</p>}
      {isCorrectedAnswered && !clearAnswer && <p>Your answer is correct!</p>}
      {!isCorrectedAnswered && personAnswer && !isAnswering && !clearAnswer && (
        <p>Your answer is incorrect!</p>
      )}

      {is_spoken && TextToSpeech({ text: questionFiltered.text })}
      <h2>Answers</h2>
      {questionFiltered.answers.map((answer) => (
        <div key={answer.id}>
          <p>{answer.text}</p>
          {is_spoken && TextToSpeech({ text: answer.text })}
        </div>
      ))}

      <Button
        variant="primary"
        onClick={handleStartAnswer}
        disabled={isAnswering}
      >
        Responder
      </Button>
      <Button
        variant="primary"
        onClick={handleFinishAnswer}
        disabled={!isAnswering}
      >
        Terminar de responder.
      </Button>
      <Button
        variant="primary"
        onClick={handleFinishAnswer}
        disabled={isAnswering}
      >
        Limpar resposta.
      </Button>
    </div>
  );
};
