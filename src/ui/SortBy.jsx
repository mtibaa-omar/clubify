import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("SortBy") || "";

  function handleChange(e) {
    console.log(e.target.value);
    searchParams.set("SortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      // onSort={handleChange}
      options={[
        { value: "nameASC", label: "Sort by Name (A-Z)" },
        { value: "nameDESC", label: "Sort by Name (Z-A)" },
        { value: "task", label: "Sort by Tasks" },
        { value: "universityName", label: "Sort by University Name" },
      ]}
    ></Select>
  );
}

export default SortBy;
