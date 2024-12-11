import { Button, Container } from "react-bootstrap";
import { CustomNavbar } from "../../components/home/Navbar";

const AccountPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const handleChangePassword = () => {
    window.location.href = "/change-password";
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-5">
        <h1 className="mb-4">Account</h1>
        <p>Welcome to your profile page!</p>
        <div className="d-flex flex-column gap-3 mt-4">
          <Button
            variant="primary"
            onClick={handleChangePassword}
            className="fw-bold"
          >
            Change Password
          </Button>
          <Button variant="danger" onClick={handleLogout} className="fw-bold">
            Logout
          </Button>
        </div>
      </Container>
    </>
  );
};

export default AccountPage;
