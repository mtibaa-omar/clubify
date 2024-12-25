function Button({ type = "primary", children, onClick }) {
  const color = type === "primary" ? "" : "";
  return (
    <button
      onClick={onClick}
      className="inline w-48 px-6 py-3 text-xl font-bold bg-blue-500 border-blue-100 rounded-lg text-indigo-50 focus:ring-2 focus:ring-white focus:bg-blue-600 hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
// className="inline px-5 py-2 font-bold bg-blue-500 border-2 border-blue-500 rounded-lg text-indigo-50 focus:ring-2 focus:ring-white"
export default Button;
