import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import CreateMemberForm from "./CreateMemberForm";
import { useMember } from "./useMember";

function MemberDetail() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const { member, isLoading } = useMember();
  if (isLoading) return <Spinner />;
  return <CreateMemberForm memberToEdit={member} type={type} />;
}

export default MemberDetail;
