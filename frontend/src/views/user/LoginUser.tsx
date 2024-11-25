import { LoginForm } from "../../components/user/LoginForm";
import { CustomNavbar } from "../../components/home/Navbar";

export  const LoginUser = () => {
    return (
        <>
            <CustomNavbar />
            <LoginForm />
        </>
    );
}

export default LoginUser;