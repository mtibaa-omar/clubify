import Spinner from "../../ui/Spinner";
import CreateMemberForm from "./CreateMemberForm";
import { useMember } from "./useMember";

function MemberDetail() {
  const { member, isLoading } = useMember();
  if (isLoading) return <Spinner />;
  return <CreateMemberForm memberToEdit={member} />;
}

export default MemberDetail;
