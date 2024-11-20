const ListenPersonAnswer = (language: string) => {
  console.log("Initializing speech recognition");

  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  console.log("Language: ", language);
  recognition.lang = language;

  recognition.onresult = (event: any) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    console.log("Person answer: ", transcript);
  };

  recognition.onerror = (event: any) => {
    console.error("Speech recognition error:", event.error);
  };

  recognition.onend = () => {
    console.log("Speech recognition ended.");
  };

  return recognition;
};

export default ListenPersonAnswer;
