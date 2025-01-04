function Stat({ icon, title, value, color, bgColor }) {
  return (
    <div className="border-2 border-[#2B3040] rounded-md p-4 grid grid-cols-[6.4rem_1fr] gap-x-4 gap-y-1 bg-gray-700 min-w-72">
      <div
        className={`row-span-2 aspect-square rounded-full flex items-center justify-center w-16 ${bgColor}`}
      >
        <div className={`${color}`}>{icon}</div>
      </div>
      <h5 className="self-end font-semibold tracking-wide text-gray-400 uppercase text-md">
        {title}
      </h5>
      <p className="text-2xl font-medium leading-none text-gray-300">{value}</p>
    </div>
  );
}

export default Stat;
