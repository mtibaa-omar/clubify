import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import MemberRow from "./MemberRow";
import { useMembers } from "./useMembers";

function MembersTable() {
  const { members, isLoading } = useMembers();
  if (isLoading) return <Spinner />;
  return (
    <Table columns="grid-cols-3">
      <Table.Header>
        <div>Member Name</div>
        <div>Gender</div>
        <div>Role</div>
      </Table.Header>
      <Table.Body
        data={members}
        render={(member) => <MemberRow key={member.id} member={member} />}
      ></Table.Body>
    </Table>
  );
}

export default MembersTable;
