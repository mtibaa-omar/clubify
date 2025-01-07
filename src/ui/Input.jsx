import React from "react";

const Input = React.forwardRef((props, ref) => {
  const { disabled, ...rest } = props;

  return (
    <input
      className={`bg-[#374151] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-blue-400 border-[#2B3040] 
        disabled:bg-[#111827] disabled:cursor-not-allowed disabled:border-[#030712] disabled:opacity-70 
      `}
      {...rest}
      ref={ref}
      disabled={disabled}
    />
  );
});

Input.displayName = "Input";

export default Input;
