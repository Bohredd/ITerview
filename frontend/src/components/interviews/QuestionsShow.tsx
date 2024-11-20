import { Button } from "react-bootstrap";
import { QuestionShow } from "./QuestionShow";
import { useState } from "react";

interface Props {
    questions: number[];
}

export const QuestionsShow = ({ questions }: Props) => {


    const [actualQuestion, setActualQuestion] = useState<number>(0);

    console.log("QuestionsShow: ", questions);

    console.log("Actual question: ", actualQuestion);

    console.log(questions);

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
        console.log("will listen");
    };

    return (
      <div>
        <QuestionShow questionId={questions[actualQuestion]} />

        <Button onClick={handlePreviousQuestion}>
          Previous
        </Button> 

        <Button onClick={handleAnswerQuestion}>Answer</Button>

        <Button onClick={handleNextQuestion}>
          Next
        </Button>
      </div>
    );
}