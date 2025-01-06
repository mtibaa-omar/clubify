import { PiStarFourBold } from "react-icons/pi";

function HomeRow({ title, children }) {
  return (
    <div>
      <div className="font-sans text-3xl font-bold text-sky-500">
        <div className="flex items-center gap-2">
          <div className="inline text-red-500">
            <PiStarFourBold />
          </div>
          {title}
        </div>
      </div>
      <div className="pl-4 text-lg text-gray-50">{children}</div>
    </div>
  );
}

export default HomeRow;
