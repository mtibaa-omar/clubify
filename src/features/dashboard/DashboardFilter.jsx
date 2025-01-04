import { useSearchParams } from "react-router-dom";
import Filter from "../../ui/Filter";
import { useState, useEffect } from "react";

function DashboardFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState(
    searchParams.get("filterType") || "next"
  );

  useEffect(() => {
    searchParams.set("filterType", selectedFilter);
    setSearchParams(searchParams);
  }, [selectedFilter, searchParams, setSearchParams]);

  return (
    <div className="flex flex-col items-center sm:flex-row">
      <Filter
        filterField="days"
        options={[
          { value: "7", label: "7 days" },
          { value: "30", label: "30 days" },
          { value: "90", label: "90 days" },
        ]}
      />
      <select
        className="rounded-sm font-medium border-blue-400 text-base px-6 h-[2.5rem] text-white border-2 bg-gray-600 shadow-sm transition-colors hover:text-gray-50 focus:outline-none"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="next">Next</option>
        <option value="last">Last</option>
      </select>
    </div>
  );
}

export default DashboardFilter;
