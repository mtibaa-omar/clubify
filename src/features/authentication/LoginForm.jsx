import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useState } from "react";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isPending, login } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setPassword("");
          setEmail("");
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Login</Heading>
      <FormRowVertical label="Email address">
        <Input
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>

      <FormRowVertical label="Password ">
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="medium">{isPending ? <SpinnerMini /> : "Login"}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
