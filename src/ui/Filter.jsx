import { useSearchParams } from "react-router-dom";

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get(filterField) || options[0].value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2 p-2 bg-gray-600 shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          className={`rounded-sm font-medium font-robotoMono w-[6rem] h-[2.5rem] px-1 sm:text-base sm:px-3 sm:py-2 transition-colors 
            ${
              option.value === activeFilter
                ? "bg-[#0ea5e9] text-gray-50"
                : "bg-gray-50 text-black hover:bg-[#0ea5e9] hover:text-gray-50`"
            } disabled:cursor-not-allowed`}
          disabled={option.value === activeFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
