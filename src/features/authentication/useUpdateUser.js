import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { isPending, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User data Successfully updated");
      queryClient.invalidateQueries({ queryKey: "user" });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, updateUser };
}
