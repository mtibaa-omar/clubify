import Card from "./Card";
import Spinner from "../../ui/Spinner";
import { useEvents } from "./useEvents";
import { useSearchParams } from "react-router-dom";

function Events() {
  const { isLoading, events } = useEvents();
  const [searchParams] = useSearchParams();
  const days = searchParams.get("days");
  const filterType = searchParams.get("filterType");
  if (isLoading) return <Spinner />;
  return (
    <div className="w-[1260px] p-4">
      <div className="grid grid-cols-3 gap-6 ">
        {Object.keys(events).length ? (
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
