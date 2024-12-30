import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Users() {
  return (
    <Row type="vertical">
      <Heading>Users</Heading>
      <SignupForm />
    </Row>
  );
}

export default Users;
