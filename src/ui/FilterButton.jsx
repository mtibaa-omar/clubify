import { FaMale } from "react-icons/fa";

function FilterButton({ children, color, btnColor, bgColor }) {
  return (
    <div className="relative flex h-[50px] w-[50px] items-center justify-center">
      <input
        type="radio"
        name="gender"
        value="male"
        className="z-20 w-full h-full opacity-0 cursor-pointer peer"
      />
      <div
        className={`absolute z-10 h-full w-full rounded-full ${btnColor} p-4 shadow-sm shadow-[#00000050] ${color} duration-300 peer-checked:scale-110 peer-checked:ring-2`}
      ></div>
      <div
        className={`absolute z-0 h-full w-full scale-0 rounded-full ${bgColor} duration-500 peer-checked:scale-[200%]`}
      ></div>
      {children}
    </div>
  );
}

export default FilterButton;
