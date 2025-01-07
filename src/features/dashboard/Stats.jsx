import { RiWomenLine } from "react-icons/ri";
import Stat from "./Stat";
import { useCounting } from "./useCounting";
import { FaMale, FaRegFlag, FaUsers } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";

import Spinner from "../../ui/Spinner";

function Stats() {
  const { data, isLoading } = useCounting();
  if (isLoading) return <Spinner />;
  const { totalCount, femaleCount, maleCount, universityCount } = data;
  return (
    <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2 2xl:grid-cols-3 xl:gap-8">
      <Stat
        icon={<FaUsers size={25} />}
        title={"MEMBERS"}
        color="text-slate-600"
        bgColor="bg-slate-400"
        value={totalCount}
      />
      <Stat
        icon={<RiWomenLine size={25} />}
        title={"Female"}
        color="text-pink-600"
        bgColor="bg-pink-400"
        value={femaleCount}
      />
      <Stat
        icon={<FaMale size={25} />}
        title={"Male"}
        value={maleCount}
        color="text-blue-600"
        bgColor="bg-blue-400"
      />
      <Stat
        icon={<LiaUniversitySolid size={30} />}
        title={"Universities"}
        color="text-red-600"
        bgColor="bg-red-400"
        value={universityCount}
      />
      <Stat
        icon={<FaRegFlag size={25} />}
        title={"States"}
        color="text-green-600"
        bgColor="bg-green-400"
        value="6"
      />
    </div>
  );
}

export default Stats;
