import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import Row from "../ui/Row";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center bg-gray-700 min-h-svh">
      <div className="mx-auto py-[50px] w-[350px] sm:w-[550px] lg:w-[800px] ">
        <Row type="vertical">
          <LoginForm />
        </Row>
      </div>
    </div>
  );
}

export default Login;
