import { Button } from "react-bootstrap";
import { QuestionShow } from "./QuestionShow";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
    questions: number[];
}

export const QuestionsShow = ({ questions }: Props) => {


    const [actualQuestion, setActualQuestion] = useState<number>(0);
    const [correct, setCorrect] = useState<boolean | null>(null);

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

    useEffect(() => {
        setCorrect(null);
    }, [actualQuestion]);

    return (
      <div>
        <h3>You are answering question {actualQuestion + 1}</h3>

        <QuestionShow questionId={questions[actualQuestion]} setCorrect={setCorrect} correct={correct}/>

        <Button onClick={handlePreviousQuestion}>
          Previous
        </Button> 

        <Button onClick={handleNextQuestion}>
          Next
        </Button>
      </div>
    );
}