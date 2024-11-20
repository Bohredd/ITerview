import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { Home } from "./views/home/Home";
import { Features } from "./views/home/Features";
import { Pricing } from "./views/home/Pricing";
import { SentencesView } from "./views/sentences/SentencesView";
import { SentenceView } from "./views/sentences/Sentence";
import { See } from "./views/home/See";

type Theme = "light" | "dark";
type Language = "en-US" | "pt-BR";

interface GlobalContextType {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("en-US");

  return (
    <GlobalContext.Provider value={{ theme, language, setTheme, setLanguage }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviews" element={<h1>Interviews</h1>} />
        <Route path="/dailies" element={<h1>Dailies</h1>} />
        <Route path="/interviews/:id" element={<h1>Interview</h1>} />
        <Route path="/dailies/:id" element={<h1>Daily</h1>} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sentences" element={<SentencesView />} />
        <Route path="/sentences/play" element={<SentenceView />} />
        <Route path="/gameSelection" element={<See />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
