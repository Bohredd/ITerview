import { ShowProbablyAnswer } from "./ShowProbablyAnswer"

interface ShowProbablesAnswersProps {
    answersId: number[]
}

export const ShowProbablesAnswers = ({ answersId }: ShowProbablesAnswersProps) => {
    return (
        <div>
            {answersId.map((answerId) => (
                <ShowProbablyAnswer key={answerId} probablyAnswerId={answerId} />
            ))}
        </div>
    )
}