import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "../../auth/AuthContext";
import { CustomNavbar } from "../../components/home/Navbar";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { setIsAuthenticated } = useAuth();

  const handleCurrentPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError("User not authenticated.");
        setLoading(false);
        setIsAuthenticated(false);
        return;
      }

      const response = await fetch(
        "https://0.0.0.0:8000/user/api/change_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_token: token,
            current_password: currentPassword,
            new_password: newPassword,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setError(null);
        console.log("Password changed successfully!");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to change password.");
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
    <>
      <CustomNavbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px", marginTop: "5vh" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formCurrentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </Form.Group>

            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && (
              <div style={{ color: "green" }}>
                Password changed successfully!
              </div>
            )}

            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="w-100"
            >
              {loading ? "Changing..." : "Change Password"}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;
