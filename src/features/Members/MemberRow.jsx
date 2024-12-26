import Table from "../../ui/Table";

function MemberRow({ member }) {
  const { name, gender, role } = member;
  const roleStatus = {
    PRESIDENT: { background: "bg-red-500", text: "text-red-100" },
  };
  const genderStatus = {
    MALE: { background: "bg-blue-500", text: "text-blue-100" },
    FEMALE: { background: "bg-pink-500", text: "text-pink-100" },
  };
  return (
    <Table.Row>
      <div className="text-gray-0 first:capitalize">{name}</div>
      <div
        className={`${genderStatus[gender]?.background} ${genderStatus[gender]?.text} rounded-lg w-fit m-auto text-[#f3f4f6] font-poppins font-[600] text-sm sm:text-base px-3 py-1 sm:py-2 sm:px-5 `}
      >
        {gender}
      </div>
      <div
        className={`${roleStatus[role]?.background} ${roleStatus[role]?.text} rounded-lg w-fit sm:m-auto text-[#f3f4f6] font-poppins font-[600] text-base px-2 sm:py-2 sm:px-5`}
      >
        {role}
      </div>
    </Table.Row>
  );
}

export default MemberRow;
