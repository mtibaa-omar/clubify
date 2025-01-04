import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useUser } from "../authentication/useUser";
import { HiEllipsisVertical } from "react-icons/hi2";
import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import LoginForm from "../authentication/LoginForm";
import { useDeleteMember } from "./useDeleteMember";

function MemberRow({ member }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { name, gender, role, id: memberId } = member;
  const { isDeleting, deleteMember } = useDeleteMember();

  const { isAuthenticated } = useUser();
  const genderStatus = {
    MALE: { background: "bg-blue-500", text: "text-blue-100" },
    FEMALE: { background: "bg-pink-500", text: "text-pink-100" },
  };
  return (
    <>
      <Table.Row>
        <div className="text-gray-0 first:capitalize">{name}</div>
        <div
          className={`${genderStatus[gender]?.background} ${genderStatus[gender]?.text} rounded-md lg:w-[105px] w-[70px] m-auto text-[#f3f4f6] font-poppins font-[600] text-sm lg:text-base py-1 lg:py-2 lg:px-5 `}
        >
          {gender}
        </div>
        <div className="flex items-center overflow-visible sm:justify-center md:flex-row">
          <div
            className={`${
              role === "member"
                ? "border border-gray-800 text-stone-100"
                : "bg-rose-500 text-rose-100"
            } rounded-md min-w-[80px] overflow-hidden sm:min-w-[135px] text-[#f3f4f6] capitalize font-poppins font-[600] text-sm px-3 py-2 `}
          >
            {role}
          </div>

          {isAuthenticated ? (
            <Menus
              name={name}
              id={memberId}
              link="members"
              isDeleting={isDeleting}
              deleteFct={deleteMember}
            />
          ) : (
            <IconButton
              onClick={handleOpen}
              sx={{
                color: "white",
                backgroundColor: "#4b5563",
                "&:hover": {
                  backgroundColor: "#374151",
                },
              }}
            >
              <HiEllipsisVertical />
            </IconButton>
          )}
        </div>
      </Table.Row>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              overflow: "hidden",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                xs: 400,
                sm: 500,
              },
              border: "2px solid #2B3040",

              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <>
              <LoginForm />
            </>
          </Box>
        </Modal>
      )}
    </>
  );
}

export default MemberRow;
