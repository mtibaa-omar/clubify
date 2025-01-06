import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useUser } from "../authentication/useUser";
import { useDeleteMember } from "./useDeleteMember";
import LoginModal from "../../ui/LoginModal";

function MemberRow({ member }) {
  const { name, gender, role, id: memberId } = member;
  const { isDeleting, deleteMember } = useDeleteMember();

  const { isAuthenticated } = useUser();
  const genderStatus = {
    MALE: { background: "bg-blue-500", text: "text-blue-100" },
    FEMALE: { background: "bg-pink-500", text: "text-pink-100" },
  };
  return (
    <>
      <Table.Row>
        <div className="text-gray-0 first:capitalize">{name}</div>
        <div
          className={`${genderStatus[gender]?.background} ${genderStatus[gender]?.text} rounded-md lg:w-[105px] w-[70px] m-auto text-[#f3f4f6] font-poppins font-[600] text-sm lg:text-base py-1 lg:py-2 lg:px-5 `}
        >
          {gender}
        </div>
        <div className="flex items-center overflow-visible sm:justify-center md:flex-row">
          <div
            className={`${
              role === "member"
                ? "border border-gray-800 text-stone-100"
                : "bg-rose-500 text-rose-100"
            } rounded-md min-w-[80px] overflow-hidden sm:min-w-[135px] text-[#f3f4f6] capitalize font-poppins font-[600] text-sm px-3 py-2 `}
          >
            {role}
          </div>

          {isAuthenticated ? (
            <Menus
              name={name}
              id={memberId}
              link="members"
              isDeleting={isDeleting}
              deleteFct={deleteMember}
            />
          ) : (
            <LoginModal />
          )}
        </div>
      </Table.Row>
    </>
  );
}

export default MemberRow;
