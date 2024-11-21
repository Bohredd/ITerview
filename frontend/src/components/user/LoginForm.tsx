import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginForm = () => {
  return (
    <div className="text-center pt-5 align-items-center">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" href="/register">
          Already have an account? Register here
        </Button>
        <Button variant="primary" href="/forgot-password">
          Forgot password?
        </Button>
      </Form>
    </div>
  );
};
