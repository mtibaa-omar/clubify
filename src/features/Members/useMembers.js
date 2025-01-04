import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";
import { useSearchParams } from "react-router-dom";

export function useMembers(selectedUniversity, selectedMandat) {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("gender");
  const filter =
    !filterValue || filterValue === "unknown"
      ? null
      : { field: "gender", value: filterValue.toUpperCase() };

  // Sort logic
  const sortByRaw = searchParams.get("SortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    isLoading,
    data: members,
    error,
  } = useQuery({
    queryKey: ["members", selectedUniversity, selectedMandat, filter, sortBy],
    queryFn: () =>
      getMembers({ selectedUniversity, selectedMandat, filter, sortBy }),
    enabled: selectedUniversity !== "0",
  });

  return { members, isLoading, error };
}
