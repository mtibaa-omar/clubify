import { useSearchParams } from "react-router-dom";
import { FaFemale, FaMale } from "react-icons/fa";
import FilterButton from "./FilterButton";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function FilterGender() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentGender = searchParams.get("gender");

  const handleGenderChange = (gender) => {
    searchParams.set("gender", gender);
    setSearchParams(searchParams);
  };

  const defaultGender = currentGender ?? "unknown";

  return (
    <div className="flex flex-col items-center gap-4 px-6 py-4 overflow-hidden rounded-md shadow-sm w-72 lg:py-2 ">
      <div className="flex items-center justify-center gap-4">
        <FilterButton
          color="ring-blue-400"
          btnColor="bg-blue-100"
          bgColor="bg-blue-200"
          onClick={() => handleGenderChange("male")}
          isSelected={defaultGender === "male"}
        >
          <FaMale className="absolute z-10 text-blue-400" size="30px" />
        </FilterButton>
        <FilterButton
          color="ring-pink-400"
          btnColor="bg-pink-100"
          bgColor="bg-pink-200"
          onClick={() => handleGenderChange("female")}
          isSelected={defaultGender === "female"}
        >
          <FaFemale className="absolute z-10 text-pink-400" size="30px" />
        </FilterButton>
        <FilterButton
          color="ring-neutral-400"
          btnColor="bg-neutral-100"
          bgColor="bg-neutral-200"
          onClick={() => handleGenderChange("unknown")}
          isSelected={defaultGender === "unknown"}
        >
          <AiOutlineQuestionCircle
            className="absolute z-10 text-neutral-400"
            size="30px"
          />
        </FilterButton>
      </div>
    </div>
  );
}

export default FilterGender;
