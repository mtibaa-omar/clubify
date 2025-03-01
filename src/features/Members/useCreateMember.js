import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMember } from "../../services/apiMembers";
import { toast } from "react-toastify";

export function useCreateMember() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: addMember } = useMutation({
    mutationFn: createMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("Member added successfully! 👌");
    },
    onError: (err) => {
      toast.error(`Failed to add member: ${err.message} 🤯`);
    },
  });
  return { isCreating, addMember };
}
