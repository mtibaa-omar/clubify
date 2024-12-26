import { FaFemale, FaMale } from "react-icons/fa";
import FilterButton from "./FilterButton";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Filter({ options, filterField }) {
  return (
    <div className="w-72 flex flex-col items-center gap-4 overflow-hidden rounded-md py-4 px-6 sm:py-2 shadow-sm shadow-[#00000050]">
      {/* <span className="z-10 hidden font-mono text-base font-black text-center uppercase sm:block text-neutral-100">
        Please select your gender
      </span> */}
      <div className="flex items-center justify-center gap-4">
        <FilterButton
          color="ring-blue-400"
          btnColor="bg-blue-100"
          bgColor="bg-blue-200"
        >
          <FaMale className="absolute z-10 text-blue-400" size="30px" />
        </FilterButton>
        <FilterButton
          color="ring-pink-400"
          btnColor="bg-pink-100"
          bgColor="bg-pink-200"
        >
          <FaFemale className="absolute z-10 text-pink-400" size="30px" />
        </FilterButton>
        <FilterButton
          color="ring-neutral-400"
          btnColor="bg-neutral-100"
          bgColor="bg-neutral-200"
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

export default Filter;
