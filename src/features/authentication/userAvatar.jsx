import styled from "styled-components";

function UserAvatar() {
  return (
    <img
      src={"default-user.jpg"}
      alt={`Avatar of `}
      className="object-cover object-center w-10 rounded-full aspect-square outline outline-2 outline-gray-100"
    />
  );
}

export default UserAvatar;
