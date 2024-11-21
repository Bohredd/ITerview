
export function VerifyAnswers(answer: string, personAnswer: string) {
    if (answer === personAnswer) {
        return true;
    } else {
        return false;
    }
}