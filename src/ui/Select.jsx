import React, { useState } from "react";

const Select = React.forwardRef(({ options, onHandle, ...props }, ref) => {
  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(e) {
    setSelectedValue(e.target.value);

    onHandle?.(e);
  }

  return (
    <select
      {...props}
      ref={ref}
      value={selectedValue}
      onChange={handleChange}
      className="select"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="max-w-48">
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = "Select";
export default Select;
