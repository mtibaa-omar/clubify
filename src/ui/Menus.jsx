import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete";

function Menus({
  bgColor = "#4b5563",
  hoverColor = "#374151",
  id,
  name,
  link,
  deleteFct,
  isDeleting,
}) {
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
          fontWeight: "bold",
          fontSize: 25,
          width: "3rem",
          height: "3rem",
          backgroundColor: bgColor,
          "&:hover": {
            backgroundColor: hoverColor,
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
        <MenuItem onClick={() => navigate(`/${link}/${id}`)}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>View Details</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete {name}</MenuItem>
      </Menu>
      {openDeleteModal && (
        <ConfirmDelete
          resourceName={name}
          id={id}
          handleClose={() => setOpenDeleteModal(false)}
          isDeleting={isDeleting}
          deleteFct={deleteFct}
        />
      )}
    </>
  );
}

export default Menus;
