import clsx from "clsx";

const Form = ({ type, children, ...props }) => {
  const formClasses = clsx(
    "overflow-hidden text-sm",
    {
      "p-6 bg-[#374151] border-gray-200 rounded-md text-white":
        type !== "modal",
    },
    { "w-[80rem]": type === "modal" }
  );

  return (
    <form className={formClasses} {...props}>
      {children}
    </form>
  );
};

export default Form;
