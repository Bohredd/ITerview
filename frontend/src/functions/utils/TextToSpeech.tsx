import React from "react";
import { Button } from "react-bootstrap";

interface TextToSpeechProps {
  text: string;
  voice?: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, voice }) => {
  const speak = () => {
    console.log("speak");
    const synth = window.speechSynthesis;

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = () => {
        synth.getVoices().map((voice) => ({
          voiceURI: voice.voiceURI,
          lang: voice.lang,
          name: voice.name,
          default: voice.default,
        }));
      };
    }

    const utterThis = new SpeechSynthesisUtterance(text);

    if (voice) {
      utterThis.voice = synth.getVoices().find((v) => v.name === voice) ?? null;
    }
    synth.speak(utterThis);
  };

  return (
    <Button variant="primary" onClick={speak}>
      Speak
    </Button>
  );
};

export default TextToSpeech;
