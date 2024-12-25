import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className="bg-[#18212f] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export default Input;
