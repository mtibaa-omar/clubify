import SortBy from "../../ui/SortBy";
import Filter from "../../ui/FilterGender";

function MembersOperations() {
  return (
    <>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          { value: "role-asc", label: "Sort by Tasks (low first)" },
          { value: "role-desc", label: "Sort by Tasks (high first)" },
        ]}
      />
      <Filter />
    </>
  );
}

export default MembersOperations;
