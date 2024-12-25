function FormRow({ label, error, children }) {
  return (
    <div
      className={`space-y-2 sm:space-y-0
        sm:grid sm:items-center sm:gap-6 sm:grid-cols-[24rem_1fr_1.2fr] 
        py-3 first:pt-0 last:pb-0 not-last:border-b not-last:border-gray-200 
        [&:has(button)]:flex [&:has(button)]:justify-end [&:has(button)]:gap-3
      `}
    >
      <label
        htmlFor={children.props?.id}
        className="text-2xl font-medium sm:pl-2"
      >
        {label}
      </label>
      {children}
      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
}

export default FormRow;
