import { useQuery } from "@tanstack/react-query";
import { getCounting } from "../../services/apiMembers";

export function useCounting() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["count"],
    queryFn: getCounting,
    onError: (error) => {
      console.error("Error fetching count values:", error);
    },
  });
  return { data, isLoading, error };
}
