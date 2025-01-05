import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useMembers(selectedUniversity, selectedMandat) {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const filterValue = searchParams.get("gender");
  const filter =
    !filterValue || filterValue === "unknown"
      ? null
      : { field: "gender", value: filterValue.toUpperCase() };

  // Sort logic
  const sortByRaw = searchParams.get("SortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    isLoading,
    data: { data: members, count } = {},
    error,
  } = useQuery({
    queryKey: [
      "members",
      selectedUniversity,
      selectedMandat,
      filter,
      sortBy,
      page,
    ],
    queryFn: () =>
      getMembers({ selectedUniversity, selectedMandat, filter, sortBy, page }),
    enabled: selectedUniversity !== "0",
  });

  //PRE-FETCHING
  const PageCounting = Math.ceil(count / PAGE_SIZE);
  if (page < PageCounting)
    queryClient.prefetchQuery({
      queryKey: [
        "members",
        selectedUniversity,
        selectedMandat,
        filter,
        sortBy,
        page + 1,
      ],
      queryFn: () =>
        getMembers({
          selectedUniversity,
          selectedMandat,
          filter,
          sortBy,
          page: page + 1,
        }),
      enabled: selectedUniversity !== "0",
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: [
        "members",
        selectedUniversity,
        selectedMandat,
        filter,
        sortBy,
        page - 1,
      ],
      queryFn: () =>
        getMembers({
          selectedUniversity,
          selectedMandat,
          filter,
          sortBy,
          page: page - 1,
        }),
      enabled: selectedUniversity !== "0",
    });
  return { members, isLoading, count, error };
}
