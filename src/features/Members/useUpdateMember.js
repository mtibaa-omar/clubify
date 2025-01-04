import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMember as updateMemberApi } from "../../services/apiMembers";
import { toast } from "react-toastify";

export function useUpdateMember() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateMember } = useMutation({
    mutationFn: ({ newMember, id }) => updateMemberApi(newMember, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("Member updated successfully! 👌");
    },
    onError: (err) => {
      toast.error(`Failed to update member: ${err.message} 🤯`);
    },
  });
  return { isUpdating, updateMember };
}
