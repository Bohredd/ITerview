import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { InterviewView } from "./routes/Interview";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interview/:id" element={<InterviewView />} />
    </Routes>
  );
}

export default App;
