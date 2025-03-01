import { useQuery } from "@tanstack/react-query";
import { getUniversities } from "../../services/apiMembers";

export function useUniversities(selectedState) {
  const clubState = selectedState === "0" ? null : selectedState;

  const {
    isLoading: isLoadingUniversities,
    data: universities,
    error,
  } = useQuery({
    queryKey: ["universities", selectedState],
    queryFn: () => getUniversities({ clubState }),
    enabled: selectedState !== "0",
  });

  return { universities, isLoadingUniversities, error };
}
