import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "../../auth/AuthContext";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { setIsAuthenticated } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/user/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        if (token) {
          localStorage.setItem("authToken", token);

          setSuccess(true);
          setIsAuthenticated(true);

          console.log("Login successful!");
          console.log("Token stored: ", token);

          window.location.href = "/cart";
        } else {
          setError("Unexpected response: Token not found.");
        }
      } else {
        const data = await response.json();
        setError(data.message || "Invalid email or password.");
        setSuccess(false);
      }
    } catch (err) {
      setError("Network error, please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px", marginTop: "5vh" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Form.Group>

          {error && <div style={{ color: "red" }}>{error}</div>}
          {success && <div style={{ color: "green" }}>Login successful!</div>}

          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="w-100"
          >
            {loading ? "Logging in..." : "Submit"}
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <Button
            variant="link"
            className="text-primary"
            href="/forgot-password"
          >
            Forgot Password?
          </Button>
        </div>
      </div>
    </div>
  );
};
