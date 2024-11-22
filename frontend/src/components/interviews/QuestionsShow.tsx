import { Button } from "react-bootstrap";
import { QuestionShow } from "./QuestionShow";
import { useState } from "react";
import { useEffect } from "react";
import Badge from "react-bootstrap/Badge";

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
      <div className="container text-center align-items-center">
        <h3 className="fw-bold pb-3">You are answering question <Badge bg="primary"> {actualQuestion + 1} </Badge></h3>

        <QuestionShow actualQuestionNumber={actualQuestion} questionId={questions[actualQuestion]} setCorrect={setCorrect} correct={correct}/>

        <div className="d-flex justify-content-center gap-3 mt-3">

          <Button onClick={handlePreviousQuestion}>
            Previous
          </Button> 

          <Button onClick={handleNextQuestion}>
            Next
          </Button>

        </div>
      </div>
    );
}