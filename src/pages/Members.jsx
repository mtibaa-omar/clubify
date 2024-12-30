import Heading from "../ui/Heading";
import Filter from "../ui/FilterGender";
import Row from "../ui/Row";
import MembersTable from "../features/Members/MembersTable";
import AddMember from "../features/Members/AddMember";
import SortBy from "../ui/SortBy";
import { useUser } from "../features/authentication/useUser";

function Members() {
  const { isAuthenticated } = useUser();
  return (
    <Row type="vertical">
      <Row type="horizontal">
        <Heading>Members</Heading>
        <Row type="horizontal">
          <SortBy className="first:m-4" />
          <Filter />
        </Row>
      </Row>
      <Row>
        <MembersTable />
        {isAuthenticated && <AddMember />}
      </Row>
    </Row>
  );
}

export default Members;
