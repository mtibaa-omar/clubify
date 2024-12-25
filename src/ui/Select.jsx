import React, { useState } from "react";

const Select = React.forwardRef(({ options, ...props }, ref) => {
  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  return (
    <select
      {...props}
      ref={ref}
      value={selectedValue}
      onChange={handleChange}
      className="bg-[#18212f] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-blue-400 border-[#2B3040]"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = "Select";
export default Select;
