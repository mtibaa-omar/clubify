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
          <div className="px-2 py-2 text-4xl font-bold text-gray-100 shadow font-robotoMono">
            No Events in the {filterType} {days} days
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
