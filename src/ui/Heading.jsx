import { useMembers } from "../features/Members/useMembers";

function Heading({ children }) {
  return (
    <div className="py-2">
      <h1 className="font-sans text-4xl font-bold text-gray-100 sm:text-5xl">
        {children}
      </h1>
    </div>
  );
}

export default Heading;
