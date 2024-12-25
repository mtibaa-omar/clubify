import Heading from "../ui/Heading";
import Filter from "../ui/FilterGender";
import Table from "../ui/Table";
import Row from "../ui/Row";
import MembersTable from "../features/Members/MembersTable";
import AddMember from "../features/Members/AddMember";

function Members() {
  return (
    <Row type="vertical">
      <Row type="horizontal">
        <Heading>Members</Heading>
        <Filter />
      </Row>
      <Row>
        <MembersTable />
        <AddMember />
      </Row>
    </Row>
  );
}

export default Members;
