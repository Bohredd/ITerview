export function TextToSpeech(text: string, voiceName?: string) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  if (voiceName) {
    const voices = synth.getVoices();
    const selectedVoice = voices.find((voice) => voice.name === voiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
  }

  synth.speak(utterance);
}
