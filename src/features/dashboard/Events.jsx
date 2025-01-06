import Card from "./Card";
import Spinner from "../../ui/Spinner";
import { useEvents } from "./useEvents";
import { useSearchParams } from "react-router-dom";

function Events() {
  const { isLoading, events, isFetching } = useEvents();
  const [searchParams] = useSearchParams();
  const days = searchParams.get("days");
  const filterType = searchParams.get("filterType");

  if (isLoading || isFetching) return <Spinner />;

  return (
    <div className="w-[1260px] sm:p-4">
      <div className="flex flex-col gap-8 sm:grid sm:grid-cols-3 sm:gap-6">
        {events && events.length ? (
          events.map((event) => <Card event={event} key={event.id} />)
        ) : (
          <p className="inline-block max-w-xs -ml-4 text-2xl font-bold text-gray-100 break-words whitespace-normal shadow sm:text-4xl sm:px-2 sm:py-2 font-robotoMono">
            No Events in the {filterType} {days} days
          </p>
        )}
      </div>
    </div>
  );
}

export default Events;
