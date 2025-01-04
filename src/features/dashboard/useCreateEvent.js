import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "../../services/apiEvents";
import { toast } from "react-toastify";

export function useCreateEvent() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: addEvent } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
      toast.success("Event added successfully! 👌");
    },
    onError: (err) => {
      toast.error(`Failed to add event: ${err.message} 🤯`);
    },
  });
  return { isCreating, addEvent };
}
