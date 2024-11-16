const VerifyAnswer = (
  answer: string,
  correctAnswer: string,
  language: string
) => {
  if (answer === correctAnswer) {
    return true;
  } else {
    if (language === "pt-BR") {
      console.log("verificar as traducoes de view, django, etc.");
    }

    return false;
  }
};

export default VerifyAnswer;
