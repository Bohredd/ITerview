import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useContext, useState, lazy } from "react";

const Home = lazy(() => import("./views/home/Home"));
const Features = lazy(() => import("./views/home/Features"));
const Pricing = lazy(() => import("./views/home/Pricing"));
const SentencesView = lazy(() => import("./views/sentences/SentencesView"));
const SentenceView = lazy(() => import("./views/sentences/Sentence"));
const See = lazy(() => import("./views/home/See"));
const InterviewsView = lazy(() => import("./views/interviews/InterviewsView"));
const InterviewView = lazy(() => import("./views/interviews/Interview"));
const DailiesView = lazy(() => import("./views/dailies/DailiesView"));
const DailyView = lazy(() => import("./views/dailies/DailyView"));
const Error404 = lazy(() => import("./views/error/Error404"));
const LoginUser = lazy(() => import("./views/user/LoginUser"));
const RegisterUser = lazy(() => import("./views/user/RegisterUser"));
const Cart = lazy(() => import("./components/home/pricing/Cart"));
const Payment = lazy(() => import("./views/payment/PaymentCheckout"));
const PaymentPending = lazy(() => import("./views/payment/PaymentPending"));
const PaymentSuccess = lazy(() => import("./views/payment/PaymentSuccess"));
const PaymentFailure = lazy(() => import("./views/payment/PaymentFailure"));

import Layout from "./components/Layout";
import ProtectedRoute from "./auth/ProtectedRoute";

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
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/interviews" element={<InterviewsView />} />
          <Route path="/dailies" element={<DailiesView />} />

          {/* Protected Routes */}
          <Route
            path="/interviews/:id"
            element={
              <ProtectedRoute>
                <InterviewView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dailies/:id"
            element={
              <ProtectedRoute>
                <DailyView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sentences/play"
            element={
              <ProtectedRoute>
                <SentenceView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart/"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/payment/checkout"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment/pending"
            element={
              <ProtectedRoute>
                <PaymentPending />
              </ProtectedRoute>
            }

          />

          <Route
            path="/payment/success"
            element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment/failure"
            element={
              <ProtectedRoute>
                <PaymentFailure />
              </ProtectedRoute>
            } 
          />

          {/* Public Routes */}
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sentences" element={<SentencesView />} />
          <Route path="/gameSelection" element={<See />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/forgot-password" element={<h1>Forgot Password</h1>} />
        {/* </Route> */}
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
