export function TextToSpeech(text: string, voiceName?: string) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  let isSpeaking = false;

  const loadVoices = () => {
    const voices = synth.getVoices();

    if (voiceName) {
      const selectedVoice = voices.find((voice) => voice.name === voiceName);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }

    if (!isSpeaking) {
      isSpeaking = true;
      synth.speak(utterance);
    }
  };

  const voices = synth.getVoices();
  if (voices.length > 0) {
    loadVoices();
  } else {
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    } else {
      loadVoices();
    }
  }

  utterance.onend = () => {
    isSpeaking = false;
  };
}
