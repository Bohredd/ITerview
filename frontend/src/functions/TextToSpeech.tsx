import React from "react";

interface TextToSpeechProps {
  text: string;
}
const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const speak = () => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };

  return <button onClick={speak}>Speak</button>;
};

export default TextToSpeech;
