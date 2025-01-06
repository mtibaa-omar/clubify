import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

function HomeCard({ children }) {
  const [like, setLike] = useState(false);
  return (
    <div className="max-w-md overflow-hidden text-white transition-all duration-500 ease-in-out bg-gray-600 rounded-xl md:max-w-2xl hover:shadow-2xl hover:bg-gray-800">
      <div className="flex justify-between">
        <div className="p-8">
          <div className="-ml-6 text-3xl font-semibold tracking-wide uppercase text-sky-500">
            Association Sos!
          </div>
          <p className="block mt-1 text-2xl font-medium leading-tight text-white">
            Sos Club!
          </p>
          <p className="max-w-[200px] sm:max-w-full mt-2 text-gray-400">
            {children}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 space-x-4">
          <button
            style={{ marginRight: 20 }}
            className="text-red-500 hover:text-white"
            onClick={() => setLike(!like)}
          >
            {like ? <IoHeart size={40} /> : <IoMdHeartEmpty size={40} />}
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
