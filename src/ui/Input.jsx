import React from "react";

const Input = React.forwardRef((props, ref) => {
  const { disabled, ...rest } = props;

  return (
    <input
      className={`bg-[#374151] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] ${
        disabled ? "bg-[#2B3040] cursor-not-allowed border-[#4C5A6B]" : ""
      }`}
      {...rest}
      ref={ref}
      disabled={disabled}
    />
  );
});

Input.displayName = "Input";

export default Input;
