import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <Heading>Update Your account</Heading>
      <Row>
        <Heading size="small">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>
      <Row>
        <Heading size="small">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </Row>
  );
}

export default Settings;
