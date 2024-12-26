function Button({ type = "primary", children, onClick }) {
  const color = type === "primary" ? "" : "";
  return (
    <button
      onClick={onClick}
      className="inline px-6 py-3 text-xl font-bold bg-blue-500 border-blue-100 rounded-lg w-52 text-indigo-50 focus:ring-2 focus:ring-white focus:bg-blue-600 hover:bg-blue-600"
    >
      {children}
    </button>
  );
}

export default Button;
