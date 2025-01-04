import Heading from "../ui/Heading";
import Row from "../ui/Row";
import MembersTable from "../features/Members/MembersTable";
import AddMember from "../features/Members/AddMember";
import { useUser } from "../features/authentication/useUser";
import MembersOperations from "../features/Members/MembersOperations";
import Footer from "../ui/Footer";

function Members() {
  const { isAuthenticated } = useUser();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Row type="vertical">
          <Row type="horizontal">
            <Heading>Members</Heading>
            <Row type="horizontal">
              <MembersOperations />
            </Row>
          </Row>

          <Row>
            <MembersTable />
            {isAuthenticated && <AddMember />}
          </Row>
        </Row>
      </div>

      <Footer />
    </div>
  );
}

export default Members;
