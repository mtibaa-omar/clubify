import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../../services/apiEvents";
import { addDays, subDays } from "date-fns";

import { useSearchParams } from "react-router-dom";

export function useEvents() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("days")
    ? 7
    : Number(searchParams.get("days"));
  const filterType = searchParams.get("filterType");

  const queryDate =
    filterType === "next"
      ? addDays(new Date(), numDays).toISOString()
      : subDays(new Date(), numDays).toISOString();
  const {
    isLoading,
    isFetching,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events", filterType, numDays],
    queryFn: () => getEvents({ filterType, queryDate }),
  });
  return { events, isLoading, isFetching, error };
}
