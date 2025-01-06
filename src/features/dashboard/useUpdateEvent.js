import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEvent as updateEventApi } from "../../services/apiEvents";
import { toast } from "react-toastify";

export function useUpdateEvent() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateEvent } = useMutation({
    mutationFn: ({ id, newEvent }) => updateEventApi(id, newEvent),
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
      toast.success("Event updated successfully! 👌");
    },
    onError: (err) => {
      toast.error(`Failed to update event: ${err.message} 🤯`);
    },
  });
  return { isUpdating, updateEvent };
}
