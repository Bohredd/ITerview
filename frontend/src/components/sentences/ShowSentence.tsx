import { Sentence } from "../../types/sentences/Sentence";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { TextToSpeech } from "../../functions/TextToSpeech";
import Alert from "react-bootstrap/Alert";

export const ShowSentence = () => {
  const [sentences, setSentences] = useState<Sentence[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<JSX.Element | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useFetchData<Sentence[]>({
    method: "LIST",
    app_name: "sentences",
    url: "sentences/",
    setData: setSentences,
    setLoading,
    setError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!sentences || sentences.length === 0) {
    return <div>No sentences found</div>;
  }

  const currentSentence = sentences[currentIndex];

  const handleListenSentence = () => {
    TextToSpeech(currentSentence.sentence);
  };

  const handleVerifySentence = () => {
    const input = document.querySelector("input") as HTMLInputElement;

    if (input) {
      setAnswered(true);

      const inputWords = input.value.trim().split(" ");
      const sentenceWords = currentSentence.sentence.trim().split(" ");

      const result = sentenceWords.map((word, index) => {
        const isCorrect = inputWords[index] === word;

        return (
          <span
            key={index}
            style={{
              color: isCorrect ? "green" : "red",
              marginRight: "5px",
            }}
          >
            {inputWords[index] || "_"}
          </span>
        );
      });

      setHighlightedText(<div>{result}</div>);
      input.value = "";
    }
  };

  const handleNextSentence = () => {
    setAnswered(false);
    setHighlightedText(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  return (
    <Container>
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "200px" }}
      >
        <Button
          variant="primary"
          onClick={handleListenSentence}
          style={{ width: "200px", height: "50px" }}
        >
          Listen Sentence
        </Button>
      </div>

      <div className="d-flex justify-content-center py-5">
        <input
          type="text"
          className="form-control w-50 text-center"
          aria-label="Text input"
          placeholder="Write what you have heard"
        />
      </div>

      {!answered && (
        <div className="d-flex justify-content-center py-0">
          <Button
            variant="success"
            style={{ width: "200px", height: "50px" }}
            onClick={handleVerifySentence}
          >
            Verify Sentence
          </Button>
        </div>
      )}

      {answered && (
        <div>
          <div className="d-flex justify-content-center py-5">
            <div>
              <Alert variant="info text-center">
                <strong>Result</strong> {highlightedText}
              </Alert>
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ gap: "10px", paddingTop: "0px" }}
          >
            <Button
              variant="primary"
              onClick={handleNextSentence}
              style={{ width: "150px" }}
            >
              OK
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};
