import { useState } from "react";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import MemberRow from "./MemberRow";
import UniversityOperations from "./UniversityOperations";
import { useMembers } from "./useMembers";
import Pagination from "../../ui/Pagination";

function MembersTable() {
  const [selectedUniversity, setSelectedUniversity] = useState("0");
  const [selectedMandat, setSelectedMandat] = useState("0");

  const { members, isLoading, count } = useMembers(
    selectedUniversity,
    selectedMandat
  );
  return (
    <>
      <Row type="horizontal">
        <UniversityOperations
          selectedUniversity={selectedUniversity}
          setSelectedUniversity={setSelectedUniversity}
          selectedMandat={selectedMandat}
          setSelectedMandat={setSelectedMandat}
        />
      </Row>
      {isLoading ? (
        <Row type="horizontal" justify="center">
          <Spinner />
        </Row>
      ) : (
        members && (
          <Table columns="grid-cols-3">
            <Table.Header>
              <div>Member Name</div>
              <div>Gender</div>
              <div>Role</div>
            </Table.Header>
            <Table.Body
              data={members}
              render={(member) => <MemberRow key={member.id} member={member} />}
            />
            <Table.Footer>
              <Pagination count={count} />
            </Table.Footer>
          </Table>
        )
      )}
    </>
  );
}

export default MembersTable;
