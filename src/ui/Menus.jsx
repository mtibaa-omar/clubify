import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete";

function Menus({ bgColor = "#374151", memberId, name }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteClick = () => {
    handleClose();
    setOpenDeleteModal(true);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          color: "white",
          backgroundColor: bgColor,
          "&:hover": {
            backgroundColor: "#4b5563",
          },
        }}
      >
        <HiEllipsisVertical />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: bgColor,
            color: "white",
          },
        }}
      >
        <MenuItem onClick={() => navigate(`/members/${memberId}`)}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>View Details</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete {name}</MenuItem>
      </Menu>
      {openDeleteModal && (
        <ConfirmDelete
          resourceName={name}
          memberId={memberId}
          handleClose={() => setOpenDeleteModal(false)} // Close modal function
        />
      )}
    </>
  );
}

export default Menus;
