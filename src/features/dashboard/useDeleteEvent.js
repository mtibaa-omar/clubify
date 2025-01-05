import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent as deleteEventApi } from "../../services/apiEvents";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

export function useDeleteEvent() {
  const [searchParams] = useSearchParams();

  const queryClient = useQueryClient();

  const numDays = !searchParams.get("days")
    ? 7
    : Number(searchParams.get("days"));

  const filterType = searchParams.get("filterType");

  const { isPending: isDeleting, mutate: deleteEvent } = useMutation({
    mutationFn: deleteEventApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        filterType,
        numDays,
      });
      toast.success("Event deleted successfully! 👌");
    },
    onError: (err) => {
      toast.error(`Failed to delete event: ${err.message} 🤯`);
    },
  });
  return { isDeleting, deleteEvent };
}
