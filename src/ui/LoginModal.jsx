import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import LoginForm from "../features/authentication/LoginForm";
import { HiEllipsisVertical } from "react-icons/hi2";

function LoginModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "";
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          color: "white",
          backgroundColor: "#38bdf8",
          "&:hover": {
            backgroundColor: "#0284c7",
          },
        }}
      >
        <HiEllipsisVertical />
      </IconButton>
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
                xs: 350,
                sm: 500,
              },
              border: "2px solid #2B3040",

              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <div className="">
              <LoginForm type="modal" />
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
