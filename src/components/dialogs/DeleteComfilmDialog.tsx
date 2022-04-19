import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { DELETE_SPA } from "src/graphql/deleteSpa";
import React, { useState } from "react";
import { AlertDialog } from "src/components/dialogs/AlertDialog";
import { DeleteSuccessDialog } from "src/components/dialogs/DeleteSuccessDialog";

type DeleteComfilmDialogProps = {
  isOpen: boolean;
  deleteId: number;
  handleClose: () => void;
};

export const DeleteComfilmDialog = (props: DeleteComfilmDialogProps) => {
  const [isSuccesModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);
  const [deleteSpa] = useMutation(DELETE_SPA);

  const handleDelete = async (id: number) => {
    try {
      const deleteResult = await deleteSpa({ variables: { deleteSpaId: id } });
      if (!deleteResult.data) {
        throw new Error(`${deleteResult.errors}`);
      }
      if (deleteResult.data) {
        setIsSuccessModalOpen(true);
      }
    } catch (err) {
      setIsAlertModalOpen(true);
    } finally {
      props.handleClose();
    }
    return;
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };
  const handleAlertModalClose = () => {
    setIsAlertModalOpen(false);
  };

  return (
    <>
      <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          {"温泉登録情報を削除します"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            本当に削除しますか
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>キャンセル</Button>
          <Button onClick={() => handleDelete(props.deleteId)}>OK</Button>
        </DialogActions>
      </Dialog>
      <div>
        <DeleteSuccessDialog
          isOpen={isSuccesModalOpen}
          message="温泉情報を削除しました。"
          handleClose={handleSuccessModalClose}
        />
        <AlertDialog
          isOpen={isAlertModalOpen}
          message="削除に失敗しました。お手数ですが再度お試しください。"
          handleClose={handleAlertModalClose}
        />
      </div>
    </>
  );
};
