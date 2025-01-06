function ButtonIcon({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition duration-200  text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600`}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
