import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const sortBy = searchParams.get("SortBy") || "";

  function handleChange(e) {
    searchParams.set("SortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return <Select onHandle={handleChange} options={options}></Select>;
}

export default SortBy;
