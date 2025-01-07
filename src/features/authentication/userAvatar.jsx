import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-4 text-base font-medium text-gray-100 capitalize">
      <img
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        className="object-cover object-center w-10 h-10 border-2 border-gray-100 rounded-full sm:w-14 sm:h-14"
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
