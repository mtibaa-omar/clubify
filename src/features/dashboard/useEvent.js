import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getEvent } from "../../services/apiEvents";

export function useEvent() {
  const { eventId } = useParams();
  const { data: event, isLoading } = useQuery({
    queryKey: ["event", eventId],
    queryFn: () => getEvent(eventId),
  });
  return { event, isLoading };
}
