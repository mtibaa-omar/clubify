function FilterButton({
  children,
  color,
  btnColor,
  bgColor,
  isSelected,
  onClick,
}) {
  const handleChange = (event) => {
    onClick(event.target.value);
  };
  return (
    <div className="relative flex h-[50px] w-[50px] items-center justify-center">
      <input
        type="radio"
        name="gender"
        value={
          children.props.className.includes("text-blue")
            ? "male"
            : children.props.className.includes("text-pink")
            ? "female"
            : "unknown"
        }
        checked={isSelected}
        className="z-20 w-full h-full opacity-0 cursor-pointer peer"
        onChange={handleChange}
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
