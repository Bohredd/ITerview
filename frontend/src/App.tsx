import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { InterviewView } from "./routes/Interview";
import { InterviewStart } from "./routes/InterviewStart";
import { InterviewsView } from "./routes/InterviewsView";
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
type Language = "en-US" | "pt-BR";

// Define the shape of the context
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
        <Route path="/interview/:id" element={<InterviewView />} />
        <Route path="/interview/:id/start" element={<InterviewStart />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
