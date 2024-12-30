import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "./Button";
import { useDeleteMember } from "../features/Members/useDeleteMember";
import SpinnerMini from "./SpinnerMini";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 400,
    sm: 450,
  },
  bgcolor: "#1f2937",
  color: "white",
  border: "2px solid #2B3040",
  borderRadius: 2,
  boxShadow: 24,
  p: "1.2rem",
};

export default function ConfirmDelete({ memberId, handleClose }) {
  document.body.style.overflow = "hidden";
  const { isDeleting, deleteMember } = useDeleteMember();
  console.log(isDeleting);

  function handleDelete() {
    deleteMember(memberId, {
      onSettled: () => {
        handleClose();
        document.body.style.overflow = "";
      },
    });
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock={false}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm Delete
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="body2"
          sx={{ color: "#9ca3af", margin: "10px 0" }}
        >
          Are you sure you want to delete this member permanently? This action
          cannot be undone.
        </Typography>
        <div className="text-right text-white">
          <Button
            disabled={isDeleting}
            $variation="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            $variation="danger"
            size="small"
            disabled={isDeleting}
            onClick={handleDelete}
          >
            {isDeleting ? "Delete" : <SpinnerMini />}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
