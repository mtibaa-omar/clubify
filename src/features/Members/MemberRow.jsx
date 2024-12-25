import Table from "../../ui/Table";

function MemberRow({ member }) {
  const { memberName, gender, tache } = member;
  return (
    <Table.Row>
      <div className="text-gray-0">{memberName}</div>
      <div>{gender}</div>
      <div>{tache}</div>
    </Table.Row>
  );
}

export default MemberRow;
