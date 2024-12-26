import { useQuery } from "@tanstack/react-query";
import { getUniversities } from "../../services/apiMembers";
import { useSearchParams } from "react-router-dom";

export function useUniversities(selectedState) {
  const clubState = selectedState === "0" ? null : selectedState;
  const {
    isLoading: isLoadingUniversities,
    data: universities,
    error,
  } = useQuery({
    queryKey: ["universities", selectedState],
    queryFn: () => getUniversities({ clubState }),
    enabled: !!selectedState,
  });
  return { universities, isLoadingUniversities, error };
}
