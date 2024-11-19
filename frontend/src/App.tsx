import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SeeProducts } from "./routes/home/SeeProducts";
import { InterviewView } from "./routes/interviews/Interview";
import { InterviewStart } from "./routes/interviews/InterviewStart";
import { InterviewsView } from "./routes/interviews/InterviewsView";
import { createContext, useContext, useState } from "react";
import { DailiesView } from "./routes/dailies/DailiesView";
import { DailyStart } from "./routes/dailies/DailyStart";
import { DailyView } from "./routes/dailies/Daily";
import { Home } from "./routes/home/Home";

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
        <Route path="/see" element={<SeeProducts />} />
        <Route path="/interviews" element={<InterviewsView />} />
        <Route path="/interview/:id" element={<InterviewView />} />
        <Route path="/interview/:id/start" element={<InterviewStart />} />
        <Route path="/dailies" element={<DailiesView />} />
        <Route path="/daily/:id" element={<DailyView />} />
        <Route path="/daily/:id/start" element={<DailyStart />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
