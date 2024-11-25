import { Sentence } from "../../types/sentences/Sentence";
import { useEffect, useState } from "react";
import useFetchData from "../../functions/FetchData";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { TextToSpeech } from "../../functions/TextToSpeech";
import Alert from "react-bootstrap/Alert";
import { BsVolumeUpFill } from "react-icons/bs";
import ListenPersonAnswer from "../../functions/ListenPerson";
import axios from "axios";

export const ShowSentence = () => {
  const [sentences, setSentences] = useState<Sentence[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<JSX.Element | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState<number>(
    Math.floor(Math.random() * 10)
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [answerUser, setAnswer] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);
  const [isCorrectUserSpeech, setIsCorrectUserSpeech] = useState<boolean | null>(
    null
  );

  const [canPlaySentence, setCanPlaySentence] = useState<boolean | null>(null);

  const userToken = localStorage.getItem("authToken");

  useFetchData<Sentence[]>({
    method: "LIST",
    app_name: "sentences",
    url: "sentences/",
    setData: setSentences,
    setLoading,
    setError,
  });

  useEffect(() => {
    setIsAnswering(false);
    setAnswer(null);
    setRecognition(null);
    setIsCorrectUserSpeech(null);
    setShowTranslation(false);
  }, [currentIndex]);

  
  console.log("userToken", userToken);

  async function checkCanPlaySentence() {
    try {
      const body = {
        user_token: userToken,
        game_name: "Most Common Sentences",
      };

      const response = await axios.post(
        `http://127.0.0.1:8000/payment/api/can_play_game/`,
        body
      );

      console.log("response", response);

      if (response.status !== 200) {
        setCanPlaySentence(false);
      } else {
        setCanPlaySentence(true);
      }
    } catch (error) {
      console.error("Error checking can play interview:", error);
      setCanPlaySentence(false);
    }
  }

  useEffect(() => {
    checkCanPlaySentence();
    console.log("montado");

    if (canPlaySentence) {
      
      async function deductConsumption() {
        try {
          const body = {
            user_token: userToken,
            game_name: "Most Common Sentences",
          };

          const response = await axios.post(
            `http://127.0.0.1:8000/payment/api/discount_game_usage/`,
            body
          );

          console.log("response", response);

          if (response.status !== 200) {
            setCanPlaySentence(false);
          } else {
            console.log("consumação -1");
            setCanPlaySentence(true);
          }
        } catch (error) {
          console.error("Error checking can play interview:", error);
          setCanPlaySentence(false);
        }
      }

      deductConsumption();

    }
  }, [currentIndex]);

  if (!canPlaySentence) {
    return <div>You have reached your most common sentences limit per month</div>;
  }

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
        const isCorrect =
          inputWords[index]?.trim().toLowerCase() === word.trim().toLowerCase();

        return (
          <span
            key={index}
            style={{
              color: isCorrect ? "green" : "red",
              marginRight: "5px",
              fontWeight: isCorrect ? "bold" : "normal",
            }}
          >
            {inputWords[index] || "_"}
          </span>
        );
      });

      setHighlightedText(<div>{result}</div>);
      input.value = "";

      const isCorrect = sentenceWords.every(
        (word, index) =>
          inputWords[index]?.trim().toLowerCase() === word.trim().toLowerCase()
      );

      setIsAnswerCorrect(isCorrect);
    }
  };

  const handleRetry = () => {
    setAnswered(false);
    setHighlightedText(null);
    setIsAnswerCorrect(null);
  };

  const handleNextSentence = () => {
    setAnswered(false);
    setHighlightedText(null);
    setIsAnswerCorrect(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  const handleGenerateNewSentence = () => {
    setAnswered(false);
    setHighlightedText(null);
    setIsAnswerCorrect(null);
    setCurrentIndex(Math.floor(Math.random() * sentences.length)); 
  };

  const handleTryRepeat = () => {
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

  const handleStopTryRepeat = () => {
    if (recognition) {
      recognition.stop();
    }

    if (!answerUser) {
      return;
    }

    let answerUserAdjusted = answerUser;

    answerUserAdjusted = answerUserAdjusted.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    setIsCorrectUserSpeech(
      answerUserAdjusted.toLowerCase() === currentSentence.sentence.toLowerCase()
    );

    setIsAnswering(false);
  };

  const handleToggleTranslation = () => {
    setShowTranslation(!showTranslation);
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
          <BsVolumeUpFill />
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
            {isAnswerCorrect ? (
              <Button
                variant="primary"
                onClick={handleNextSentence}
                style={{ width: "150px" }}
              >
                Next Sentence
              </Button>
            ) : (
              <Button
                variant="warning"
                onClick={handleRetry}
                style={{ width: "150px" }}
              >
                Try Again
              </Button>
            )}
            <Button
              variant="secondary"
              onClick={handleGenerateNewSentence}
              style={{ width: "150px" }}
            >
              Generate New Sentence
            </Button>
          </div>

          {answerUser && <h3>Your answer: {answerUser}</h3>}

          {!isAnswering && answerUser && (
            <h3>{isCorrectUserSpeech ? "Correct" : "Incorrect"}</h3>
          )}

          {isAnswerCorrect && (
            <div
              className="d-flex justify-content-center"
              style={{ gap: "10px", paddingTop: "10px" }}
            >
              <Button
                variant="info"
                onClick={handleTryRepeat}
                style={{ width: "200px" }}
              >
                Try to repeat the sentence
              </Button>
              <Button
                variant="info"
                onClick={handleStopTryRepeat}
                style={{ width: "200px" }}
              >
                {" "}
                Stop
              </Button>
              <Button
                variant="info"
                onClick={handleToggleTranslation}
                style={{ width: "200px" }}
              >
                See the translation in your language
              </Button>
            </div>
          )}

          {showTranslation && (
            <div className="d-flex justify-content-center py-3">
              <div className="alert alert-info" style={{ width: "50%" }}>
                <strong>Translation:</strong> {currentSentence.translation_ptbr}
              </div>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};
