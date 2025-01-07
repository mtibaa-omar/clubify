import { useQuery } from "@tanstack/react-query";
import { getMembersEvent } from "../../services/apiMembers";

export function useMembersEvent(university_name) {
  const {
    isLoading,
    data: members,
    error,
  } = useQuery({
    queryKey: ["membersEvent", university_name],
    queryFn: () => getMembersEvent(university_name),
    enabled: university_name !== "0",
    onError: (error) => {
      console.error(error);
    },
  });
  return { members, isLoading, error };
}
