import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { Home } from "./views/home/Home";
import { Features } from "./views/home/Features";
import { Pricing } from "./views/home/Pricing";
import { SentencesView } from "./views/sentences/SentencesView";
import { SentenceView } from "./views/sentences/Sentence";
import { See } from "./views/home/See";
import { InterviewsView } from "./views/interviews/InterviewsView";
import { InterviewView } from "./views/interviews/Interview";
import { DailiesView } from "./views/dailies/DailiesView";
import { DailyView } from "./views/dailies/DailyView";

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
        <Route path="/interviews" element={<InterviewsView />} />
        <Route path="/dailies" element={<DailiesView />} />
        <Route path="/interviews/:id" element={<InterviewView />} />
        <Route path="/dailies/:id" element={<DailyView />} />
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
