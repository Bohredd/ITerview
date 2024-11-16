import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { InterviewView } from "./routes/Interview";
import { InterviewStart } from "./routes/InterviewStart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interview/:id" element={<InterviewView />} />
      <Route path="/interview/:id/start" element={<InterviewStart />} />
    </Routes>
  );
}

export default App;
