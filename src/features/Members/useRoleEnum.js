import { useQuery } from "@tanstack/react-query";
import { fetchRoleEnumValues } from "../../services/apiMembers";

export function useRoleEnum() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["roleEnum"],
    queryFn: fetchRoleEnumValues,
    onError: (error) => {
      console.error("Error fetching role enum values:", error);
    },
  });
  return { data, isLoading, error };
}
