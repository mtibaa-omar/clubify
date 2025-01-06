import { HiOutlineAdjustments } from "react-icons/hi";
import Menus from "../../ui/Menus";
import { useUser } from "../authentication/useUser";
import LoginModal from "../../ui/LoginModal";
import { useDeleteEvent } from "./useDeleteEvent";

function Card({ event }) {
  const { isAuthenticated } = useUser();
  const { isDeleting, deleteEvent } = useDeleteEvent();
  const {
    id: eventId,
    eventName,
    startDate,
    endDate,
    university_name,
    description,
    location,
    poweredBy,
  } = event;
  const dateObj = new Date(startDate);
  const formattedDate = dateObj.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedStartTime = dateObj.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const formattedEndTime = new Date(endDate).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  return (
    <div className="relative overflow-hidden cursor-pointer w-80 sm:w-96 group text-gray-50 h-72 rounded-2xl ">
      <div className="flex flex-col justify-between text-gray-800 bg-sky-400 sm:w-96 h-72">
        <div className="flex flex-row justify-between">
          <HiOutlineAdjustments className="w-10 h-10 p-2 m-1 rounded-full hover:bg-sky-200" />
          <div>
            {isAuthenticated ? (
              <Menus
                id={eventId}
                bgColor="#38bdf8"
                hoverColor="#0284c7"
                name={eventName}
                link="dashboard/event"
                isDeleting={isDeleting}
                deleteFct={deleteEvent}
              />
            ) : (
              <>
                <LoginModal bgColor="#38bdf8" hoverColor="#0284c7" />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col p-4 bg-gray-50">
          <span className="text-xs font-bold text-sky-400">
            {university_name}
          </span>
          <span className="text-3xl font-bold text-gray-800">
            {formattedDate}
          </span>
        </div>
      </div>

      <div className="absolute flex flex-col w-full gap-1 p-4 text-gray-800 duration-500 bg-gray-50 -bottom-[30rem] group-hover:bottom-0 group-hover:duration-1000">
        <span className="text-xs font-bold text-sky-400">
          {university_name}
        </span>
        <span className="text-3xl font-bold text-gray-800">
          {formattedDate}
        </span>
        <span className="text-neutral-800">
          <p className="font-bold">{eventName}</p>
          Evenement Tebda {formattedStartTime} w toufa {formattedEndTime}
          <p className="font-bold">Location: {location}</p>
          <p>{description}</p>
          {poweredBy && (
            <p className="font-bold">This event is PoweredBy: {poweredBy}</p>
          )}
        </span>
      </div>
    </div>
  );
}

export default Card;
