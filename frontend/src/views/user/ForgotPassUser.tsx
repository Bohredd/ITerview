import axios from "axios";
import { useState } from "react";
import { CustomNavbar } from "../../components/home/Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("alert-success");

  interface FormEvent {
    preventDefault: () => void;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/user/api/forgot_password",
        {
          email,
          username,
        }
      );

      setMessage(response.data.message);
      setMessageClass("alert-success");
    } catch (error: any) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.message}`);
        if ([404, 500].includes(error.response.status)) {
          setMessageClass("alert-danger");
        } else {
          setMessageClass("alert-warning");
        }
      } else if (error.request) {
        setMessage("Error: No response from server.");
        setMessageClass("alert-danger");
      } else {
        setMessage("An unexpected error occurred.");
        setMessageClass("alert-danger");
      }
    }

    setEmail("");
    setUsername("");
  };

  return (
    <>
      <CustomNavbar />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center w-100" style={{ maxWidth: "400px" }}>
          <h1 className="display-4 text-primary mb-4">Forgot Password</h1>
          <p className="lead mb-4">
            Enter your username and email address below, and we'll send you a
            link to reset your password.
          </p>
          {message && (
            <div className={`alert ${messageClass} mb-4`}>{message}</div>
          )}
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column justify-content-center align-items-center w-100"
          >
            <div className="mb-3 w-100">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 w-100">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Send Reset Link
            </button>
            <a href="/login" className="btn btn-link">
              Back to Login
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
