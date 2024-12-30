function FormRowVertical({ label, error, children }) {
  return (
    <div
      className={`space-y-2 flex flex-col
      py-3 first:pt-0 last:pb-0 
      [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#2B3040]
      [&:has(button)]:text-end
    `}
    >
      <label
        htmlFor={children.props?.id}
        className="text-2xl font-medium capitalize lg:pl-8"
      >
        {label}
      </label>
      <div className="lg:pl-8">{children}</div>
      {error && (
        <span className="block font-bold text-red-500 text-md">{error}</span>
      )}
    </div>
  );
}

export default FormRowVertical;
