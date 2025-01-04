import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMember as deleteMemberApi } from "../../services/apiMembers";
import { toast } from "react-toastify";

export function useDeleteMember() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteMember } = useMutation({
    mutationFn: deleteMemberApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("Member deleted successfully! 👌");
    },
    onError: (err) => {
      toast.error(`Failed to delete member: ${err.message} 🤯`);
    },
  });
  return { isDeleting, deleteMember };
}
