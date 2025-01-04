import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent as deleteEventApi } from "../../services/apiEvents";
import { toast } from "react-toastify";

export function useDeleteEvent() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteEvent } = useMutation({
    mutationFn: deleteEventApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success("Event deleted successfully! 👌");
    },
    onError: (err) => {
      toast.error(`Failed to delete event: ${err.message} 🤯`);
    },
  });
  return { isDeleting, deleteEvent };
}
