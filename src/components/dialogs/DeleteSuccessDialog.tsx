import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

type SuccessDialogProps = {
  isOpen: boolean;
  message: string;
  handleClose: () => void;
};

export const DeleteSuccessDialog = (props: SuccessDialogProps) => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
    >
      <DialogTitle id="success-dialog-title">{"成功"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="success-dialog-description">
          {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          component={Link}
          to={{
            pathname: "/",
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
