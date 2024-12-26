import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMember } from "../../services/apiMembers";
import { toast } from "react-toastify";

export function useCreateMember() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: addMember } = useMutation({
    mutationFn: createMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("Member added successfully! 👌", {
        className: "mt-12 max-w-72 sm:m-0 sm:max-w-100",
      });
    },
    onError: (err) => {
      toast.error(`Failed to add member: ${err.message} 🤯`, {
        className: "mt-12 max-w-72 sm:m-0 sm:max-w-100",
      });
    },
  });
  return { isCreating, addMember };
}
