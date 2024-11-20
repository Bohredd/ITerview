import { Button } from "react-bootstrap";
import { QuestionShow } from "./QuestionShow";
import { useState } from "react";
import ListenPersonAnswer from "../../functions/ListenPerson";
// import { VerifyAnswers } from "../../functions/VerifyAnswers";

interface Props {
    questions: number[];
}

export const QuestionsShow = ({ questions }: Props) => {


    const [actualQuestion, setActualQuestion] = useState<number>(0);
    const [isAnswering, setIsAnswering] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string | null>(null);
    const [recognition, setRecognition] = useState<any>(null);

    const handleNextQuestion = () => {
        if (actualQuestion < questions.length - 1) {
            setActualQuestion(actualQuestion + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (actualQuestion > 0) {
            setActualQuestion(actualQuestion - 1);
        }
    };

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

        if (!answer) {
            return;
        }

        //  todo: validate the answer 

        // const isCorrect = VerifyAnswers(answer, );

        setIsAnswering(false);
    };

    return (
      <div>
        <h3>You are answering question {actualQuestion + 1}</h3>
        {answer && (
        <p>You said: {answer}</p> 
        )}

        <QuestionShow questionId={questions[actualQuestion]} />

        <Button onClick={handlePreviousQuestion}>
          Previous
        </Button> 

        <Button onClick={handleAnswerQuestion}>Answer</Button>

        <Button onClick={handleStopAnswering} disabled={!isAnswering}>Stop</Button>

        <Button onClick={handleNextQuestion}>
          Next
        </Button>
      </div>
    );
}