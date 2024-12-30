function Heading({ children, size = "medium" }) {
  const fontSize = size === "medium" ? "text-4xl" : "text-2xl";
  return (
    <div className="py-2">
      <h1 className={`font-sans font-bold text-gray-100 ${fontSize}`}>
        {children}
      </h1>
    </div>
  );
}

export default Heading;
